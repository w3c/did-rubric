#!/usr/bin/env node
import { promises as fs } from "node:fs";
import path from "node:path";

const RUBRIC_ROOT = path.resolve(process.cwd(), "rubric");
const CRITERIA_ROOT = path.resolve(RUBRIC_ROOT, "criteria");
const TEMPLATE_FILE = path.join(RUBRIC_ROOT, "rubric-template.json"); // change if needed
const CRITERIA_INDEX_FILE = path.join(RUBRIC_ROOT, "criteria-index.json");
const OUTPUT_FILE = path.join(RUBRIC_ROOT, "rubric.json");

function isJsonFile(name) {
  return name.toLowerCase().endsWith(".json");
}

async function readJson(filePath) {
  const raw = await fs.readFile(filePath, "utf8");
  return JSON.parse(raw);
}

/**
 * Resolve "./rulemaking" (from template) relative to CRITERIA_ROOT.
 * Also supports "rulemaking" or "criteria/rulemaking" etc.
 */
function resolveCategoryDir(criteriaRef) {
  if (typeof criteriaRef !== "string") {
    throw new Error(`category.criteriaFolder must be a string path; got ${typeof criteriaRef}`);
  }

  // Normalize things like "./rulemaking" -> "rulemaking"
  const ref = criteriaRef.replace(/^[.][/\\]/, "");

  // If they accidentally include "criteria/...", strip it
  const stripped = ref.replace(/^criteria[/\\]/, "");

  return path.resolve(CRITERIA_ROOT, stripped);
}

async function loadAllCriteria(dirPath) {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });

  const jsonFiles = entries
    .filter((e) => e.isFile() && isJsonFile(e.name))
    .map((e) => e.name)

  const index = Object.create(null);

  for (const filename of jsonFiles) {
    const fullPath = path.join(dirPath, filename);
    let parsed;
    try {
      parsed = await readJson(fullPath);
    } catch (e) {
      throw new Error(`Failed to read/parse JSON: ${fullPath}\n${e.message}`);
    }

    if (typeof parsed !== "object" || parsed === null) {
      throw new Error(`Criteria file must contain a JSON object: ${fullPath}`);
    }

    if (typeof parsed.id !== "string" || !parsed.id.trim()) {
      throw new Error(`Criteria file must have a non-empty "id" string: ${fullPath}`);
    }

    const id = parsed.id;
    if (Object.prototype.hasOwnProperty.call(index, id)) {
      throw new Error(`Duplicate criteria id "${id}" found in ${fullPath}`);
    }

    index[id] = parsed;
  }

  return index;
}

async function buildRubric(criteriaIndex) {
  const template = await readJson(TEMPLATE_FILE);

  if (!template || typeof template !== "object" || !Array.isArray(template.categories)) {
    throw new Error(`Template must be an object with "categories": [] at ${TEMPLATE_FILE}`);
  }

  const hydratedCategories = [];
  for (const cat of template.categories) {
    if (!cat || typeof cat !== "object") {
      throw new Error(`Each category must be an object. Got: ${JSON.stringify(cat)}`);
    }
    if (typeof cat.name !== "string" || !cat.name.trim()) {
      throw new Error(`Each category must have a non-empty "name" string.`);
    }

    // Expect template to contain "criteria" as an array of criterion ids
    const criteriaRefs = Array.isArray(cat.criteria) ? cat.criteria : Array.isArray(cat.criteriaIds) ? cat.criteriaIds : null;

    if (!Array.isArray(criteriaRefs)) {
      throw new Error(
        `Category "${cat.name}" must have a "criteria" array of criterion ids (e.g. ["crit-1", "crit-2"]).`
      );
    }

    const hydratedCriteria = criteriaRefs.map((critId) => {
      if (typeof critId !== "string" || !critId.trim()) {
        throw new Error(`Invalid criterion id in category "${cat.name}": ${String(critId)}`);
      }
      const item = criteriaIndex[critId];
      if (!item) {
        throw new Error(
          `Category "${cat.name}" references unknown criterion id "${critId}". Ensure "${critId}" exists in ${CRITERIA_ROOT}`
        );
      }
      // shallow clone to avoid accidental shared references
      return JSON.parse(JSON.stringify(item));
    });

    hydratedCategories.push({
      name: cat.name,
      description: cat.description ?? "",
      criteria: hydratedCriteria,
    });

    console.log(`Built category "${cat.name}" with ${hydratedCriteria.length} criteria.`);
  }

  const hydrated = { categories: hydratedCategories };

  await fs.writeFile(OUTPUT_FILE, JSON.stringify(hydrated, null, 2) + "\n", "utf8");
  console.log(
    `Wrote hydrated rubric -> ${path.relative(process.cwd(), OUTPUT_FILE)}`
  );
}

async function main() {
  // Ensure criteria root exists
  try {
    const stat = await fs.stat(CRITERIA_ROOT);
    if (!stat.isDirectory()) throw new Error("not a directory");
  } catch {
    throw new Error(`Criteria directory not found: ${CRITERIA_ROOT}`);
  }

  const criteriaIndex = await loadAllCriteria(CRITERIA_ROOT);

  // Build rubric.json using template + index
  await buildRubric(criteriaIndex);
}

main().catch((err) => {
  console.error(err.stack || err.message || err);
  process.exit(1);
});

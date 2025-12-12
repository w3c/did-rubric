#!/usr/bin/env node
import { promises as fs } from "node:fs";
import path from "node:path";

const CRITERIA_ROOT = path.resolve(process.cwd(), "criteria");
const TEMPLATE_FILE = path.join(CRITERIA_ROOT, "rubric-template.json"); // change if needed
const OUTPUT_FILE = path.join(CRITERIA_ROOT, "index.json");

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

async function loadCriteriaFromDir(dirPath, categoryName) {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });

  const jsonFiles = entries
    .filter((e) => e.isFile() && isJsonFile(e.name))
    .filter((e) => e.name !== "index.json" && e.name !== "rubric-template.json")
    .map((e) => e.name)

  const items = [];
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
    items.push(parsed);
  }

  return items;
}

async function buildHydratedIndex() {
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
    if (typeof cat.criteriaFolder !== "string" || !cat.criteriaFolder.trim()) {
      throw new Error(`Category "${cat.name}" must have "criteriaFolder" path string.`);
    }

    const criteriaDir = resolveCategoryDir(cat.criteriaFolder);

    // Ensure folder exists
    try {
      const stat = await fs.stat(criteriaDir);
      if (!stat.isDirectory()) throw new Error("not a directory");
    } catch {
      throw new Error(
        `Category "${cat.name}" criteria directory not found: ${criteriaDir} (from "${cat.criteria}")`
      );
    }

    const criteriaItems = await loadCriteriaFromDir(criteriaDir, cat.name);

    criteriaItems.sort((a, b) => a.order < b.order ? -1 : a.order > b.order ? 1 : 0);

    // Replace criteria path with hydrated array
    hydratedCategories.push({
      name: cat.name,
      description: cat.description ?? "",
      criteria: criteriaItems,
    });
  }

  const hydrated = { categories: hydratedCategories };

  await fs.writeFile(OUTPUT_FILE, JSON.stringify(hydrated, null, 2) + "\n", "utf8");
  console.log(
    `Wrote ${hydratedCategories.length} categories -> ${path.relative(process.cwd(), OUTPUT_FILE)}`
  );
}

buildHydratedIndex().catch((err) => {
  console.error(err.stack || err.message || err);
  process.exit(1);
});

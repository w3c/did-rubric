#!/usr/bin/env node
import { promises as fs } from "fs";
import path from "path";
import { CRITERIA_ROOT, EVALUATIONS_ROOT, RUBRIC_OUTLINE_FILE, OUTPUT_FILE, EVALUATIONS_OUTPUT_FILE, loadAllCriteria, readJson, isJsonFile } from "./utils.js";


async function buildRubric(criteriaIndex) {
  const outline = await readJson(RUBRIC_OUTLINE_FILE);

  if (!outline || typeof outline !== "object" || !Array.isArray(outline.categories)) {
    throw new Error(`Rubric outline must be an object with "categories": [] at ${RUBRIC_OUTLINE_FILE}`);
  }

  const hydratedCategories = [];
  for (const cat of outline.categories) {
    if (!cat || typeof cat !== "object") {
      throw new Error(`Each category must be an object. Got: ${JSON.stringify(cat)}`);
    }
    if (typeof cat.name !== "string" || !cat.name.trim()) {
      throw new Error(`Each category must have a non-empty "name" string.`);
    }

    // Expect outline to contain "criteria" as an array of criterion ids
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


  // Target file has prefix to set up rubricJson variable in valid javascript
  const outputContent = `var rubricJson = ${JSON.stringify(hydrated, null, 2)}`
  await fs.writeFile(OUTPUT_FILE, outputContent + "\n", "utf8");

   console.log(
    `Wrote hydrated rubric -> ${path.relative(process.cwd(), OUTPUT_FILE)}`
  );
}

async function buildEvaluations() {
  const entries = await fs.readdir(EVALUATIONS_ROOT, { withFileTypes: true });
  const jsonFiles = entries
    .filter((e) => e.isFile() && isJsonFile(e.name))
    .map((e) => e.name)
    .sort();

  const evaluations = [];
  for (const filename of jsonFiles) {
    const fullPath = path.join(EVALUATIONS_ROOT, filename);
    const parsed = await readJson(fullPath);
    evaluations.push(parsed);
  }

  const outputContent = `var evaluationsJson = ${JSON.stringify(evaluations, null, 2)}`;
  await fs.writeFile(EVALUATIONS_OUTPUT_FILE, outputContent + "\n", "utf8");

  console.log(
    `Wrote evaluations (${evaluations.length}) -> ${path.relative(process.cwd(), EVALUATIONS_OUTPUT_FILE)}`
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

  // Build rubric.json using outline + index
  await buildRubric(criteriaIndex);

  // Build evaluations.js
  await buildEvaluations();
}

main().catch((err) => {
  console.error(err.stack || err.message || err);
  process.exit(1);
});

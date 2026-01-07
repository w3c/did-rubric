#!/usr/bin/env node
import { promises as fs } from "node:fs";
import path from "path";
import Ajv from "ajv";
import yaml from "js-yaml";
import { CRITERIA_ROOT, TEMPLATE_FILE, loadAllCriteria, readJson } from "./utils.js";

async function validateRubric() {
  // Ensure criteria root exists
  try {
    const stat = await fs.stat(CRITERIA_ROOT);
    if (!stat.isDirectory()) throw new Error("not a directory");
  } catch {
    throw new Error(`Criteria directory not found: ${CRITERIA_ROOT}`);
  }

  // Load schema
  const schemaPath = path.join(process.cwd(), "did-criteria.yml");
  const schemaYaml = await fs.readFile(schemaPath, "utf8");
  const schema = yaml.load(schemaYaml);
  const ajv = new Ajv({ strict: false });
  const validate = ajv.compile(schema);

  // Load all criteria
  const criteriaIndex = await loadAllCriteria(CRITERIA_ROOT);
  console.log(`Loaded ${Object.keys(criteriaIndex).length} criteria files.`);

  // Validate each criteria against schema
  const invalidCriteria = [];
  for (const [critId, criterion] of Object.entries(criteriaIndex)) {
    const valid = validate(criterion);
    if (!valid) {
      invalidCriteria.push({ id: critId, errors: validate.errors });
    }
  }

  if (invalidCriteria.length > 0) {
    console.error(`\n❌ Schema validation failed: ${invalidCriteria.length} criteria are invalid:`);
    for (const { id, errors } of invalidCriteria) {
      console.error(`  - ${id}`);
      for (const error of errors) {
        console.error(`    ${error.instancePath || "/"} ${error.message}`);
      }
    }
    process.exit(1);
  }

  console.log(`✅ Schema validation passed: All ${Object.keys(criteriaIndex).length} criteria are valid.`);

  // Load template
  const template = await readJson(TEMPLATE_FILE);
  if (!template || typeof template !== "object" || !Array.isArray(template.categories)) {
    throw new Error(`Template must be an object with "categories": [] at ${TEMPLATE_FILE}`);
  }

  // Collect all referenced criteria IDs
  const referencedIds = new Set();
  for (const cat of template.categories) {
    if (!cat || typeof cat !== "object") {
      throw new Error(`Each category must be an object. Got: ${JSON.stringify(cat)}`);
    }

    const criteriaRefs = Array.isArray(cat.criteria) ? cat.criteria : Array.isArray(cat.criteriaIds) ? cat.criteriaIds : null;

    if (!Array.isArray(criteriaRefs)) {
      throw new Error(
        `Category "${cat.name}" must have a "criteria" array of criterion ids.`
      );
    }

    for (const critId of criteriaRefs) {
      if (typeof critId !== "string" || !critId.trim()) {
        throw new Error(`Invalid criteria id in category "${cat.name}": ${String(critId)}`);
      }
      referencedIds.add(critId);
    }
  }

  console.log(`Found ${referencedIds.size} unique criteria referenced in template.`);

  // Check that all referenced criteria exist
  const missingIds = [];
  for (const critId of referencedIds) {
    if (!criteriaIndex[critId]) {
      missingIds.push(critId);
    }
  }

  if (missingIds.length > 0) {
    console.error(`\n❌ Validation failed: ${missingIds.length} referenced criteria are missing:`);
    for (const missingId of missingIds) {
      console.error(`  - ${missingId}`);
    }
    process.exit(1);
  }

  console.log(`\n✅ Validation passed: All ${referencedIds.size} referenced criteria are present.`);
}

validateRubric().catch((err) => {
  console.error(err.stack || err.message || err);
  process.exit(1);
});


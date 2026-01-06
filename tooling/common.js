import { promises as fs } from "node:fs";
import path from "node:path";

export const RUBRIC_ROOT = path.resolve(process.cwd(), "../rubric");
export const CRITERIA_ROOT = path.resolve(RUBRIC_ROOT, "criteria");
export const TEMPLATE_FILE = path.join(RUBRIC_ROOT, "rubric-template.json");
export const OUTPUT_FILE = path.join(RUBRIC_ROOT, "rubric.js");

export function isJsonFile(name) {
  return name.toLowerCase().endsWith(".json");
}

export async function readJson(filePath) {
  const raw = await fs.readFile(filePath, "utf8");
  return JSON.parse(raw);
}

export async function loadAllCriteria(dirPath) {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });

  const jsonFiles = entries
    .filter((e) => e.isFile() && isJsonFile(e.name))
    .map((e) => e.name);

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


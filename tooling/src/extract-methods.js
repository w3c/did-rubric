#!/usr/bin/env node
import { promises as fs } from "fs";
import path from "path";
import { RUBRIC_ROOT } from "./utils.js";

const INDEX_FILE = path.resolve(RUBRIC_ROOT, "../index.html");
const METHODS_ROOT = path.resolve(RUBRIC_ROOT, "methodsConsidered");

function normalizeWhitespace(s) {
  return s.replace(/\s+/g, " ").trim();
}

function stripTags(s) {
  return normalizeWhitespace(s.replace(/<[^>]+>/g, ""));
}

function parseCell(html) {
  const linkMatch = html.match(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/i);
  if (linkMatch) {
    const url = linkMatch[1];
    const linkText = stripTags(linkMatch[2]);
    const remainder = stripTags(html.replace(linkMatch[0], ""));
    if (remainder) {
      return { name: linkText, url, note: remainder };
    }
    return { name: linkText, url };
  }
  return stripTags(html);
}

function extractMethodsSection(html) {
  const sectionMatch = html.match(
    /<section[^>]*id="methods-considered"[\s\S]*?<\/section>/i
  );
  if (!sectionMatch) {
    throw new Error('Could not find <section id="methods-considered"> in index.html');
  }
  return sectionMatch[0];
}

function parseRows(sectionHtml) {
  const rowRegex = /<tr\s+id="(did:[^"]+)"[^>]*>([\s\S]*?)<\/tr>/gi;
  const methods = [];
  let m;
  while ((m = rowRegex.exec(sectionHtml)) !== null) {
    const id = m[1];
    const inner = m[2];

    const cells = [];
    const cellRegex = /<td\b[^>]*>([\s\S]*?)<\/td>/gi;
    let c;
    while ((c = cellRegex.exec(inner)) !== null) {
      cells.push(c[1]);
    }

    if (cells.length < 4) {
      throw new Error(`Row ${id} has ${cells.length} cells, expected 4`);
    }

    methods.push({
      method: stripTags(cells[0]) || id,
      specification: parseCell(cells[1]),
      network: parseCell(cells[2]),
      registry: parseCell(cells[3]),
    });
  }
  return methods;
}

async function main() {
  const html = await fs.readFile(INDEX_FILE, "utf8");
  const section = extractMethodsSection(html);
  const methods = parseRows(section);

  if (methods.length === 0) {
    throw new Error("No method rows extracted");
  }

  await fs.mkdir(METHODS_ROOT, { recursive: true });

  for (const method of methods) {
    const slug = method.method.replace(/^did:/, "");
    const filename = `${slug}.json`;
    const fullPath = path.join(METHODS_ROOT, filename);
    await fs.writeFile(fullPath, JSON.stringify(method, null, 2) + "\n", "utf8");
    console.log(`Wrote ${path.relative(process.cwd(), fullPath)}`);
  }

  console.log(`\nExtracted ${methods.length} methods into ${path.relative(process.cwd(), METHODS_ROOT)}`);
}

main().catch((err) => {
  console.error(err.stack || err.message || err);
  process.exit(1);
});

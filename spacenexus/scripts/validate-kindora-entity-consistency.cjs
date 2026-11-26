const fs = require("node:fs");
const path = require("node:path");
const ts = require("typescript");

const root = process.cwd();
const baseUrl = process.argv[2] || "http://localhost:3000";
const entityPath = path.join(root, "app/kindora/components/kindora-entity.ts");
const compiled = ts.transpileModule(fs.readFileSync(entityPath, "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
const entityModule = { exports: {} };
new Function("module", "exports", compiled)(entityModule, entityModule.exports);
const {
  createKindoraOrganizationSchema,
  kindoraOrganizationId,
  kindoraCanonicalUrl,
} = entityModule.exports;
const expected = createKindoraOrganizationSchema();

const routes = [
  "/kindora",
  "/kindora/about",
  "/kindora/features",
  "/kindora/donor-crm",
  "/kindora/solutions/community-organizations",
  "/kindora/blog",
  "/kindora/blog/complete-guide-nonprofit-management-software",
  "/kindora/pricing",
  "/kindora/vs-competitors",
  "/kindora/careers",
  "/kindora/careers/full-stack-developer",
  "/kindora/ecosystem",
  "/kindora/veritas-graph",
  "/kindora/social-media",
];

function flatten(value, output = []) {
  if (!value || typeof value !== "object") return output;
  if (Array.isArray(value)) {
    for (const item of value) flatten(item, output);
    return output;
  }
  output.push(value);
  for (const child of Object.values(value)) flatten(child, output);
  return output;
}

function sameAsValues(entity) {
  const value = entity.sameAs ?? [];
  return [...(Array.isArray(value) ? value : [value])].sort();
}

function identity(entity) {
  return {
    id: entity["@id"],
    name: entity.name,
    alternateName: entity.alternateName,
    url: entity.url,
    logo: entity.logo?.url,
    contactEmail: entity.contactPoint?.email,
    contactUrl: entity.contactPoint?.url,
    parentId: entity.parentOrganization?.["@id"],
    parentName: entity.parentOrganization?.name,
    sameAs: sameAsValues(entity),
  };
}

async function main() {
  const rows = [];
  const errors = [];
  const expectedIdentity = identity(expected);

  for (const route of routes) {
    const response = await fetch(new URL(route, baseUrl));
    if (!response.ok) {
      errors.push(`${route}: HTTP ${response.status}`);
      continue;
    }
    const html = await response.text();
    const scripts = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
    const graphs = scripts.flatMap((match) => {
      try { return [JSON.parse(match[1])]; }
      catch { errors.push(`${route}: invalid JSON-LD script`); return []; }
    });
    const entities = graphs.flatMap((graph) => flatten(graph));
    const organizationNodes = entities.filter((entity) => entity["@id"] === kindoraOrganizationId && entity["@type"] === "Organization");
    if (organizationNodes.length !== 1) {
      errors.push(`${route}: expected one full Kindora Organization node at ${kindoraOrganizationId}, found ${organizationNodes.length}`);
      continue;
    }
    const actual = identity(organizationNodes[0]);
    if (JSON.stringify(actual) !== JSON.stringify(expectedIdentity)) {
      errors.push(`${route}: Kindora Organization identity differs from shared source`);
    }

    for (const entity of entities) {
      for (const key of ["provider", "publisher", "brand", "manufacturer", "about", "hiringOrganization"]) {
        const reference = entity[key];
        for (const node of Array.isArray(reference) ? reference : [reference]) {
          if (node?.["@type"] === "Organization" && node.name === "Kindora" && node["@id"] !== kindoraOrganizationId) {
            errors.push(`${route}: ${key} contains a duplicate Kindora Organization with a different or missing @id`);
          }
        }
      }
    }
    rows.push({ route, scripts: scripts.length, ...actual });
  }

  if (rows.length !== routes.length) errors.push(`Crawled ${rows.length}/${routes.length} routes`);
  if (errors.length) {
    console.error(errors.join("\n"));
    process.exitCode = 1;
    return;
  }

  const report = [
    "# Kindora knowledge-graph identity crawl",
    "",
    `Crawl date: ${new Date().toISOString().slice(0, 10)}`,
    `Base URL: ${baseUrl}`,
    `Canonical product URL: ${kindoraCanonicalUrl}`,
    `Organization @id: ${kindoraOrganizationId}`,
    "",
    "| Route | JSON-LD scripts | Organization name | alternateName | URL | Logo | Contact | Parent @id | sameAs |",
    "|---|---:|---|---|---|---|---|---|---|",
    ...rows.map((row) => `| ${row.route} | ${row.scripts} | ${row.name} | ${row.alternateName} | ${row.url} | ${row.logo} | ${row.contactEmail} | ${row.parentId} | ${row.sameAs.length ? row.sameAs.join(", ") : "None verified; omitted"} |`),
    "",
    `Result: all ${rows.length} rendered routes exposed exactly one matching Kindora Organization entity. Child organization references were checked for conflicting Kindora IDs.`,
    "",
    "The `sameAs` list is intentionally omitted because no official Kindora social profile URLs have yet been verified by account owners.",
  ].join("\n");
  fs.writeFileSync(path.join(root, "KINDORA-ENTITY-CONSISTENCY-AUDIT.md"), report);
  console.log(`Entity consistency crawl passed for ${rows.length} routes. Report: KINDORA-ENTITY-CONSISTENCY-AUDIT.md`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

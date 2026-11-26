const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const root = process.cwd();
const entityPath = path.resolve(root, 'app/kindora/components/kindora-entity.ts');
const entityJs = ts.transpileModule(fs.readFileSync(entityPath, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
const entityModule = { exports: {} };
new Function('module', 'exports', entityJs)(entityModule, entityModule.exports);
const sourcePath = path.resolve(root, 'app/kindora/components/commercial-schema.ts');
const compiled = ts.transpileModule(fs.readFileSync(sourcePath, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
const schemaModule = { exports: {} };
new Function('require', 'module', 'exports', compiled)((specifier) => {
  if (specifier === './kindora-entity') return entityModule.exports;
  throw new Error(`Unexpected commercial schema dependency: ${specifier}`);
}, schemaModule, schemaModule.exports);
const { createKindoraServiceSchema, createKindoraProductSchema, kindoraOrganizationId } = schemaModule.exports;
const services = [
  ['Kindora Donor CRM Service', 'Kindora Donor CRM helps nonprofits manage donor relationships, track giving history, run campaigns, and build long-term supporter engagement — all in one platform.', 'Nonprofit donor relationship management', 'https://spacenexus.net/kindora/donor-crm'],
  ['Kindora Grant Management Service', 'Kindora grant management software helps nonprofits track applications, manage deadlines, automate reporting, and streamline the entire grant lifecycle from discovery to closeout.', 'Nonprofit grant lifecycle management', 'https://spacenexus.net/kindora/grant-management-software'],
  ['Kindora Case Management Service', 'Nonprofit case management and program management platform for client intake, service delivery, outcome tracking, and program reporting. Built for social services and community organizations.', 'Nonprofit case and program management', 'https://spacenexus.net/kindora/case-management'],
  ['Kindora Volunteer Management Service', 'Complete volunteer management platform for nonprofits: recruitment, scheduling, hour tracking, volunteer portal, and impact reporting. Built for organizations that rely on volunteers.', 'Nonprofit volunteer management', 'https://spacenexus.net/kindora/volunteer-management'],
  ['Kindora Nonprofit Financial Management Service', 'Financial management platform for nonprofits: budget tracking, expense management, financial reporting, cost allocation, and audit-ready records. Built for nonprofit accounting needs.', 'Nonprofit financial management', 'https://spacenexus.net/kindora/nonprofit-financials'],
];
for (const [name, description, category, url] of services) {
  const schema = createKindoraServiceSchema({ name, description, category, url });
  if (schema['@type'] !== 'Service' || schema.name !== name || schema.description !== description || schema.url !== url || schema.provider['@id'] !== kindoraOrganizationId || schema.mainEntityOfPage['@id'] !== url || schema.audience.audienceType !== 'Nonprofit organizations') throw new Error(`Invalid service schema: ${url}`);
  if ('price' in schema.offers || 'availability' in schema.offers || /trial|rating|review/i.test(JSON.stringify(schema))) throw new Error(`Unverified commercial claim in service schema: ${url}`);
}
const product = createKindoraProductSchema();
if (!product['@type'].includes('SoftwareApplication') || !product['@type'].includes('Product') || product.manufacturer['@id'] !== kindoraOrganizationId || product.brand['@id'] !== kindoraOrganizationId || product.offers.length !== 3) throw new Error('Invalid Kindora pricing product schema.');
const [starter, professional, enterprise] = product.offers;
if (starter.price !== '0' || starter.priceCurrency !== 'USD' || !/forever free/i.test(starter.description) || !/up to 5 team members/i.test(starter.description) || professional.price || enterprise.price || !/custom/i.test(professional.description) || !/custom/i.test(enterprise.description) || !/unlimited team members/i.test(enterprise.description)) throw new Error('Structured plan prices do not match current visible pricing.');
if (/aggregateRating|review|availability/i.test(JSON.stringify(product))) throw new Error('Unsupported rating, review, or availability in product schema.');
console.log(`Commercial schema checks passed: ${services.length} Service entities and 3 visible pricing offers.`);

const base = process.env.KINDORA_CRAWL_BASE_URL;
if (base) {
  (async () => {
    const fetchPage = async (url) => {
      let lastError;
      for (let attempt = 0; attempt < 3; attempt += 1) {
        try {
          const response = await fetch(url);
          if (!response.ok) throw new Error(`HTTP ${response.status}`);
          return response;
        } catch (error) {
          lastError = error;
          if (attempt < 2) await new Promise((resolve) => setTimeout(resolve, 800 * (attempt + 1)));
        }
      }
      throw lastError;
    };
    const paths = services.map((entry) => new URL(entry[3]).pathname).concat('/kindora/pricing');
    for (const route of paths) {
      const response = await fetchPage(`${base.replace(/\/$/, '')}${route}`);
      const html = await response.text();
      const body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/)?.[1] ?? '';
      const graphs = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((match) => { try { return JSON.parse(match[1]); } catch { return null; } }).filter(Boolean);
      const entities = graphs.flatMap((graph) => graph['@graph'] ?? [graph]);
      if (route.endsWith('/pricing')) {
        const products = entities.filter((entity) => entity.name === product.name && entity['@type']?.includes?.('Product'));
        if (products.length !== 1) throw new Error(`${route}: expected exactly one Kindora Product graph`);
        for (const text of ['Starter', 'Forever free', 'Professional', 'Custom', 'Enterprise', 'Up to 5 team members', 'Up to 25 team members', 'Unlimited team members', 'Plan facts at a glance', 'No published time-limited trial', 'Small nonprofits needing core donor and client records', 'Migration assistance']) if (!body.includes(text)) throw new Error(`${route}: pricing copy missing ${text}`);
      } else {
        const expected = services.find((service) => new URL(service[3]).pathname === route);
        const matches = entities.filter((entity) => entity['@type'] === 'Service' && entity.url === expected[3]);
        if (matches.length !== 1) throw new Error(`${route}: expected exactly one matching Service entity`);
        const entity = matches[0];
        for (const text of [entity.description, 'nonprofit']) if (!body.includes(text)) throw new Error(`${route}: structured claim is not present in rendered page copy (${text})`);
        if (entity.provider?.['@id'] !== kindoraOrganizationId || entity.offers?.seller?.['@id'] !== kindoraOrganizationId) throw new Error(`${route}: inconsistent provider ID`);
      }
    }
    const comparisonRoutes = ['/kindora/alternatives', '/kindora/vs-competitors', '/kindora/kindora-vs-instrumentl', '/kindora/instrumentl-alternative', '/kindora/bloomerang-alternative', '/kindora/best-bloomerang-alternatives', '/kindora/donorperfect-alternative', '/kindora/best-donorperfect-alternatives', '/kindora/donordock-alternative', '/kindora/neon-one-alternative', '/kindora/little-green-light-alternative', '/kindora/salesforce-nonprofit-cloud-alternative', '/kindora/best-salesforce-alternatives', '/kindora/bonterra-alternative', '/kindora/network-for-good-alternative'];
    for (const route of comparisonRoutes) {
      const response = await fetchPage(`${base.replace(/\/$/, '')}${route}`);
      const html = await response.text();
      const body = (html.match(/<body[^>]*>([\s\S]*?)<\/body>/)?.[1] ?? '').replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '').replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
      if (!body.includes('How this comparison was prepared') || !body.includes('November 26, 2026') || !body.includes('criteria include') && !body.includes('Criteria include')) throw new Error(`${route}: comparison methodology is not present in server-rendered content`);
      if (/Free trial available|Free Trial|Setup in 30 minutes|30 minutes — no consultants|\$\s?\d/i.test(body)) throw new Error(`${route}: stale trial, setup, or unverified competitor-price claim remains in rendered content`);
    }
    console.log(`Rendered comparison methodology crawl passed for ${comparisonRoutes.length} routes at ${base}.`);
    console.log(`Rendered commercial schema crawl passed for all ${paths.length} pricing and service routes at ${base}.`);
  })().catch((error) => { console.error(error); process.exitCode = 1; });
}



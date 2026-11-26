const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const root = process.cwd();
const helperPath = path.resolve(root, 'app/kindora/components/breadcrumb-schema-data.ts');
const js = ts.transpileModule(fs.readFileSync(helperPath, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
const helper = { exports: {} };
new Function('module', 'exports', js)(helper, helper.exports);
const { createKindoraBreadcrumbSchema } = helper.exports;
const routes = new Set();
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name === 'page.tsx') routes.add('/' + path.relative('app', path.dirname(full)).split(path.sep).join('/'));
  }
}
walk(path.join(root, 'app/kindora'));
routes.delete('/kindora/blog/[slug]');
const postFile = path.resolve(root, 'app/kindora/blog/data/posts.ts');
const postJs = ts.transpileModule(fs.readFileSync(postFile, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
const postsModule = { exports: {} };
new Function('require', 'module', 'exports', postJs)((specifier) => {
  if (specifier === './article-schema') return { assertBlogPostsValid() {} };
  throw new Error(`Unexpected blog registry import: ${specifier}`);
}, postsModule, postsModule.exports);
for (const post of postsModule.exports.blogPosts) routes.add(`/kindora/blog/${post.slug}`);
for (const slug of ['full-stack-developer', 'senior-full-stack-developer', 'python-developer-ai']) routes.add(`/kindora/careers/${slug}`);
const failures = [];
for (const route of routes) {
  const schema = createKindoraBreadcrumbSchema(route);
  if (!schema || schema['@type'] !== 'BreadcrumbList') { failures.push(`${route}: missing BreadcrumbList`); continue; }
  const items = schema.itemListElement;
  if (items.length < (route === '/kindora' ? 2 : 3) || items.some((item, index) => item.position !== index + 1 || !item.item.startsWith('https://spacenexus.net/'))) failures.push(`${route}: invalid order or absolute URL`);
  if (items[0].item !== 'https://spacenexus.net/' || items[1].item !== 'https://spacenexus.net/kindora') failures.push(`${route}: incorrect Home/Kindora root`);
  if (items.at(-1).item !== `https://spacenexus.net${route}`) failures.push(`${route}: final breadcrumb URL differs from route`);
  if (items.some((item) => /email-click|templates|[?&](utm_|click)/i.test(item.item))) failures.push(`${route}: tracking/template URL in trail`);
  for (const item of items.slice(2, -1)) {
    const prefix = item.item.replace('https://spacenexus.net', '');
    if (!routes.has(prefix)) failures.push(`${route}: section URL has no route (${item.item})`);
  }
}
if (failures.length) { console.error(failures.join('\n')); process.exit(1); }
console.log(`Validated BreadcrumbList structure for ${routes.size} Kindora routes.`);



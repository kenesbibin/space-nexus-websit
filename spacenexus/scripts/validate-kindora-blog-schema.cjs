const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');

const root = process.cwd();
const cache = new Map();
function loadTs(relativePath) {
  const filename = path.resolve(root, relativePath);
  if (cache.has(filename)) return cache.get(filename).exports;
  const source = fs.readFileSync(filename, 'utf8');
  const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  const module = { exports: {} };
  cache.set(filename, module);
  function localRequire(specifier) {
    if (specifier.startsWith('.')) {
      let target = path.resolve(path.dirname(filename), specifier);
      if (!path.extname(target)) target += '.ts';
      return loadTs(path.relative(root, target));
    }
    return require(specifier);
  }
  new Function('require', 'module', 'exports', js)(localRequire, module, module.exports);
  return module.exports;
}

const { blogPosts } = loadTs('app/kindora/blog/data/posts.ts');
const { createBlogPostingSchema, kindoraPublisherId } = loadTs('app/kindora/blog/data/article-schema.ts');
const seen = new Set();
for (const post of blogPosts) {
  if (seen.has(post.slug)) throw new Error(`Duplicate route: ${post.slug}`);
  seen.add(post.slug);
  const s = createBlogPostingSchema(post);
  const required = ['headline','description','datePublished','dateModified','image','author','publisher','mainEntityOfPage','url'];
  for (const key of required) if (!(key in s) || !s[key]) throw new Error(`${post.slug}: missing schema field ${key}`);
  if (s['@type'] !== 'BlogPosting' || s.author['@type'] !== 'Person' || !s.author['@id'] || s.publisher['@id'] !== kindoraPublisherId) throw new Error(`${post.slug}: invalid author/publisher schema`);
  if (s.mainEntityOfPage['@id'] !== s.url || !s.url.startsWith('https://spacenexus.net/kindora/blog/')) throw new Error(`${post.slug}: invalid canonical URL`);
  if (!Number.isFinite(Date.parse(s.datePublished)) || !Number.isFinite(Date.parse(s.dateModified))) throw new Error(`${post.slug}: invalid schema date`);
}
console.log(`Validated schema registry: ${blogPosts.length} posts, ${seen.size} unique canonical routes.`);

const base = process.env.BLOG_CRAWL_BASE_URL;
if (base) {
  (async () => {
    for (const post of blogPosts) {
      const response = await fetch(`${base.replace(/\/$/, '')}/kindora/blog/${post.slug}`);
      if (!response.ok) throw new Error(`${post.slug}: HTTP ${response.status}`);
      const html = await response.text();
      const match = html.match(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g) || [];
      const articleGraphs = match.map((tag) => tag.match(/>([\s\S]*?)<\/script>/)?.[1]).filter(Boolean).map((json) => JSON.parse(json)).filter((graph) => graph['@type'] === 'BlogPosting');
      if (articleGraphs.length !== 1) throw new Error(`${post.slug}: expected exactly one server-rendered BlogPosting, found ${articleGraphs.length}`);
      const graph = articleGraphs[0];
      if (!html.includes(`rel="canonical" href="https://spacenexus.net/kindora/blog/${post.slug}"`) && !html.includes(`href="https://spacenexus.net/kindora/blog/${post.slug}" rel="canonical"`)) throw new Error(`${post.slug}: missing absolute canonical link`);
      for (const text of [post.title, post.author.name, post.publishedAt]) if (!html.includes(text)) throw new Error(`${post.slug}: visible metadata missing ${text}`);
      if (graph.headline !== post.title || graph.author.name !== post.author.name || graph.datePublished !== post.publishedAt) throw new Error(`${post.slug}: schema and visible registry metadata diverge`);
    }
    console.log(`HTTP crawl passed: ${blogPosts.length} rendered post routes at ${base}.`);
  })().catch((error) => { console.error(error); process.exitCode = 1; });
}

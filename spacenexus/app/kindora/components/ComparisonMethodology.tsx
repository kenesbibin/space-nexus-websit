const reviewDate = "November 26, 2026";

export default function ComparisonMethodology() {
  return (
    <section aria-labelledby="comparison-methodology" className="mx-auto my-12 max-w-5xl rounded-xl border border-gray-200 bg-gray-50 p-6 text-sm text-gray-700">
      <h2 id="comparison-methodology" className="text-lg font-semibold text-gray-900">How this comparison was prepared</h2>
      <p className="mt-2">Reviewed {reviewDate}. We compare features described on the linked vendor product pages with Kindora&apos;s public feature pages and <a className="text-blue-700 underline" href="/kindora/pricing">current plan details</a>. Criteria include donor and fundraising workflows, grants, case and program management, financial tools, reporting, integrations, published price model, team limits, and implementation information.</p>
      <p className="mt-2">A feature is marked as documented only when it appears in the cited public product information; “not documented” does not mean the vendor cannot provide it. Products, packaging, and prices change, and quotes can vary by organization. Competitor amounts are omitted where a current directly comparable public price could not be confirmed. This is a desk comparison, not a hands-on product test or a claim that one product is best for every nonprofit.</p>
    </section>
  );
}

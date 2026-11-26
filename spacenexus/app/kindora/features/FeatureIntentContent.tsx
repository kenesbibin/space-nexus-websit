import Link from "next/link";
import TrustSignals from "../components/TrustSignals";
import { featureIntents } from "./feature-intents";

type FeatureIntentContentProps = {
  feature: keyof typeof featureIntents;
};

export default function FeatureIntentContent({ feature }: FeatureIntentContentProps) {
  const { intent, problem, solution, benefits, useCase } = featureIntents[feature];
  return (
    <>
      <section className="py-16 lg:py-20 bg-white" aria-labelledby="feature-intent-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <article className="rounded-2xl border border-rose-100 bg-rose-50/40 p-7 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-rose-700 mb-3">
              The problem
            </p>
            <h2 id="feature-intent-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Why nonprofits need {intent}
            </h2>
            <p className="text-gray-700 leading-relaxed">{problem}</p>
          </article>

          <article className="rounded-2xl border border-blue-100 bg-blue-50/40 p-7 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#2563eb] mb-3">
              The Kindora solution
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              A clearer, connected workflow
            </h3>
            <p className="text-gray-700 leading-relaxed">{solution}</p>
          </article>
        </div>

        {useCase && (
          <article className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50/60 p-7 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700 mb-3">
              Illustrative Kindora use case
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">{useCase.title}</h2>
            <p className="text-sm font-medium text-gray-700 mb-5">Organization: {useCase.organization}</p>
            <div className="grid lg:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Challenge</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{useCase.challenge}</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Kindora workflow</h3>
                <ol className="space-y-2">
                  {useCase.workflow.map((step, index) => (
                    <li key={step} className="flex gap-3 text-sm text-gray-700 leading-relaxed">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">{index + 1}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Result</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{useCase.outcome}</p>
              </div>
            </div>
            <p className="mt-5 border-t border-emerald-200 pt-4 text-xs text-gray-500">
              This scenario illustrates a typical nonprofit workflow and is not a claim of customer results.
            </p>
          </article>
        )}

        <div className="mt-8 rounded-2xl bg-gray-900 p-7 sm:p-8 lg:p-10">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-8 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-300 mb-3">
                Benefits
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                What your organization gains
              </h3>
            </div>
            <ul className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3 text-sm text-gray-200 leading-relaxed">
                  <span className="mt-1 h-5 w-5 shrink-0 rounded-full bg-emerald-400/15 text-center text-emerald-300">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 pt-7 border-t border-white/10">
            <p className="max-w-xl text-base text-gray-300 mb-5">
              See how Kindora turns {intent} into a practical, mission-focused workflow.
            </p>
            <nav aria-label="Explore related Kindora pages" className="flex flex-wrap gap-3">
              <Link href="/kindora/features" className="rounded-full bg-blue-400/15 px-4 py-2.5 text-sm font-semibold text-blue-100 hover:bg-blue-400/25">
                Explore all nonprofit management features
              </Link>
              <Link href="/kindora/pricing" className="rounded-full bg-white/10 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/15">
                Compare Kindora plans and nonprofit pricing
              </Link>
              <Link href="/kindora/vs-competitors" className="rounded-full bg-white/10 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/15">
                Compare Kindora with nonprofit software alternatives
              </Link>
            </nav>
          </div>
        </div>
      </div>
      </section>
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrustSignals compact />
        </div>
      </section>
    </>
  );
}

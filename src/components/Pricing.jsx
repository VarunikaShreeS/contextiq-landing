import { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Student & Builder',
    badge: 'Free Forever',
    description:
      'Ideal for students, solo developers, and hackathon teams organizing study notes and project specs.',
    monthlyPrice: 0,
    annualPrice: 0,
    featured: false,
    buttonText: 'Start Free',
    features: [
      'Up to 3 active project workspaces',
      'PDF, Markdown & syllabus note uploads',
      'Source-grounded Q&A with page citations',
      'Hackathon problem statement analyzer',
      'Basic task & deadline extraction',
    ],
  },
  {
    name: 'Researcher Pro',
    badge: 'Most Popular',
    description:
      'Built for research scholars and power users synthesizing papers, tracking versions, and verifying claims.',
    monthlyPrice: 15,
    annualPrice: 12,
    featured: true,
    buttonText: 'Choose Researcher Pro',
    features: [
      'Unlimited workspaces & document uploads',
      'Interactive Context Graph explorer',
      'Knowledge Conflict & outdated info detector',
      'Side-by-side literature comparison tables',
      'Temporal memory & version history tracking',
    ],
  },
  {
    name: 'Team & Startup',
    badge: 'Collaboration',
    description:
      'Designed for engineering teams and growing startups centralizing decisions, meetings, and shared context.',
    monthlyPrice: 35,
    annualPrice: 28,
    featured: false,
    buttonText: 'Request Team Demo',
    features: [
      'Everything in Researcher Pro',
      'Shared team workspaces & role permissions',
      'Meeting transcript to action-item automation',
      'Cross-project context search & audit trail',
      'Priority onboarding & workspace support',
    ],
  },
];

export default function Pricing({ onSelectPlan }) {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section
      id="pricing"
      className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-vanillaCream/45 dark:bg-walnutBrown/15 border-b border-warmBeige/40 dark:border-walnutBrown/40 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <p className="text-xs uppercase tracking-widest text-caramel font-semibold">
            Simple, Transparent Pricing
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-darkChocolate dark:text-softIvory">
            Start free, scale as your knowledge grows
          </h2>
          <p className="text-walnutBrown dark:text-warmBeige text-base leading-relaxed">
            Whether you are preparing for your next hackathon or leading a
            multi-project research team, choose a plan that fits your workflow.
          </p>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <span
            className={`text-sm font-medium ${
              !isAnnual
                ? 'text-darkChocolate dark:text-softIvory'
                : 'text-walnutBrown dark:text-warmBeige'
            }`}
          >
            Monthly
          </span>

          <button
            type="button"
            onClick={() => setIsAnnual(!isAnnual)}
            aria-label="Toggle annual billing"
            className="relative w-14 h-7 rounded-full bg-darkChocolate dark:bg-walnutBrown/50 p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-caramel"
          >
            <span
              className={`block w-5 h-5 rounded-full bg-caramel transition-transform duration-200 ${
                isAnnual ? 'translate-x-7' : 'translate-x-0'
              }`}
            />
          </button>

          <span
            className={`text-sm font-medium flex items-center gap-1.5 ${
              isAnnual
                ? 'text-darkChocolate dark:text-softIvory'
                : 'text-walnutBrown dark:text-warmBeige'
            }`}
          >
            Annual
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-vanillaCream dark:bg-walnutBrown/30 text-caramel border border-warmBeige dark:border-walnutBrown/60">
              Save 20%
            </span>
          </span>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const displayPrice = isAnnual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.name}
                className={`rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all ${
                  plan.featured
                    ? 'bg-darkChocolate dark:bg-[#2A1D16] text-softIvory border-2 border-caramel shadow-xl lg:-translate-y-2'
                    : 'bg-softIvory dark:bg-darkChocolate text-darkChocolate dark:text-softIvory border border-warmBeige dark:border-walnutBrown/60 hover:border-caramel'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display text-xl font-bold">
                      {plan.name}
                    </h3>
                    <span
                      className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full ${
                        plan.featured
                          ? 'bg-caramel text-softIvory'
                          : 'bg-vanillaCream dark:bg-walnutBrown/25 text-walnutBrown dark:text-warmBeige border border-warmBeige/70 dark:border-walnutBrown/50'
                      }`}
                    >
                      {plan.featured && <Sparkles className="w-3 h-3" />}
                      {plan.badge}
                    </span>
                  </div>

                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      plan.featured
                        ? 'text-warmBeige'
                        : 'text-walnutBrown dark:text-warmBeige'
                    }`}
                  >
                    {plan.description}
                  </p>

                  <div className="mt-6 pb-6 border-b border-warmBeige/30 dark:border-walnutBrown/40 flex items-baseline gap-1.5">
                    <span className="font-display text-4xl font-bold">
                      ${displayPrice}
                    </span>
                    <span
                      className={`text-sm ${
                        plan.featured
                          ? 'text-warmBeige'
                          : 'text-walnutBrown dark:text-warmBeige'
                      }`}
                    >
                      {displayPrice === 0 ? '/ forever' : '/ user / month'}
                    </span>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm"
                      >
                        <Check className="w-4 h-4 text-caramel shrink-0 mt-0.5" />
                        <span
                          className={
                            plan.featured
                              ? 'text-softIvory/90'
                              : 'text-darkChocolate dark:text-softIvory/90'
                          }
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  onClick={() => onSelectPlan(plan.name)}
                  className={`mt-8 block w-full text-center py-3 px-5 rounded-lg text-sm font-semibold transition-colors ${
                    plan.featured
                      ? 'bg-caramel text-softIvory hover:bg-softIvory hover:text-darkChocolate'
                      : 'bg-vanillaCream dark:bg-walnutBrown/25 text-darkChocolate dark:text-softIvory border border-warmBeige dark:border-walnutBrown/60 hover:bg-darkChocolate dark:hover:bg-caramel hover:text-softIvory'
                  }`}
                >
                  {plan.buttonText}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
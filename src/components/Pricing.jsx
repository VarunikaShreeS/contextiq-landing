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
  // Remembers whether the user toggled Annual billing (true) or Monthly billing (false)
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section
      id="pricing"
      className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-vanillaCream/45 border-b border-warmBeige/40"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <p className="text-xs uppercase tracking-widest text-caramel font-semibold">
            Simple, Transparent Pricing
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-darkChocolate">
            Start free, scale as your knowledge grows
          </h2>
          <p className="text-walnutBrown text-base leading-relaxed">
            Whether you are preparing for your next hackathon or leading a
            multi-project research team, choose a plan that fits your workflow.
          </p>
        </div>

        {/* Interactive Monthly / Annual Toggle */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <span
            className={`text-sm font-medium ${
              !isAnnual ? 'text-darkChocolate' : 'text-walnutBrown'
            }`}
          >
            Monthly
          </span>

          <button
            type="button"
            onClick={() => setIsAnnual(!isAnnual)}
            aria-label="Toggle annual billing"
            className="relative w-14 h-7 rounded-full bg-darkChocolate p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-caramel"
          >
            <span
              className={`block w-5 h-5 rounded-full bg-caramel transition-transform duration-200 ${
                isAnnual ? 'translate-x-7' : 'translate-x-0'
              }`}
            />
          </button>

          <span
            className={`text-sm font-medium flex items-center gap-1.5 ${
              isAnnual ? 'text-darkChocolate' : 'text-walnutBrown'
            }`}
          >
            Annual
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-vanillaCream text-caramel border border-warmBeige">
              Save 20%
            </span>
          </span>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const displayPrice = isAnnual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.name}
                className={`rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all ${
                  plan.featured
                    ? 'bg-darkChocolate text-softIvory border-2 border-caramel shadow-xl lg:-translate-y-2'
                    : 'bg-softIvory text-darkChocolate border border-warmBeige hover:border-caramel'
                }`}
              >
                <div>
                  {/* Plan Title & Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display text-xl font-bold">
                      {plan.name}
                    </h3>
                    <span
                      className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full ${
                        plan.featured
                          ? 'bg-caramel text-softIvory'
                          : 'bg-vanillaCream text-walnutBrown border border-warmBeige/70'
                      }`}
                    >
                      {plan.featured && <Sparkles className="w-3 h-3" />}
                      {plan.badge}
                    </span>
                  </div>

                  {/* Plan Description */}
                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      plan.featured ? 'text-warmBeige' : 'text-walnutBrown'
                    }`}
                  >
                    {plan.description}
                  </p>

                  {/* Dynamic Price Display */}
                  <div className="mt-6 pb-6 border-b border-warmBeige/30 flex items-baseline gap-1.5">
                    <span className="font-display text-4xl font-bold">
                      ${displayPrice}
                    </span>
                    <span
                      className={`text-sm ${
                        plan.featured ? 'text-warmBeige' : 'text-walnutBrown'
                      }`}
                    >
                      {displayPrice === 0 ? '/ forever' : '/ user / month'}
                    </span>
                  </div>

                  {/* Included Features List */}
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
                              : 'text-darkChocolate'
                          }
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Plan Action Button */}
                <a
                  href="#contact"
                  onClick={() => onSelectPlan(plan.name)}
                  className={`mt-8 block w-full text-center py-3 px-5 rounded-lg text-sm font-semibold transition-colors ${
                    plan.featured
                      ? 'bg-caramel text-softIvory hover:bg-softIvory hover:text-darkChocolate'
                      : 'bg-vanillaCream text-darkChocolate border border-warmBeige hover:bg-darkChocolate hover:text-softIvory'
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
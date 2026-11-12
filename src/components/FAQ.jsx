import { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';

const faqItems = [
  {
    question: 'How is ContextIQ different from standard AI chatbots?',
    answer:
      'Standard AI tools read one prompt or file in isolation and often guess when details are missing. ContextIQ builds a connected Context Graph across all your documents, meeting transcripts, and research papers—anchoring every answer to exact page numbers and flagging contradictions before you act on them.',
  },
  {
    question: 'What file formats can I upload into a workspace?',
    answer:
      'You can upload PDF research papers, Markdown notes, plain text meeting transcripts, CSV datasets, and project specification documents. ContextIQ indexes sections, tables, and timestamps so every citation points back to its exact origin.',
  },
  {
    question: 'How does the Knowledge Conflict Detector work?',
    answer:
      'Whenever you add a new meeting note, requirement addendum, or updated spec, ContextIQ compares dates, metrics, and decisions against older files in the same workspace. If a newer note changes a deadline or technical choice, ContextIQ alerts you and marks which version is most recent.',
  },
  {
    question: 'Is my uploaded research or project data kept private?',
    answer:
      'Yes. Your workspaces are isolated and encrypted, and your uploaded documents, notes, and queries are never used to train public or third-party AI models.',
  },
  {
    question: 'Can students and hackathon teams really use ContextIQ for free?',
    answer:
      'Absolutely. The Student & Builder plan is free forever and includes up to 3 active project workspaces, source-grounded Q&A with page citations, and our hackathon problem statement analyzer—no credit card required.',
  },
  {
    question: 'Can I export extracted tasks and literature comparison tables?',
    answer:
      'Yes. Action items extracted from meeting transcripts and structured comparison matrices generated from research papers can be tracked inside your workspace or exported to Markdown and CSV for your team tools.',
  },
];

export default function FAQ() {
  // Keeps the first question open initially (set to null if you want all closed)
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (idx) => {
    setOpenIndex((prevIndex) => (prevIndex === idx ? null : idx));
  };

  return (
    <section
      id="faq"
      className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-vanillaCream/45 dark:bg-walnutBrown/15 border-b border-warmBeige/40 dark:border-walnutBrown/40 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Sticky Section Intro */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-softIvory dark:bg-darkChocolate border border-warmBeige dark:border-walnutBrown/60 text-xs font-semibold text-caramel">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Common Questions</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-darkChocolate dark:text-softIvory leading-tight">
            Everything you need to know about ContextIQ
          </h2>

          <p className="text-walnutBrown dark:text-warmBeige text-base leading-relaxed">
            Explore how ContextIQ verifies answers, protects your workspace
            privacy, and supports students, researchers, and engineering teams.
          </p>

          <div className="pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-caramel hover:text-darkChocolate dark:hover:text-softIvory transition-colors"
            >
              <span>Have a specific workflow question? Ask us</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Column: Smooth Expandable Accordion */}
        <div className="lg:col-span-7 space-y-3.5">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={item.question}
                className={`rounded-2xl border transition-all duration-200 ${
                  isOpen
                    ? 'bg-softIvory dark:bg-darkChocolate border-caramel shadow-sm'
                    : 'bg-softIvory/80 dark:bg-darkChocolate/80 border-warmBeige/80 dark:border-walnutBrown/60 hover:border-caramel'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4"
                >
                  <span className="font-display text-base sm:text-lg font-bold text-darkChocolate dark:text-softIvory">
                    {item.question}
                  </span>

                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-caramel text-softIvory'
                        : 'bg-vanillaCream dark:bg-walnutBrown/25 text-walnutBrown dark:text-warmBeige'
                    }`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </span>
                </button>

                {/* Smooth CSS Grid Height Transition */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-6 pb-5 pt-1 text-sm text-walnutBrown dark:text-warmBeige leading-relaxed border-t border-warmBeige/40 dark:border-walnutBrown/30">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
import { useState } from 'react';
import {
  UploadCloud,
  GitMerge,
  Zap,
  GraduationCap,
  Microscope,
  Code2,
  Building2,
  Landmark,
  CheckCircle2,
} from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Capture & Unify Sources',
    description:
      'Upload PDFs, syllabus notes, research papers, CSV datasets, contracts, and meeting transcripts into a single structured workspace instead of leaving them scattered across folders.',
    icon: UploadCloud,
  },
  {
    number: '02',
    title: 'Connect & Verify Context',
    description:
      'ContextIQ maps relationships across your files, flags outdated or conflicting details, and anchors every AI answer to exact page numbers and source passages.',
    icon: GitMerge,
  },
  {
    number: '03',
    title: 'Turn Insights into Action',
    description:
      'Automatically extract tasks, owners, and deadlines straight from your project discussions and documents—keeping every to-do linked to why it matters.',
    icon: Zap,
  },
];

const useCases = [
  {
    id: 'students',
    label: 'Students & Hackathons',
    stage: 'Phase 1 · Initial Target Market',
    icon: GraduationCap,
    headline: 'From syllabus notes & problem statements to working prototypes faster',
    scenario:
      'Upload lecture notes, syllabus PDFs, and hackathon problem statements into one structured project workspace.',
    outcome:
      'ContextIQ builds unit concept maps, extracts judging criteria, compares architecture options with citations, and tracks team milestones.',
    highlights: [
      'Analyze hackathon & SIH problem PDFs in seconds',
      'Generate unit-wise revision summaries, quizzes & concept maps',
      'Track assignments, skills, and team submission deadlines',
    ],
  },
  {
    id: 'researchers',
    label: 'Research Scholars',
    stage: 'Phase 1 · Initial Target Market',
    icon: Microscope,
    headline: 'Synthesize literature and spot research gaps with page-level precision',
    scenario:
      'Import dozens of academic papers and compare methodologies, datasets, and evaluation metrics side by side.',
    outcome:
      'ContextIQ surfaces recurring limitations across papers and traces every claim back to its exact page so you never risk fabricated citations.',
    highlights: [
      'Extract problem statements, datasets, algorithms & metrics',
      'Generate structured IEEE/APA literature review tables',
      'Explore recurring limitations and underexplored research gaps',
    ],
  },
  {
    id: 'teams',
    label: 'Developers & Teams',
    stage: 'Phase 2 · Team Expansion',
    icon: Code2,
    headline: 'Keep architecture decisions, codebase docs, and sprint tasks in sync',
    scenario:
      'Connect technical specs, architecture decision records, sprint transcripts, and requirement updates over time.',
    outcome:
      'ContextIQ alerts you when a new spec contradicts an older decision and turns meeting commitments into tracked engineering tasks.',
    highlights: [
      'Maintain a living temporal timeline of technical decisions',
      'Detect conflicting requirements across document versions',
      'Search across PR notes, specs, and meetings with full auditability',
    ],
  },
  {
    id: 'startups',
    label: 'Startups & Businesses',
    stage: 'Phase 2 · Commercial Expansion',
    icon: Building2,
    headline: 'Centralize contracts, invoices, vendor timelines, and meeting decisions',
    scenario:
      'Upload vendor agreements, customer records, invoices, expense sheets, and leadership sync transcripts.',
    outcome:
      'ContextIQ tracks payment and contract deadlines, flags conflicting terms across revisions, and builds a document-linked customer history.',
    highlights: [
      'Extract payment terms, renewal dates & obligations from contracts',
      'Organize invoices, vendor commitments & customer timelines',
      'Convert client call decisions into assigned team follow-ups',
    ],
  },
  {
    id: 'institutions',
    label: 'Organizations & Institutions',
    stage: 'Phase 3 · Institutional Governance',
    icon: Landmark,
    headline: 'Govern shared institutional knowledge with role-based access and audit logs',
    scenario:
      'Establish isolated department-level workspaces across academic departments, research labs, or enterprise divisions.',
    outcome:
      'ContextIQ enforces strict role-based permissions, prevents unauthorized cross-workspace retrieval, and logs every AI query and document update.',
    highlights: [
      'Department-level workspaces with granular read/edit permissions',
      'Complete audit trails for document provenance and AI actions',
      'Authorized cross-workspace discovery without privacy leaks',
    ],
  },
];

export default function HowItWorks() {
  const [activePersona, setActivePersona] = useState('students');

  const currentCase =
    useCases.find((item) => item.id === activePersona) || useCases[0];

  return (
    <section
      id="how-it-works"
      className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-softIvory dark:bg-darkChocolate border-b border-warmBeige/40 dark:border-walnutBrown/40 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* About / Section Intro */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-xs uppercase tracking-widest text-caramel font-semibold">
            About &amp; How It Works
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-darkChocolate dark:text-softIvory">
            Information is everywhere. ContextIQ brings it together.
          </h2>
          <p className="text-walnutBrown dark:text-warmBeige text-base leading-relaxed">
            Conventional AI tools read one document at a time and forget how your
            work connects. ContextIQ acts as an intelligent layer across all your
            knowledge—linking sources, verifying facts, and driving execution.
          </p>
        </div>

        {/* 3-Step Horizontal Workflow */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.number}
                className="relative rounded-2xl bg-vanillaCream/60 dark:bg-walnutBrown/20 border border-warmBeige/80 dark:border-walnutBrown/50 p-6 sm:p-7"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-darkChocolate dark:bg-walnutBrown/40 border border-transparent dark:border-caramel/30 flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-caramel" />
                  </div>
                  <span className="font-display text-2xl font-bold text-warmBeige dark:text-walnutBrown">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-darkChocolate dark:text-softIvory">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm text-walnutBrown dark:text-warmBeige leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Interactive 5-Persona Use-Case Explorer */}
        <div className="mt-16 rounded-2xl bg-vanillaCream dark:bg-walnutBrown/20 border border-warmBeige dark:border-walnutBrown/60 p-6 sm:p-8 lg:p-10">
          <div className="space-y-5 pb-6 border-b border-warmBeige/70 dark:border-walnutBrown/50">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <p className="text-xs uppercase tracking-wider text-caramel font-semibold">
                  5 Target User Ecosystems
                </p>
                <h3 className="font-display text-2xl font-bold text-darkChocolate dark:text-softIvory mt-1">
                  See how ContextIQ scales across every workflow
                </h3>
              </div>
              <span className="inline-flex items-center self-start sm:self-auto text-xs font-semibold px-3 py-1 rounded-full bg-softIvory dark:bg-darkChocolate text-caramel border border-warmBeige dark:border-walnutBrown/60">
                {currentCase.stage}
              </span>
            </div>

            {/* Interactive Persona Tabs (All 5 Categories) */}
            <div className="flex flex-wrap gap-2">
              {useCases.map((item) => {
                const TabIcon = item.icon;
                const isActive = item.id === activePersona;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActivePersona(item.id)}
                    className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-darkChocolate dark:bg-caramel text-softIvory shadow-sm'
                        : 'bg-softIvory dark:bg-darkChocolate text-walnutBrown dark:text-warmBeige border border-warmBeige dark:border-walnutBrown/60 hover:text-darkChocolate dark:hover:text-softIvory'
                    }`}
                  >
                    <TabIcon
                      className={`w-4 h-4 ${
                        isActive ? 'text-caramel dark:text-softIvory' : 'text-caramel'
                      }`}
                    />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Persona Details */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <h4 className="font-display text-xl sm:text-2xl font-bold text-darkChocolate dark:text-softIvory">
                {currentCase.headline}
              </h4>
              <p className="text-sm sm:text-base text-walnutBrown dark:text-warmBeige leading-relaxed">
                <strong className="text-darkChocolate dark:text-softIvory">Input:</strong>{' '}
                {currentCase.scenario}
              </p>
              <p className="text-sm sm:text-base text-walnutBrown dark:text-warmBeige leading-relaxed">
                <strong className="text-darkChocolate dark:text-softIvory">ContextIQ Result:</strong>{' '}
                {currentCase.outcome}
              </p>
            </div>

            <div className="lg:col-span-5 bg-softIvory dark:bg-darkChocolate rounded-xl border border-warmBeige dark:border-walnutBrown/60 p-5 space-y-3">
              <p className="text-xs uppercase tracking-wider font-semibold text-walnutBrown dark:text-warmBeige">
                Key Workflow Advantages
              </p>
              <ul className="space-y-2.5">
                {currentCase.highlights.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm text-darkChocolate dark:text-softIvory"
                  >
                    <CheckCircle2 className="w-4 h-4 text-caramel shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
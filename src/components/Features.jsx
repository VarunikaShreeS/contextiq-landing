import { useState } from 'react';
import {
  Network,
  ShieldCheck,
  CheckSquare,
  AlertTriangle,
  BookOpen,
  History,
  GraduationCap,
  Trophy,
  Code2,
  Mic,
  Briefcase,
  BarChart3,
  Users,
  LayoutDashboard,
  Sliders,
  Lock,
  Sparkles,
  Compass,
  Layers,
  BellRing,
  Search,
  CheckCircle2,
} from 'lucide-react';

const differentiatingCapabilities = [
  {
    code: 'A',
    title: 'Context Graph Intelligence',
    shortLabel: 'A. Context Graph',
    icon: Network,
    summary:
      'Connects people, documents, research papers, meetings, decisions, tasks, and deadlines into one navigable knowledge web.',
    demoPrompt: '“Show me everything connected to the Q4 Launch project.”',
    demoOutput:
      'Retrieved 14 linked files, 4 sync transcripts, 6 approved architecture decisions, and 9 active tasks across 5 team members.',
    safeguard: 'Hybrid relational + graph indexing without unnecessary infrastructure bloat.',
  },
  {
    code: 'B',
    title: 'Evidence-Level Answer Verification',
    shortLabel: 'B. Evidence Verification',
    icon: ShieldCheck,
    summary:
      'Links every factual claim directly to exact page numbers and highlighted passages while clearly separating facts from AI inference.',
    demoPrompt: '“What latency benchmark did Paper #3 report on edge devices?”',
    demoOutput:
      'Verified Fact: 42ms per page (Edge_OCR_Benchmark.pdf · Page 7, Table 3). Inference: Suitable for real-time offline mobile capture.',
    safeguard: 'Zero fabricated citations—explicitly alerts when source evidence is insufficient.',
  },
  {
    code: 'C',
    title: 'Context-to-Action Engine',
    shortLabel: 'C. Context-to-Action',
    icon: CheckSquare,
    summary:
      'Converts meeting discussions and documents into assigned tasks, deadlines, and workflows while keeping links to original evidence.',
    demoPrompt: 'Auto-extracted from Sync_Transcript.txt (14:20)',
    demoOutput:
      'Created Task: “Finalize PostgreSQL + pgvector migration” · Owner: Backend Lead · Due: Friday · Linked to Decision #12.',
    safeguard: 'Requires user approval before executing consequential workflow actions.',
  },
  {
    code: 'D',
    title: 'Knowledge Conflict Detector',
    shortLabel: 'D. Conflict Detector',
    icon: AlertTriangle,
    summary:
      'Scans across documents and meeting notes to flag contradictory dates, inconsistent figures, and outdated requirement versions.',
    demoPrompt: 'Cross-checking Master_Contract_v1.pdf vs. Client_Call_Notes.md',
    demoOutput:
      'Conflict Flagged: Contract states Nov 20 delivery, whereas Call Notes (Line 38) moved the security freeze to Nov 14.',
    safeguard: 'Displays both conflicting sources side by side for human review and resolution.',
  },
  {
    code: 'E',
    title: 'Research Gap Explorer',
    shortLabel: 'E. Research Gap Explorer',
    icon: Compass,
    summary:
      'Analyzes uploaded research collections to surface recurring methodological limitations and potentially underexplored directions.',
    demoPrompt: 'Analyzing 12 uploaded papers on Rural Document Digitization',
    demoOutput:
      'Recurring Limitation (9/12 papers): Evaluations assume stable 4G cloud connectivity; offline low-RAM Indic script benchmarks remain underexplored.',
    safeguard: 'Frames gaps as evidence-backed hypotheses—never claims unverified scientific discovery.',
  },
  {
    code: 'F',
    title: 'Temporal Context Engine',
    shortLabel: 'F. Temporal Engine',
    icon: History,
    summary:
      'Tracks how project facts, requirements, and decisions evolve over time so you always know which file holds the latest truth.',
    demoPrompt: '“What changed in our API specification over the last month?”',
    demoOutput:
      'Timeline: v1.0 (REST only) → v2.0 (Added WebSockets, Oct 4) → v2.1 (Deprecated legacy auth token, Oct 12 — Current Approved).',
    safeguard: 'Preserves full version lineage while respecting workspace retention rules.',
  },
  {
    code: 'G',
    title: 'Cross-Workspace Intelligence',
    shortLabel: 'G. Cross-Workspace',
    icon: Layers,
    summary:
      'Identifies relevant links between separate authorized projects—such as reusing a proven module from a past hackathon in a new build.',
    demoPrompt: 'Scanning authorized Research Lab & Hackathon workspaces',
    demoOutput:
      'Related Asset Found: Your “Offline OCR Pipeline” notes in Research Workspace match 3 technical requirements in your current SIH project.',
    safeguard: 'Strictly honors workspace isolation and role-based permission boundaries.',
  },
  {
    code: 'H',
    title: 'Proactive Knowledge Assistant',
    shortLabel: 'H. Proactive Assistant',
    icon: BellRing,
    summary:
      'Surfaces unresolved commitments, approaching deadlines, and newly relevant documents right when you open a project.',
    demoPrompt: 'Proactive Workspace Briefing · Today',
    demoOutput:
      '2 items need attention: 1 unresolved schema decision from Tuesday’s sync and 1 vendor renewal clause expiring in 10 days.',
    safeguard: 'Actionable, non-intrusive nudges backed by transparent audit logs.',
  },
  {
    code: 'I',
    title: 'Unified Context Retrieval',
    shortLabel: 'I. Unified Retrieval',
    icon: Search,
    summary:
      'Lets you ask one natural-language question across PDFs, research papers, meeting transcripts, and CSV datasets simultaneously.',
    demoPrompt: '“Compare our Q3 budget dataset against the vendor contract caps.”',
    demoOutput:
      'Unified Answer synthesized from Q3_Expenses.csv (Row 14) + Vendor_Agreement.pdf (Page 6) with inline source badges.',
    safeguard: 'Hybrid semantic + keyword retrieval filtered strictly by user access rights.',
  },
];

const modulesData = [
  {
    number: '01',
    title: 'Intelligent Knowledge Hub',
    category: 'core',
    stage: 'Essential',
    description:
      'Multi-format ingestion (PDF, DOCX, Markdown, CSV, PPTX, OCR, URLs) with hybrid semantic search and page-level source citations.',
    icon: BookOpen,
  },
  {
    number: '02',
    title: 'Research Intelligence Hub',
    category: 'academic',
    stage: 'Essential',
    description:
      'Extract methodologies, datasets, metrics, and limitations across papers; generate IEEE/APA literature tables and spot research gaps.',
    icon: Compass,
  },
  {
    number: '03',
    title: 'Student Intelligence Hub',
    category: 'academic',
    stage: 'Essential',
    description:
      'Organize subjects, syllabus units, revision summaries, concept maps, practice quizzes, exam calendars, and skill portfolios.',
    icon: GraduationCap,
  },
  {
    number: '04',
    title: 'Hackathon & SIH Intelligence',
    category: 'academic',
    stage: 'Essential',
    description:
      'Deconstruct problem statements into objectives, constraints, architecture options, judging criteria, pitch outlines, and team milestones.',
    icon: Trophy,
  },
  {
    number: '05',
    title: 'Project & Dev Intelligence',
    category: 'execution',
    stage: 'Advanced',
    description:
      'Centralize technical specs, architecture decision records, API docs, codebase notes, and sprint milestones with dependency tracking.',
    icon: Code2,
  },
  {
    number: '06',
    title: 'Meeting & Conversation Hub',
    category: 'execution',
    stage: 'Advanced',
    description:
      'Process meeting transcripts into topic summaries, decisions, unresolved questions, owners, and deadlines linked to project files.',
    icon: Mic,
  },
  {
    number: '07',
    title: 'Context Graph Engine',
    category: 'core',
    stage: 'Essential',
    description:
      'Automatically map entities and relationships across people, files, papers, meetings, decisions, and tasks in one connected graph.',
    icon: Network,
  },
  {
    number: '08',
    title: 'Context Memory & Temporal',
    category: 'core',
    stage: 'Advanced',
    description:
      'Track how project requirements and decisions evolve over time so outdated documents never override the latest approved truth.',
    icon: History,
  },
  {
    number: '09',
    title: 'Evidence & Trust Intelligence',
    category: 'core',
    stage: 'Essential',
    description:
      'Verify every claim with exact passage highlights, detect conflicting dates or numbers across versions, and maintain provenance trails.',
    icon: ShieldCheck,
  },
  {
    number: '10',
    title: 'Action & Automation Engine',
    category: 'execution',
    stage: 'Advanced',
    description:
      'Convert insights into prioritized tasks, reminders, and permission-controlled AI agent workflows with human approval gates.',
    icon: CheckSquare,
  },
  {
    number: '11',
    title: 'Business Intelligence Hub',
    category: 'enterprise',
    stage: 'Future Expansion',
    description:
      'Extract key terms from contracts, invoices, purchase orders, and vendor records while tracking payment and renewal deadlines.',
    icon: Briefcase,
  },
  {
    number: '12',
    title: 'Data & Dataset Intelligence',
    category: 'enterprise',
    stage: 'Advanced',
    description:
      'Profile CSV and Excel files, detect missing values, run natural-language queries, and generate traceable charts and summaries.',
    icon: BarChart3,
  },
  {
    number: '13',
    title: 'Collaboration & Workspaces',
    category: 'enterprise',
    stage: 'Advanced',
    description:
      'Switch seamlessly across Personal, Team, Research, and Organization workspaces with shared notes, mentions, and role permissions.',
    icon: Users,
  },
  {
    number: '14',
    title: 'Analytics & Insights Dashboard',
    category: 'enterprise',
    stage: 'Advanced',
    description:
      'Monitor practical workspace metrics: knowledge growth, upcoming deadlines, unresolved decisions, and task completion progress.',
    icon: LayoutDashboard,
  },
  {
    number: '15',
    title: 'Personalization & AI Flexibility',
    category: 'enterprise',
    stage: 'Advanced',
    description:
      'Customize response styles (Concise, Academic, Executive), workspace instructions, and multi-model provider routing with fallbacks.',
    icon: Sliders,
  },
  {
    number: '16',
    title: 'Security, Privacy & Governance',
    category: 'enterprise',
    stage: 'Foundational',
    description:
      'Built-in RBAC, workspace isolation, encryption at rest and in transit, prompt-injection defense, and full AI action audit logs.',
    icon: Lock,
  },
];

const filterTabs = [
  { id: 'all', label: 'All 16 Modules' },
  { id: 'core', label: 'Knowledge, Graph & Trust' },
  { id: 'academic', label: 'Student, Research & SIH' },
  { id: 'execution', label: 'Projects, Meetings & Action' },
  { id: 'enterprise', label: 'Business, Data & Governance' },
];

export default function Features() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeCapIndex, setActiveCapIndex] = useState(0);

  const visibleModules =
    selectedCategory === 'all'
      ? modulesData
      : modulesData.filter((item) => item.category === selectedCategory);

  const activeCap = differentiatingCapabilities[activeCapIndex];
  const ActiveCapIcon = activeCap.icon;

  return (
    <section
      id="features"
      className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-vanillaCream/45 dark:bg-walnutBrown/15 border-b border-warmBeige/40 dark:border-walnutBrown/40 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* PART A: 9 Differentiating Capabilities Interactive Showcase (A - I) */}
        <div>
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-softIvory dark:bg-darkChocolate border border-warmBeige dark:border-walnutBrown/60 text-xs font-semibold text-caramel">
              <Sparkles className="w-3.5 h-3.5" />
              <span>9 Differentiating Capabilities (A–I)</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-darkChocolate dark:text-softIvory">
              What makes ContextIQ fundamentally different
            </h2>
            <p className="text-walnutBrown dark:text-warmBeige text-base leading-relaxed">
              Click any of our 9 signature capabilities below to inspect how
              ContextIQ connects scattered sources, verifies claims, and drives action.
            </p>
          </div>

          {/* 9 Interactive Selector Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {differentiatingCapabilities.map((cap, idx) => (
              <button
                key={cap.code}
                type="button"
                onClick={() => setActiveCapIndex(idx)}
                className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all border ${
                  activeCapIndex === idx
                    ? 'bg-darkChocolate dark:bg-caramel text-softIvory border-darkChocolate dark:border-caramel shadow-sm'
                    : 'bg-softIvory dark:bg-darkChocolate text-walnutBrown dark:text-warmBeige border-warmBeige dark:border-walnutBrown/60 hover:border-caramel hover:text-darkChocolate dark:hover:text-softIvory'
                }`}
              >
                {cap.shortLabel}
              </button>
            ))}
          </div>

          {/* Active Capability Live Spotlight Card */}
          <div className="mt-8 rounded-2xl bg-softIvory dark:bg-darkChocolate border border-warmBeige dark:border-walnutBrown/70 p-6 sm:p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-vanillaCream dark:bg-walnutBrown/25 border border-warmBeige dark:border-walnutBrown/60 flex items-center justify-center">
                  <ActiveCapIcon className="w-5 h-5 text-caramel" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-caramel">
                    Capability {activeCap.code}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-darkChocolate dark:text-softIvory">
                    {activeCap.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-walnutBrown dark:text-warmBeige leading-relaxed">
                {activeCap.summary}
              </p>

              <div className="pt-2 flex items-start gap-2 text-xs text-walnutBrown dark:text-warmBeige">
                <CheckCircle2 className="w-4 h-4 text-caramel shrink-0 mt-0.5" />
                <span>
                  <strong className="text-darkChocolate dark:text-softIvory">
                    Built-In Guardrail:
                  </strong>{' '}
                  {activeCap.safeguard}
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 rounded-xl bg-vanillaCream/80 dark:bg-walnutBrown/20 border border-warmBeige dark:border-walnutBrown/60 p-5 space-y-3">
              <div>
                <p className="text-[11px] uppercase tracking-wider font-semibold text-walnutBrown dark:text-warmBeige">
                  Example Input / Trigger
                </p>
                <p className="text-sm font-semibold text-darkChocolate dark:text-softIvory mt-1">
                  {activeCap.demoPrompt}
                </p>
              </div>

              <div className="pt-3 border-t border-warmBeige/70 dark:border-walnutBrown/40">
                <p className="text-[11px] uppercase tracking-wider font-semibold text-caramel">
                  ContextIQ Intelligence Output
                </p>
                <p className="text-sm text-darkChocolate dark:text-softIvory leading-relaxed mt-1">
                  {activeCap.demoOutput}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* PART B: Complete 16-Module Product Ecosystem */}
        <div>
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <p className="text-xs uppercase tracking-widest text-caramel font-semibold">
              Complete 16-Module Architecture
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-darkChocolate dark:text-softIvory">
              Explore the full ContextIQ ecosystem
            </h2>
            <p className="text-walnutBrown dark:text-warmBeige text-base leading-relaxed">
              Filter across all 16 integrated modules—organized by functional
              domain and rollout maturity from foundational security to future
              business intelligence.
            </p>
          </div>

          {/* Interactive Category Filter Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors border ${
                  selectedCategory === tab.id
                    ? 'bg-darkChocolate dark:bg-caramel text-softIvory border-darkChocolate dark:border-caramel shadow-sm'
                    : 'bg-softIvory dark:bg-darkChocolate text-walnutBrown dark:text-warmBeige border-warmBeige dark:border-walnutBrown/60 hover:border-caramel dark:hover:border-caramel hover:text-darkChocolate dark:hover:text-softIvory'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Responsive 16-Module Cards Grid */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {visibleModules.map((mod) => {
              const IconComponent = mod.icon;
              return (
                <div
                  key={mod.number}
                  className="rounded-2xl bg-softIvory dark:bg-darkChocolate border border-warmBeige/80 dark:border-walnutBrown/60 p-5 flex flex-col justify-between hover:border-caramel dark:hover:border-caramel hover:shadow-md transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-vanillaCream dark:bg-walnutBrown/25 border border-warmBeige dark:border-walnutBrown/50 flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-caramel" />
                      </div>
                      <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-vanillaCream dark:bg-walnutBrown/25 text-walnutBrown dark:text-warmBeige border border-warmBeige/60 dark:border-walnutBrown/50">
                        {mod.stage}
                      </span>
                    </div>

                    <p className="text-[11px] font-semibold uppercase tracking-wider text-caramel">
                      Module {mod.number}
                    </p>
                    <h3 className="font-display text-lg font-bold text-darkChocolate dark:text-softIvory mt-0.5">
                      {mod.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-walnutBrown dark:text-warmBeige leading-relaxed">
                      {mod.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
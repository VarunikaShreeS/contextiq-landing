import { useState } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  FileText,
  Network,
  CheckSquare,
  Sparkles,
  Play,
} from 'lucide-react';

const scenarios = [
  {
    id: 'architecture',
    label: 'Architecture Sync',
    workspace: 'Workspace / Q4 Product Launch',
    sourceCount: '14 project sources',
    question: '“What database architecture did we approve in Tuesday’s sync?”',
    badgeText: 'Verified from 2 Sources',
    statusText: '0 conflicts detected',
    hasConflict: false,
    answerBefore: 'The team approved ',
    answerHighlight: 'PostgreSQL with pgvector',
    answerAfter: ' to keep relational project data and vector embeddings unified.',
    sources: [
      'Architecture_Spec.pdf · Page 4',
      'Sync_Transcript.txt · 14:20',
    ],
    actionTitle: 'Action Extracted: Finalize schema migration',
    actionMeta: 'Linked to Decision #12 · Due Friday',
    actionStatus: 'Tracked',
    graphFiles: '14 Files Linked',
    graphFilesSub: 'PDFs, Research Papers & Specs',
    graphActions: '9 Verified Actions',
    graphActionsSub: 'Traced to exact meeting lines',
    temporalText: 'Spec v2.1 replaced v1.0 on Oct 12',
    temporalBadge: 'Up to date',
  },
  {
    id: 'conflict',
    label: 'Conflict Detector',
    workspace: 'Workspace / Client Delivery',
    sourceCount: '9 workspace files',
    question: '“Is the security audit deadline still set for November 20?”',
    badgeText: 'Conflict Detected',
    statusText: '1 date mismatch flagged',
    hasConflict: true,
    answerBefore: 'Caution: The original contract lists Nov 20, but yesterday’s call moved the freeze to ',
    answerHighlight: 'November 14 (6 days earlier)',
    answerAfter: '.',
    sources: [
      'Master_Contract_v1.pdf · Page 9',
      'Client_Call_Notes.md · Line 38',
    ],
    actionTitle: 'Review Required: Align sprint timeline',
    actionMeta: 'Conflict #04 · Needs owner approval',
    actionStatus: 'Flagged',
    graphFiles: '9 Files Linked',
    graphFilesSub: 'Contracts, Call Notes & Roadmaps',
    graphActions: '1 Conflict Flagged',
    graphActionsSub: 'Date mismatch across 2 versions',
    temporalText: 'Call_Notes.md (Nov 11) contradicts Contract v1',
    temporalBadge: 'Needs Review',
  },
  {
    id: 'hackathon',
    label: 'Hackathon & Research',
    workspace: 'Workspace / Innovation Challenge',
    sourceCount: '11 problem & research PDFs',
    question: '“Which lightweight OCR model fits our offline rural document app?”',
    badgeText: 'Synthesized from 3 Papers',
    statusText: 'Evidence-grounded',
    hasConflict: false,
    answerBefore: 'Across your uploaded benchmarks, ',
    answerHighlight: 'PaddleOCR (Mobile v4)',
    answerAfter: ' delivers the highest multi-language accuracy under 15MB RAM.',
    sources: [
      'Problem_Statement_PS04.pdf · Page 2',
      'Edge_OCR_Benchmark.pdf · Page 7',
    ],
    actionTitle: 'Milestone Added: Test OCR on sample forms',
    actionMeta: 'Linked to Judging Criteria · Sprint 1',
    actionStatus: 'Ready',
    graphFiles: '11 Files Linked',
    graphFilesSub: 'Problem PDFs & IEEE Benchmarks',
    graphActions: '6 Milestones Mapped',
    graphActionsSub: 'Aligned to evaluation rubric',
    temporalText: 'Problem Addendum v2 merged into workspace',
    temporalBadge: 'Synced',
  },
];

export default function Hero({ onOpenDemo }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('evidence');

  const current = scenarios[selectedIndex];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-warmBeige/40 dark:border-walnutBrown/40">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        
        {/* Left Column: Headline, Description & Buttons */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-vanillaCream dark:bg-walnutBrown/25 border border-warmBeige dark:border-walnutBrown/60 text-xs font-medium text-darkChocolate dark:text-vanillaCream">
            <Sparkles className="w-3.5 h-3.5 text-caramel" />
            <span>AI-Powered Knowledge &amp; Context Intelligence</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-darkChocolate dark:text-softIvory leading-[1.15]">
            Knowledge that connects.{' '}
            <span className="text-caramel">Intelligence that acts.</span>
          </h1>

          <p className="text-base sm:text-lg text-walnutBrown dark:text-warmBeige leading-relaxed max-w-xl">
            ContextIQ brings your scattered documents, research papers, meeting notes,
            and project decisions together—giving you source-verified answers and
            clear next steps in one calm workspace.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              type="button"
              onClick={onOpenDemo}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-caramel text-softIvory text-sm font-semibold hover:bg-darkChocolate dark:hover:bg-walnutBrown transition-colors shadow-sm"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Try Live Sandbox</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-vanillaCream dark:bg-walnutBrown/25 text-darkChocolate dark:text-softIvory border border-warmBeige dark:border-walnutBrown/60 text-sm font-semibold hover:bg-warmBeige/40 dark:hover:bg-walnutBrown/40 transition-colors"
            >
              <span>Request Early Access</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="pt-6 border-t border-warmBeige/50 dark:border-walnutBrown/40 flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm text-walnutBrown dark:text-warmBeige">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-caramel" />
              Exact page-level citations
            </span>
            <span className="flex items-center gap-1.5">
              <Network className="w-4 h-4 text-caramel" />
              Connected project memory
            </span>
          </div>
        </div>

        {/* Right Column: Interactive ContextIQ Simulator */}
        <div className="lg:col-span-6 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-[11px] uppercase tracking-wider font-semibold text-walnutBrown dark:text-warmBeige">
              Try a live scenario:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {scenarios.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedIndex(idx)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors border ${
                    selectedIndex === idx
                      ? 'bg-darkChocolate dark:bg-caramel text-softIvory border-darkChocolate dark:border-caramel shadow-sm'
                      : 'bg-vanillaCream/80 dark:bg-walnutBrown/20 text-walnutBrown dark:text-warmBeige border-warmBeige dark:border-walnutBrown/50 hover:border-caramel hover:text-darkChocolate dark:hover:text-softIvory'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-vanillaCream/70 dark:bg-walnutBrown/20 border border-warmBeige dark:border-walnutBrown/60 shadow-lg overflow-hidden">
            <div className="bg-darkChocolate dark:bg-[#2A1D16] px-4 py-3 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-caramel" />
                <span className="w-2.5 h-2.5 rounded-full bg-warmBeige/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-softIvory/40" />
                <span className="ml-1.5 text-xs font-medium text-warmBeige truncate max-w-[180px] sm:max-w-none">
                  {current.workspace}
                </span>
              </div>

              <div className="flex bg-walnutBrown/40 p-0.5 rounded-lg text-xs">
                <button
                  type="button"
                  onClick={() => setActiveTab('evidence')}
                  className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                    activeTab === 'evidence'
                      ? 'bg-caramel text-softIvory'
                      : 'text-warmBeige hover:text-softIvory'
                  }`}
                >
                  Verified Q&amp;A
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('graph')}
                  className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                    activeTab === 'graph'
                      ? 'bg-caramel text-softIvory'
                      : 'text-warmBeige hover:text-softIvory'
                  }`}
                >
                  Context Graph
                </button>
              </div>
            </div>

            <div className="p-5 sm:p-6 bg-softIvory/80 dark:bg-darkChocolate/90 space-y-4">
              {activeTab === 'evidence' ? (
                <>
                  <div className="bg-vanillaCream dark:bg-walnutBrown/25 border border-warmBeige/70 dark:border-walnutBrown/50 rounded-xl p-3.5">
                    <p className="text-xs uppercase tracking-wider text-walnutBrown dark:text-warmBeige font-semibold mb-1">
                      Question across {current.sourceCount}
                    </p>
                    <p className="text-sm font-medium text-darkChocolate dark:text-softIvory">
                      {current.question}
                    </p>
                  </div>

                  <div className="bg-softIvory dark:bg-walnutBrown/15 border border-warmBeige dark:border-walnutBrown/50 rounded-xl p-4 space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`inline-flex items-center gap-1.5 text-xs font-semibold ${
                          current.hasConflict
                            ? 'text-amber-700 dark:text-amber-300'
                            : 'text-caramel'
                        }`}
                      >
                        {current.hasConflict ? (
                          <AlertTriangle className="w-4 h-4" />
                        ) : (
                          <ShieldCheck className="w-4 h-4" />
                        )}
                        {current.badgeText}
                      </span>
                      <span className="text-[11px] text-walnutBrown dark:text-warmBeige">
                        {current.statusText}
                      </span>
                    </div>

                    <p className="text-sm text-darkChocolate dark:text-softIvory leading-relaxed">
                      {current.answerBefore}
                      <span className="bg-vanillaCream dark:bg-walnutBrown/40 px-1.5 py-0.5 rounded font-medium">
                        {current.answerHighlight}
                      </span>
                      {current.answerAfter}
                    </p>

                    <div className="pt-2 border-t border-warmBeige/50 dark:border-walnutBrown/40 flex flex-wrap gap-2">
                      {current.sources.map((src) => (
                        <button
                          key={src}
                          type="button"
                          onClick={onOpenDemo}
                          title="Click to inspect source passage in Live Sandbox"
                          className="inline-flex items-center gap-1.5 text-xs bg-vanillaCream dark:bg-walnutBrown/30 text-darkChocolate dark:text-vanillaCream px-2.5 py-1 rounded-md border border-warmBeige/80 dark:border-walnutBrown/60 hover:border-caramel transition-colors"
                        >
                          <FileText className="w-3.5 h-3.5 text-caramel shrink-0" />
                          <span>{src}</span>
                        </button>
                      ))}
                    </div>

                    <div className="bg-vanillaCream/70 dark:bg-walnutBrown/25 rounded-lg p-3 flex items-center justify-between gap-2 border border-warmBeige/60 dark:border-walnutBrown/50">
                      <div className="flex items-center gap-2.5">
                        <CheckSquare className="w-4 h-4 text-caramel shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-darkChocolate dark:text-softIvory">
                            {current.actionTitle}
                          </p>
                          <p className="text-[11px] text-walnutBrown dark:text-warmBeige">
                            {current.actionMeta}
                          </p>
                        </div>
                      </div>
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-darkChocolate dark:bg-caramel text-softIvory shrink-0">
                        {current.actionStatus}
                      </span>
                    </div>
                  </div>
                </>
              ) : (
                <div className="bg-softIvory dark:bg-walnutBrown/15 border border-warmBeige dark:border-walnutBrown/50 rounded-xl p-4 space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-walnutBrown dark:text-warmBeige">
                    Connected Entities — {current.label}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-vanillaCream dark:bg-walnutBrown/25 border border-warmBeige dark:border-walnutBrown/50">
                      <p className="text-xs text-walnutBrown dark:text-warmBeige">
                        Source Documents
                      </p>
                      <p className="text-base font-bold text-darkChocolate dark:text-softIvory mt-0.5">
                        {current.graphFiles}
                      </p>
                      <p className="text-xs text-walnutBrown dark:text-warmBeige mt-1">
                        {current.graphFilesSub}
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-vanillaCream dark:bg-walnutBrown/25 border border-warmBeige dark:border-walnutBrown/50">
                      <p className="text-xs text-walnutBrown dark:text-warmBeige">
                        Decisions &amp; Tasks
                      </p>
                      <p className="text-base font-bold text-darkChocolate dark:text-softIvory mt-0.5">
                        {current.graphActions}
                      </p>
                      <p className="text-xs text-walnutBrown dark:text-warmBeige mt-1">
                        {current.graphActionsSub}
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-darkChocolate dark:bg-[#2A1D16] text-softIvory text-xs flex flex-wrap items-center justify-between gap-2">
                    <span>
                      Temporal Check: <strong>{current.temporalText}</strong>
                    </span>
                    <span className="text-caramel font-semibold">
                      {current.temporalBadge}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
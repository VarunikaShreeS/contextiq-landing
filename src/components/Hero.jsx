import { useState } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  FileText,
  Network,
  CheckSquare,
  Sparkles,
} from 'lucide-react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('evidence');

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
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-caramel text-softIvory text-sm font-semibold hover:bg-darkChocolate dark:hover:bg-walnutBrown transition-colors shadow-sm"
            >
              <span>Request Early Access</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-vanillaCream dark:bg-walnutBrown/25 text-darkChocolate dark:text-softIvory border border-warmBeige dark:border-walnutBrown/60 text-sm font-semibold hover:bg-warmBeige/40 dark:hover:bg-walnutBrown/40 transition-colors"
            >
              See How It Works
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

        {/* Right Column: Interactive Product Interface Preview */}
        <div className="lg:col-span-6">
          <div className="rounded-2xl bg-vanillaCream/70 dark:bg-walnutBrown/20 border border-warmBeige dark:border-walnutBrown/60 shadow-lg overflow-hidden">
            
            {/* Window Top Bar */}
            <div className="bg-darkChocolate dark:bg-[#2A1D16] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-caramel" />
                <span className="w-2.5 h-2.5 rounded-full bg-warmBeige/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-softIvory/40" />
                <span className="ml-2 text-xs font-medium text-warmBeige">
                  Workspace / Q4 Product Launch
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

            {/* Window Body Content */}
            <div className="p-5 sm:p-6 bg-softIvory/80 dark:bg-darkChocolate/90 space-y-4">
              {activeTab === 'evidence' ? (
                <>
                  <div className="bg-vanillaCream dark:bg-walnutBrown/25 border border-warmBeige/70 dark:border-walnutBrown/50 rounded-xl p-3.5">
                    <p className="text-xs uppercase tracking-wider text-walnutBrown dark:text-warmBeige font-semibold mb-1">
                      Question across 14 project sources
                    </p>
                    <p className="text-sm font-medium text-darkChocolate dark:text-softIvory">
                      “What database architecture did we approve in Tuesday’s sync?”
                    </p>
                  </div>

                  <div className="bg-softIvory dark:bg-walnutBrown/15 border border-warmBeige dark:border-walnutBrown/50 rounded-xl p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-caramel">
                        <ShieldCheck className="w-4 h-4" />
                        Verified from 2 Sources
                      </span>
                      <span className="text-[11px] text-walnutBrown dark:text-warmBeige">
                        0 conflicts detected
                      </span>
                    </div>

                    <p className="text-sm text-darkChocolate dark:text-softIvory leading-relaxed">
                      The team approved{' '}
                      <span className="bg-vanillaCream dark:bg-walnutBrown/40 px-1.5 py-0.5 rounded font-medium">
                        PostgreSQL with pgvector
                      </span>{' '}
                      to keep relational project data and vector embeddings unified.
                    </p>

                    <div className="pt-2 border-t border-warmBeige/50 dark:border-walnutBrown/40 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 text-xs bg-vanillaCream dark:bg-walnutBrown/30 text-darkChocolate dark:text-vanillaCream px-2.5 py-1 rounded-md border border-warmBeige/80 dark:border-walnutBrown/60">
                        <FileText className="w-3.5 h-3.5 text-caramel" />
                        Architecture_Spec.pdf · Page 4
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs bg-vanillaCream dark:bg-walnutBrown/30 text-darkChocolate dark:text-vanillaCream px-2.5 py-1 rounded-md border border-warmBeige/80 dark:border-walnutBrown/60">
                        <FileText className="w-3.5 h-3.5 text-caramel" />
                        Sync_Transcript.txt · 14:20
                      </span>
                    </div>

                    <div className="bg-vanillaCream/70 dark:bg-walnutBrown/25 rounded-lg p-3 flex items-center justify-between border border-warmBeige/60 dark:border-walnutBrown/50">
                      <div className="flex items-center gap-2.5">
                        <CheckSquare className="w-4 h-4 text-caramel shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-darkChocolate dark:text-softIvory">
                            Action Extracted: Finalize schema migration
                          </p>
                          <p className="text-[11px] text-walnutBrown dark:text-warmBeige">
                            Linked to Decision #12 · Due Friday
                          </p>
                        </div>
                      </div>
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-darkChocolate dark:bg-caramel text-softIvory">
                        Tracked
                      </span>
                    </div>
                  </div>
                </>
              ) : (
                <div className="bg-softIvory dark:bg-walnutBrown/15 border border-warmBeige dark:border-walnutBrown/50 rounded-xl p-4 space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-walnutBrown dark:text-warmBeige">
                    Connected Entities — Q4 Product Launch
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-vanillaCream dark:bg-walnutBrown/25 border border-warmBeige dark:border-walnutBrown/50">
                      <p className="text-xs text-walnutBrown dark:text-warmBeige">Source Documents</p>
                      <p className="text-base font-bold text-darkChocolate dark:text-softIvory mt-0.5">
                        14 Files Linked
                      </p>
                      <p className="text-xs text-walnutBrown dark:text-warmBeige mt-1">
                        PDFs, Research Papers &amp; Specs
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-vanillaCream dark:bg-walnutBrown/25 border border-warmBeige dark:border-walnutBrown/50">
                      <p className="text-xs text-walnutBrown dark:text-warmBeige">Decisions &amp; Tasks</p>
                      <p className="text-base font-bold text-darkChocolate dark:text-softIvory mt-0.5">
                        9 Verified Actions
                      </p>
                      <p className="text-xs text-walnutBrown dark:text-warmBeige mt-1">
                        Traced to exact meeting lines
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-darkChocolate dark:bg-[#2A1D16] text-softIvory text-xs flex items-center justify-between">
                    <span>
                      Temporal Check: <strong>Spec v2.1</strong> replaced v1.0 on Oct 12
                    </span>
                    <span className="text-caramel font-semibold">Up to date</span>
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
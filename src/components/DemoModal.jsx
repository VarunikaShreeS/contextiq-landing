import { useState, useEffect } from 'react';
import {
  X,
  Search,
  ShieldCheck,
  FileText,
  CheckCircle2,
  Circle,
  Sparkles,
  BookOpen,
} from 'lucide-react';

const workspaceDocs = [
  {
    id: 'arch-spec',
    fileName: 'Architecture_Spec.pdf',
    location: 'Page 4 · Section 2.1',
    title: 'Database & Vector Storage Decision',
    excerpt:
      '“To avoid synchronizing two separate databases during early scaling, the engineering team unanimously selected PostgreSQL with the pgvector extension. This keeps user workspaces, relational tasks, and 1536-dimension document embeddings inside one transactional store.”',
    highlight: 'PostgreSQL with the pgvector extension',
  },
  {
    id: 'sync-notes',
    fileName: 'Sync_Transcript.txt',
    location: 'Timestamp 14:20',
    title: 'Weekly Engineering Architecture Sync',
    excerpt:
      '“Priya: If we stick with pgvector for Phase 1, we cut infrastructure overhead in half. Arjun: Agreed—let’s lock that in and assign the initial schema migration for Friday’s sprint review.”',
    highlight: 'assign the initial schema migration for Friday’s sprint review',
  },
  {
    id: 'ocr-bench',
    fileName: 'Edge_OCR_Benchmark.pdf',
    location: 'Page 7 · Table 3',
    title: 'Offline Mobile Document Extraction Results',
    excerpt:
      '“In low-connectivity field evaluations across regional forms, PaddleOCR (Mobile v4) achieved 94.2% character accuracy while maintaining a 13.8 MB memory footprint—outperforming heavier transformer models on budget devices.”',
    highlight: 'PaddleOCR (Mobile v4) achieved 94.2% character accuracy',
  },
];

const quickPrompts = [
  {
    question: 'Why did we choose PostgreSQL with pgvector?',
    answer:
      'The team selected PostgreSQL with pgvector to unify relational workspace records and vector embeddings in a single database, cutting early infrastructure overhead in half.',
    docIds: ['arch-spec', 'sync-notes'],
  },
  {
    question: 'Which OCR engine fits offline mobile devices?',
    answer:
      'PaddleOCR (Mobile v4) is recommended because it reaches 94.2% accuracy on regional forms while staying under a 14 MB memory footprint.',
    docIds: ['ocr-bench'],
  },
];

const initialTasks = [
  {
    id: 1,
    text: 'Finalize PostgreSQL + pgvector schema migration',
    source: 'Sync_Transcript.txt · 14:20',
    done: false,
  },
  {
    id: 2,
    text: 'Benchmark PaddleOCR Mobile v4 on sample regional forms',
    source: 'Edge_OCR_Benchmark.pdf · Page 7',
    done: true,
  },
  {
    id: 3,
    text: 'Share Architecture Spec v2.1 with hackathon teammates',
    source: 'Architecture_Spec.pdf · Page 4',
    done: false,
  },
];

export default function DemoModal({ isOpen, onClose }) {
  const [selectedPromptIdx, setSelectedPromptIdx] = useState(0);
  const [customQuery, setCustomQuery] = useState('');
  const [customResult, setCustomResult] = useState(null);
  const [activeDocId, setActiveDocId] = useState('arch-spec');
  const [tasks, setTasks] = useState(initialTasks);

  // Close the modal if the user presses the Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const activePrompt = customResult || quickPrompts[selectedPromptIdx];
  const inspectedDoc =
    workspaceDocs.find((doc) => doc.id === activeDocId) || workspaceDocs[0];

  const handleSelectPrompt = (idx) => {
    setCustomResult(null);
    setSelectedPromptIdx(idx);
    setActiveDocId(quickPrompts[idx].docIds[0]);
  };

  const handleCustomAsk = (e) => {
    e.preventDefault();
    if (!customQuery.trim()) return;

    setCustomResult({
      question: customQuery.trim(),
      answer:
        'Based on your 3 indexed workspace files, ContextIQ matched your query to the approved PostgreSQL + pgvector architecture and the Edge OCR benchmark report. Click any source pill below to inspect the exact passage.',
      docIds: ['arch-spec', 'ocr-bench'],
    });
    setActiveDocId('arch-spec');
    setCustomQuery('');
  };

  const toggleTask = (taskId) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, done: !t.done } : t))
    );
  };

  const completedCount = tasks.filter((t) => t.done).length;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-darkChocolate/75 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Modal Container (stopPropagation prevents clicks inside from closing the modal) */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-softIvory dark:bg-darkChocolate border border-warmBeige dark:border-walnutBrown shadow-2xl"
      >
        {/* Top Header Bar */}
        <div className="sticky top-0 z-10 bg-darkChocolate dark:bg-[#2A1D16] px-5 py-4 flex items-center justify-between border-b border-walnutBrown/40">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-5 h-5 text-caramel" />
            <div>
              <h3 className="font-display text-lg font-bold text-softIvory">
                ContextIQ Interactive Workspace Sandbox
              </h3>
              <p className="text-xs text-warmBeige">
                Click any citation pill to inspect its exact source passage
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close interactive demo"
            className="p-2 rounded-lg text-warmBeige hover:text-softIvory hover:bg-walnutBrown/30 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Two-Column Interactive Body */}
        <div className="p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Ask Workspace + Source Citations + Tasks */}
          <div className="lg:col-span-7 space-y-5">
            {/* Quick Sample Question Buttons */}
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-wider font-semibold text-walnutBrown dark:text-warmBeige">
                1. Pick a sample question or ask your own:
              </p>
              <div className="flex flex-wrap gap-2">
                {quickPrompts.map((item, idx) => (
                  <button
                    key={item.question}
                    type="button"
                    onClick={() => handleSelectPrompt(idx)}
                    className={`text-left text-xs px-3 py-1.5 rounded-lg border transition-colors ${
                      !customResult && selectedPromptIdx === idx
                        ? 'bg-darkChocolate dark:bg-caramel text-softIvory border-darkChocolate dark:border-caramel'
                        : 'bg-vanillaCream dark:bg-walnutBrown/25 text-darkChocolate dark:text-warmBeige border-warmBeige dark:border-walnutBrown/50 hover:border-caramel'
                    }`}
                  >
                    {item.question}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Question Input Bar */}
            <form onSubmit={handleCustomAsk} className="flex gap-2">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-walnutBrown dark:text-warmBeige absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={customQuery}
                  onChange={(e) => setCustomQuery(e.target.value)}
                  placeholder="Ask anything across your 3 workspace files..."
                  className="w-full pl-9 pr-3 py-2 rounded-lg bg-vanillaCream/60 dark:bg-walnutBrown/20 border border-warmBeige dark:border-walnutBrown/60 text-sm text-darkChocolate dark:text-softIvory placeholder:text-walnutBrown/60 dark:placeholder:text-warmBeige/50 focus:outline-none focus:ring-2 focus:ring-caramel"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-caramel text-softIvory text-xs sm:text-sm font-semibold hover:bg-darkChocolate dark:hover:bg-walnutBrown transition-colors shrink-0"
              >
                Ask AI
              </button>
            </form>

            {/* Verified Answer Box */}
            <div className="rounded-xl bg-vanillaCream/70 dark:bg-walnutBrown/20 border border-warmBeige dark:border-walnutBrown/60 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-caramel">
                  <ShieldCheck className="w-4 h-4" />
                  Source-Grounded Answer
                </span>
                <span className="text-[11px] text-walnutBrown dark:text-warmBeige">
                  Click a source below to verify
                </span>
              </div>

              <p className="text-xs font-semibold text-walnutBrown dark:text-warmBeige">
                Q: “{activePrompt.question}”
              </p>
              <p className="text-sm text-darkChocolate dark:text-softIvory leading-relaxed">
                {activePrompt.answer}
              </p>

              {/* Clickable Citation Pills */}
              <div className="pt-2 border-t border-warmBeige/60 dark:border-walnutBrown/40 flex flex-wrap gap-2">
                {activePrompt.docIds.map((docId) => {
                  const doc = workspaceDocs.find((d) => d.id === docId);
                  if (!doc) return null;
                  const isSelected = activeDocId === doc.id;
                  return (
                    <button
                      key={doc.id}
                      type="button"
                      onClick={() => setActiveDocId(doc.id)}
                      className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md border font-medium transition-all ${
                        isSelected
                          ? 'bg-caramel text-softIvory border-caramel shadow-sm'
                          : 'bg-softIvory dark:bg-darkChocolate text-darkChocolate dark:text-vanillaCream border-warmBeige dark:border-walnutBrown/60 hover:border-caramel'
                      }`}
                    >
                      <FileText className="w-3.5 h-3.5 shrink-0" />
                      <span>{doc.fileName}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Interactive Extracted Action Items */}
            <div className="rounded-xl bg-vanillaCream/40 dark:bg-walnutBrown/15 border border-warmBeige/80 dark:border-walnutBrown/50 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-wider font-semibold text-darkChocolate dark:text-softIvory">
                  Context-to-Action Checklist
                </p>
                <span className="text-xs font-medium text-caramel">
                  {completedCount} of {tasks.length} completed
                </span>
              </div>

              <div className="space-y-2">
                {tasks.map((task) => (
                  <button
                    key={task.id}
                    type="button"
                    onClick={() => toggleTask(task.id)}
                    className="w-full text-left flex items-start gap-2.5 p-2.5 rounded-lg bg-softIvory dark:bg-darkChocolate border border-warmBeige/70 dark:border-walnutBrown/50 hover:border-caramel transition-colors"
                  >
                    {task.done ? (
                      <CheckCircle2 className="w-4 h-4 text-caramel shrink-0 mt-0.5" />
                    ) : (
                      <Circle className="w-4 h-4 text-walnutBrown dark:text-warmBeige shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <p
                        className={`text-xs sm:text-sm font-medium ${
                          task.done
                            ? 'line-through text-walnutBrown dark:text-warmBeige/60'
                            : 'text-darkChocolate dark:text-softIvory'
                        }`}
                      >
                        {task.text}
                      </p>
                      <p className="text-[11px] text-walnutBrown dark:text-warmBeige mt-0.5">
                        Source: {task.source}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Live Evidence Passage Viewer */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex-1 rounded-xl bg-vanillaCream dark:bg-[#2A1D16] border border-warmBeige dark:border-walnutBrown/60 p-5 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-warmBeige/70 dark:border-walnutBrown/40 pb-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-caramel">
                    <BookOpen className="w-4 h-4" />
                    Evidence Inspector
                  </span>
                  <span className="text-xs font-medium text-walnutBrown dark:text-warmBeige">
                    {inspectedDoc.location}
                  </span>
                </div>

                <div>
                  <p className="text-xs text-walnutBrown dark:text-warmBeige">
                    {inspectedDoc.fileName}
                  </p>
                  <h4 className="font-display text-lg font-bold text-darkChocolate dark:text-softIvory mt-0.5">
                    {inspectedDoc.title}
                  </h4>
                </div>

                <div className="p-4 rounded-lg bg-softIvory dark:bg-darkChocolate border-l-4 border-caramel text-sm text-darkChocolate dark:text-softIvory leading-relaxed">
                  {inspectedDoc.excerpt}
                </div>

                <div className="p-3 rounded-lg bg-softIvory/80 dark:bg-walnutBrown/20 border border-warmBeige/80 dark:border-walnutBrown/50">
                  <p className="text-[11px] uppercase tracking-wider font-semibold text-walnutBrown dark:text-warmBeige">
                    Verified Key Phrase
                  </p>
                  <p className="text-xs font-semibold text-caramel mt-1">
                    “{inspectedDoc.highlight}”
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-warmBeige/70 dark:border-walnutBrown/40 flex items-center justify-between text-xs text-walnutBrown dark:text-warmBeige">
                <span>100% Traceable Passage</span>
                <button
                  type="button"
                  onClick={onClose}
                  className="font-semibold text-caramel hover:underline"
                >
                  Done Exploring →
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
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
  Layers,
  BellRing,
  BarChart3,
  Sliders,
  Lock,
  Database,
  Check,
} from 'lucide-react';

const workspacesData = {
  research: {
    id: 'research',
    name: 'Research & Hackathon Lab',
    roleBadge: 'Lead Researcher · Isolated',
    auditText: 'Audit ID #RQ-804 · Encrypted',
    proactiveAlert:
      'Proactive Briefing: 1 unresolved OCR benchmark comparison and 1 hackathon submission milestone due in 4 days.',
    crossWorkspaceNote:
      'Cross-Workspace Link: 2 verified datasets from "Semester 5 AI Lab" match your current offline OCR requirements.',
    docs: [
      {
        id: 'arch-spec',
        type: 'Docs',
        fileName: 'Architecture_Spec.pdf',
        location: 'Page 4 · Section 2.1',
        title: 'Unified Database & Vector Storage Decision',
        excerpt:
          '“To avoid synchronizing two separate databases during early scaling, the engineering team unanimously selected PostgreSQL with the pgvector extension. This keeps user workspaces, relational tasks, and 1536-dimension document embeddings inside one transactional store.”',
        highlight: 'PostgreSQL with the pgvector extension',
      },
      {
        id: 'ocr-bench',
        type: 'Papers',
        fileName: 'Edge_OCR_Benchmark.pdf',
        location: 'Page 7 · Table 3',
        title: 'Offline Mobile Document Extraction Results',
        excerpt:
          '“In low-connectivity field evaluations across regional forms, PaddleOCR (Mobile v4) achieved 94.2% character accuracy while maintaining a 13.8 MB memory footprint—outperforming heavier transformer models on budget devices.”',
        highlight: 'PaddleOCR (Mobile v4) achieved 94.2% character accuracy',
      },
      {
        id: 'sync-notes',
        type: 'Meetings',
        fileName: 'Sync_Transcript.txt',
        location: 'Timestamp 14:20',
        title: 'Weekly Engineering Architecture Sync',
        excerpt:
          '“Priya: If we stick with pgvector for Phase 1, we cut infrastructure overhead in half. Arjun: Agreed—let’s lock that in and assign the initial schema migration for Friday’s sprint review.”',
        highlight: 'assign the initial schema migration for Friday’s sprint review',
      },
      {
        id: 'ocr-csv',
        type: 'Datasets',
        fileName: 'Regional_Form_Metrics.csv',
        location: '1,240 Rows · 6 Columns',
        title: 'Field Evaluation Dataset Summary',
        excerpt:
          '“Dataset Profile: 1,240 scanned rural form samples across Tamil and English. Mean inference latency: 42ms/page on 4GB RAM devices. Missing values: 0.0% after schema validation.”',
        highlight: 'Mean inference latency: 42ms/page on 4GB RAM devices',
      },
    ],
    prompts: [
      {
        question: 'Which architecture and OCR stack should we lock for our offline prototype?',
        answers: {
          concise:
            'Use PostgreSQL + pgvector for unified storage and PaddleOCR (Mobile v4) for offline text extraction (94.2% accuracy at 13.8 MB RAM, 42ms/page latency).',
          academic:
            'Empirical benchmarks in Edge_OCR_Benchmark.pdf (p. 7) demonstrate that PaddleOCR Mobile v4 attains 94.2% character accuracy within a 13.8 MB memory envelope (42ms/page across N=1,240 samples in Regional_Form_Metrics.csv), while Architecture_Spec.pdf (p. 4) standardizes on PostgreSQL with pgvector.',
          executive:
            'Recommendation: Standardize on PostgreSQL + pgvector and PaddleOCR Mobile v4. This cuts backend infrastructure overhead by 50% while meeting all offline mobile accuracy targets.',
        },
        docIds: ['arch-spec', 'ocr-bench', 'sync-notes', 'ocr-csv'],
      },
      {
        question: 'What action items were committed in our last engineering sync?',
        answers: {
          concise:
            '1) Complete the PostgreSQL + pgvector schema migration by Friday’s sprint review. 2) Validate PaddleOCR Mobile v4 on sample regional forms.',
          academic:
            'Per Sync_Transcript.txt (14:20), the engineering team ratified Phase 1 pgvector adoption and scheduled schema migration verification for Friday’s sprint review.',
          executive:
            'Key Deliverable: Schema migration is assigned and due Friday, keeping Phase 1 infrastructure lean and on schedule.',
        },
        docIds: ['sync-notes', 'arch-spec'],
      },
    ],
    tasks: [
      {
        id: 1,
        text: 'Finalize PostgreSQL + pgvector schema migration',
        source: 'Sync_Transcript.txt · 14:20',
        done: false,
      },
      {
        id: 2,
        text: 'Validate PaddleOCR Mobile v4 on 1,240 form samples',
        source: 'Regional_Form_Metrics.csv · Row 1',
        done: true,
      },
      {
        id: 3,
        text: 'Export IEEE literature comparison table for pitch deck',
        source: 'Edge_OCR_Benchmark.pdf · Page 7',
        done: false,
      },
    ],
    datasetProfile: {
      fileName: 'Regional_Form_Metrics.csv',
      rows: '1,240',
      columns: '6 Columns',
      missingValues: '0.0% Missing',
      qualityScore: '99.4% Clean',
      bars: [
        { label: 'PaddleOCR Mobile v4 (Accuracy)', value: 94, display: '94.2%' },
        { label: 'Tesseract LSTM Baseline (Accuracy)', value: 81, display: '81.5%' },
        { label: 'Cloud Vision Fallback (Accuracy)', value: 97, display: '97.1%' },
      ],
    },
    analytics: {
      docsIndexed: 14,
      verifiedCitations: 38,
      unresolvedDecisions: 1,
      knowledgeGrowth: '+28% this week',
    },
  },
  startup: {
    id: 'startup',
    name: 'Startup & Business Ops',
    roleBadge: 'Admin · RBAC Enforced',
    auditText: 'Audit ID #BZ-412 · Encrypted',
    proactiveAlert:
      'Proactive Conflict Alert: Client_Call_Notes.md moved the security audit freeze to Nov 14, contradicting Master_Contract_v1.pdf (Nov 20).',
    crossWorkspaceNote:
      'Cross-Workspace Link: Vendor SLA caps in "Finance Q3" align with the renewal clause in Vendor_SLA_Review.pdf.',
    docs: [
      {
        id: 'contract-v1',
        type: 'Docs',
        fileName: 'Master_Contract_v1.pdf',
        location: 'Page 9 · Clause 6.2',
        title: 'Enterprise Delivery & Security Audit Schedule',
        excerpt:
          '“Section 6.2: The vendor shall complete external security audit sign-off and staging freeze no later than November 20, 2026, prior to production cutover.”',
        highlight: 'no later than November 20, 2026',
      },
      {
        id: 'call-notes',
        type: 'Meetings',
        fileName: 'Client_Call_Notes.md',
        location: 'Line 38 · Nov 11 Sync',
        title: 'Client Steering Committee Call',
        excerpt:
          '“Client VP requested pulling the security audit freeze forward by 6 days to November 14 so compliance review finishes before the holiday week.”',
        highlight: 'pulling the security audit freeze forward by 6 days to November 14',
      },
      {
        id: 'vendor-sla',
        type: 'Papers',
        fileName: 'Vendor_SLA_Benchmark.pdf',
        location: 'Page 3 · Summary',
        title: 'Cloud Infrastructure Uptime & Penalty Terms',
        excerpt:
          '“Standard annual enterprise commitment guarantees 99.95% uptime with automated service credits if incident response exceeds 30 minutes.”',
        highlight: 'guarantees 99.95% uptime with automated service credits',
      },
      {
        id: 'invoices-csv',
        type: 'Datasets',
        fileName: 'Q3_Vendor_Invoices.csv',
        location: '86 Invoices · 8 Columns',
        title: 'Q3 Cloud & SaaS Spend Reconciliation',
        excerpt:
          '“Dataset Profile: 86 vendor invoices totaling $14,820. 2 duplicate entries flagged and excluded. 3 annual renewals due within 15 days.”',
        highlight: '3 annual renewals due within 15 days',
      },
    ],
    prompts: [
      {
        question: 'Are there any deadline conflicts or urgent renewals across our client & vendor files?',
        answers: {
          concise:
            'Yes: Client_Call_Notes.md moved the security freeze to Nov 14 (6 days earlier than Master_Contract_v1.pdf’s Nov 20 date), and 3 vendor renewals in Q3_Vendor_Invoices.csv are due within 15 days.',
          academic:
            'Cross-document temporal verification identified a 6-day schedule discrepancy between Master_Contract_v1.pdf (p. 9: Nov 20) and Client_Call_Notes.md (line 38: Nov 14), alongside 3 pending Q3 renewal records.',
          executive:
            'Action Needed: Re-align engineering sprints for a Nov 14 security freeze and approve 3 upcoming vendor renewals ($14,820 Q3 total) to avoid service interruption.',
        },
        docIds: ['contract-v1', 'call-notes', 'invoices-csv', 'vendor-sla'],
      },
      {
        question: 'What uptime commitment is backed by our vendor SLA document?',
        answers: {
          concise:
            'The vendor guarantees 99.95% uptime with automated service credits if incident response takes longer than 30 minutes.',
          academic:
            'Vendor_SLA_Benchmark.pdf (p. 3) specifies a 99.95% availability threshold paired with a 30-minute incident response SLA.',
          executive:
            'Our SLA protects operations with 99.95% guaranteed uptime and automatic billing credits for slow incident response.',
        },
        docIds: ['vendor-sla'],
      },
    ],
    tasks: [
      {
        id: 1,
        text: 'Resolve Nov 14 vs Nov 20 security freeze conflict with engineering',
        source: 'Client_Call_Notes.md · Line 38',
        done: false,
      },
      {
        id: 2,
        text: 'Approve 3 upcoming vendor contract renewals in Q3 sheet',
        source: 'Q3_Vendor_Invoices.csv · Row 12',
        done: false,
      },
      {
        id: 3,
        text: 'Archive 2 duplicate SaaS invoices flagged by profiler',
        source: 'Q3_Vendor_Invoices.csv · Audit',
        done: true,
      },
    ],
    datasetProfile: {
      fileName: 'Q3_Vendor_Invoices.csv',
      rows: '86 Invoices',
      columns: '8 Columns',
      missingValues: '0.0% Missing',
      qualityScore: '2 Duplicates Flagged',
      bars: [
        { label: 'Cloud Hosting & Vector DB ($8,400)', value: 57, display: '57%' },
        { label: 'AI Model API Usage ($4,120)', value: 28, display: '28%' },
        { label: 'Security & Compliance Tools ($2,300)', value: 15, display: '15%' },
      ],
    },
    analytics: {
      docsIndexed: 22,
      verifiedCitations: 51,
      unresolvedDecisions: 2,
      knowledgeGrowth: '+19% this month',
    },
  },
  institution: {
    id: 'institution',
    name: 'CSE Dept · Institution Hub',
    roleBadge: 'Coordinator · Audited',
    auditText: 'Audit ID #IN-901 · RBAC Strict',
    proactiveAlert:
      'Proactive Governance Note: All 18 student capstone repositories comply with department privacy rules; 2 accreditation rubrics updated.',
    crossWorkspaceNote:
      'Cross-Workspace Link: Capstone project outcomes in "Research & Hackathon Lab" map directly to PO-3 and PO-5 accreditation metrics.',
    docs: [
      {
        id: 'accred-doc',
        type: 'Docs',
        fileName: 'Accreditation_Policy_2026.pdf',
        location: 'Page 12 · Criteria 3.4',
        title: 'Capstone Project & Industry Internship Evaluation',
        excerpt:
          '“Criteria 3.4: Every second- and third-year engineering project must maintain version-controlled documentation, verifiable test logs, and clear problem-solution mapping.”',
        highlight: 'version-controlled documentation, verifiable test logs',
      },
      {
        id: 'faculty-min',
        type: 'Meetings',
        fileName: 'Faculty_Board_Minutes.txt',
        location: 'Item 04 · Oct 28',
        title: 'Department Curriculum & Research Committee',
        excerpt:
          '“Board approved awarding bonus innovation credits to teams submitting working prototypes to national hackathons with documented prior-art reviews.”',
        highlight: 'awarding bonus innovation credits to teams submitting working prototypes',
      },
      {
        id: 'outcome-study',
        type: 'Papers',
        fileName: 'Curriculum_Outcome_Study.pdf',
        location: 'Page 5 · Section 3',
        title: 'Project-Based Learning Impact Assessment',
        excerpt:
          '“Students utilizing structured knowledge repositories and weekly milestone tracking demonstrated a 34% higher completion rate in full-stack systems courses.”',
        highlight: '34% higher completion rate in full-stack systems courses',
      },
      {
        id: 'lab-csv',
        type: 'Datasets',
        fileName: 'Lab_Resource_Allocation.csv',
        location: '320 Records · 5 Columns',
        title: 'Department Compute & Workstation Utilization',
        excerpt:
          '“Dataset Profile: 320 lab session logs across 4 AI & Systems labs. Peak utilization: 88% during hackathon sprint weeks.”',
        highlight: 'Peak utilization: 88% during hackathon sprint weeks',
      },
    ],
    prompts: [
      {
        question: 'How do student hackathon projects qualify for bonus academic credits?',
        answers: {
          concise:
            'Per Faculty_Board_Minutes.txt (Item 04), teams qualify for bonus innovation credits by submitting working national hackathon prototypes with documented prior-art reviews and version-controlled docs.',
          academic:
            'Faculty_Board_Minutes.txt (Oct 28, Item 04) establishes bonus innovation credit eligibility for national hackathon prototypes supported by prior-art reviews, aligning with Accreditation_Policy_2026.pdf (p. 12, Criteria 3.4).',
          executive:
            'Policy Summary: Hackathon prototypes earn bonus credits when paired with Git version control, test logs, and a documented prior-art review.',
        },
        docIds: ['faculty-min', 'accred-doc', 'outcome-study', 'lab-csv'],
      },
    ],
    tasks: [
      {
        id: 1,
        text: 'Verify GitHub & test log links for 18 capstone teams',
        source: 'Accreditation_Policy_2026.pdf · Page 12',
        done: true,
      },
      {
        id: 2,
        text: 'Publish bonus innovation credit rubric to student portal',
        source: 'Faculty_Board_Minutes.txt · Item 04',
        done: false,
      },
    ],
    datasetProfile: {
      fileName: 'Lab_Resource_Allocation.csv',
      rows: '320 Sessions',
      columns: '5 Columns',
      missingValues: '0.0% Missing',
      qualityScore: '100% Verified',
      bars: [
        { label: 'AI & ML Lab Workstations (Peak)', value: 88, display: '88%' },
        { label: 'Full-Stack & Cloud Lab (Peak)', value: 76, display: '76%' },
        { label: 'Research Scholar Cluster (Peak)', value: 64, display: '64%' },
      ],
    },
    analytics: {
      docsIndexed: 46,
      verifiedCitations: 112,
      unresolvedDecisions: 1,
      knowledgeGrowth: '+34% this semester',
    },
  },
};

const sourceFilterTypes = ['All', 'Docs', 'Papers', 'Meetings', 'Datasets'];

export default function DemoModal({ isOpen, onClose }) {
  const [workspaceKey, setWorkspaceKey] = useState('research');
  const [modalView, setModalView] = useState('qa'); // 'qa' | 'analytics'
  const [sourceFilter, setSourceFilter] = useState('All');
  const [responseStyle, setResponseStyle] = useState('concise'); // 'concise' | 'academic' | 'executive'
  const [modelProvider, setModelProvider] = useState('ContextIQ-Verified');
  const [crossWorkspaceEnabled, setCrossWorkspaceEnabled] = useState(true);

  const [selectedPromptIdx, setSelectedPromptIdx] = useState(0);
  const [customQuery, setCustomQuery] = useState('');
  const [customResult, setCustomResult] = useState(null);
  const [activeDocId, setActiveDocId] = useState('arch-spec');

  const [tasksByWorkspace, setTasksByWorkspace] = useState({
    research: workspacesData.research.tasks,
    startup: workspacesData.startup.tasks,
    institution: workspacesData.institution.tasks,
  });

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

  const ws = workspacesData[workspaceKey];
  const currentTasks = tasksByWorkspace[workspaceKey] || [];
  const activePrompt = customResult || ws.prompts[selectedPromptIdx] || ws.prompts[0];

  const handleSwitchWorkspace = (newKey) => {
    setWorkspaceKey(newKey);
    setSelectedPromptIdx(0);
    setCustomResult(null);
    setSourceFilter('All');
    setActiveDocId(workspacesData[newKey].docs[0].id);
  };

  // Filter cited docs using Unified Context Retrieval source pills
  const filteredDocIds = activePrompt.docIds.filter((docId) => {
    if (sourceFilter === 'All') return true;
    const doc = ws.docs.find((d) => d.id === docId);
    return doc && doc.type === sourceFilter;
  });

  const inspectedDoc =
    ws.docs.find((doc) => doc.id === activeDocId) || ws.docs[0];

  const handleSelectPrompt = (idx) => {
    setCustomResult(null);
    setSelectedPromptIdx(idx);
    setActiveDocId(ws.prompts[idx].docIds[0]);
  };

  const handleCustomAsk = (e) => {
    e.preventDefault();
    if (!customQuery.trim()) return;

    const q = customQuery.trim();
    setCustomResult({
      question: q,
      answers: {
        concise: `Synthesized across ${ws.docs.length} indexed files in ${ws.name} using ${modelProvider}: All findings are anchored to verified source passages below.`,
        academic: `Cross-source retrieval across ${ws.docs.length} repository artifacts in ${ws.name} (${modelProvider}) yielded grounded evidence excerpts with page- and row-level provenance.`,
        executive: `Summary (${modelProvider}): Insights verified across ${ws.docs.length} workspace sources in ${ws.name}. Review the linked evidence cards below for sign-off.`,
      },
      docIds: ws.docs.map((d) => d.id),
    });
    setActiveDocId(ws.docs[0].id);
    setCustomQuery('');
  };

  const toggleTask = (taskId) => {
    setTasksByWorkspace((prev) => ({
      ...prev,
      [workspaceKey]: prev[workspaceKey].map((t) =>
        t.id === taskId ? { ...t, done: !t.done } : t
      ),
    }));
  };

  const completedCount = currentTasks.filter((t) => t.done).length;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-darkChocolate/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-2xl bg-softIvory dark:bg-darkChocolate border border-warmBeige dark:border-walnutBrown shadow-2xl"
      >
        {/* Top Header Bar with Workspace Switcher & Governance Badge */}
        <div className="sticky top-0 z-20 bg-darkChocolate dark:bg-[#2A1D16] px-4 sm:px-6 py-3.5 border-b border-walnutBrown/40 space-y-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-caramel shrink-0" />
              <div>
                <h3 className="font-display text-base sm:text-lg font-bold text-softIvory">
                  ContextIQ Live Intelligence Sandbox
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-[11px] text-warmBeige">
                  <span className="inline-flex items-center gap-1">
                    <Lock className="w-3 h-3 text-caramel" />
                    {ws.roleBadge}
                  </span>
                  <span>·</span>
                  <span>{ws.auditText}</span>
                </div>
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

          {/* Workspace Switcher + View Mode Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-walnutBrown/30">
            {/* Module 13: Workspace Switcher */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[11px] uppercase tracking-wider text-warmBeige/80 mr-1">
                Workspace:
              </span>
              {Object.values(workspacesData).map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSwitchWorkspace(item.id)}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                    workspaceKey === item.id
                      ? 'bg-caramel text-softIvory'
                      : 'bg-walnutBrown/30 text-warmBeige hover:text-softIvory'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mode Switcher: Q&A vs Dataset & Analytics */}
            <div className="flex bg-walnutBrown/40 p-0.5 rounded-lg text-xs">
              <button
                type="button"
                onClick={() => setModalView('qa')}
                className={`px-3 py-1 rounded-md font-medium transition-colors ${
                  modalView === 'qa'
                    ? 'bg-softIvory text-darkChocolate'
                    : 'text-warmBeige hover:text-softIvory'
                }`}
              >
                Unified Q&amp;A &amp; Evidence
              </button>
              <button
                type="button"
                onClick={() => setModalView('analytics')}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md font-medium transition-colors ${
                  modalView === 'analytics'
                    ? 'bg-softIvory text-darkChocolate'
                    : 'text-warmBeige hover:text-softIvory'
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5 text-caramel" />
                <span>Dataset &amp; Analytics</span>
              </button>
            </div>
          </div>
        </div>

        {/* Capability H: Proactive Knowledge Assistant Banner */}
        <div className="bg-vanillaCream dark:bg-walnutBrown/25 px-4 sm:px-6 py-2.5 border-b border-warmBeige/70 dark:border-walnutBrown/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <div className="flex items-start sm:items-center gap-2 text-darkChocolate dark:text-softIvory">
            <BellRing className="w-4 h-4 text-caramel shrink-0 mt-0.5 sm:mt-0" />
            <span>{ws.proactiveAlert}</span>
          </div>

          {/* Capability G: Cross-Workspace Permission Toggle */}
          <button
            type="button"
            onClick={() => setCrossWorkspaceEnabled(!crossWorkspaceEnabled)}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-medium shrink-0 transition-colors ${
              crossWorkspaceEnabled
                ? 'bg-softIvory dark:bg-darkChocolate text-caramel border-caramel'
                : 'bg-softIvory/60 dark:bg-darkChocolate/60 text-walnutBrown dark:text-warmBeige border-warmBeige dark:border-walnutBrown/60'
            }`}
          >
            <Layers className="w-3 h-3" />
            <span>
              Cross-Workspace: {crossWorkspaceEnabled ? 'Authorized' : 'Isolated'}
            </span>
          </button>
        </div>

        {crossWorkspaceEnabled && (
          <div className="bg-softIvory dark:bg-darkChocolate px-4 sm:px-6 py-2 border-b border-warmBeige/50 dark:border-walnutBrown/40 text-[11px] text-walnutBrown dark:text-warmBeige flex items-center gap-2">
            <Check className="w-3.5 h-3.5 text-caramel shrink-0" />
            <span>{ws.crossWorkspaceNote}</span>
          </div>
        )}

        {/* VIEW 1: UNIFIED Q&A, PERSONALIZATION & EVIDENCE INSPECTOR */}
        {modalView === 'qa' ? (
          <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column: Controls, Q&A, Unified Source Filters & Tasks */}
            <div className="lg:col-span-7 space-y-4">
              {/* Module 15: Personalization & AI Model Flexibility Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-vanillaCream/60 dark:bg-walnutBrown/20 border border-warmBeige/80 dark:border-walnutBrown/50">
                <div className="flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-caramel" />
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-walnutBrown dark:text-warmBeige">
                    Style:
                  </span>
                  {['concise', 'academic', 'executive'].map((styleKey) => (
                    <button
                      key={styleKey}
                      type="button"
                      onClick={() => setResponseStyle(styleKey)}
                      className={`px-2 py-0.5 rounded text-xs font-medium capitalize transition-colors ${
                        responseStyle === styleKey
                          ? 'bg-darkChocolate dark:bg-caramel text-softIvory'
                          : 'text-walnutBrown dark:text-warmBeige hover:text-darkChocolate dark:hover:text-softIvory'
                      }`}
                    >
                      {styleKey}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] text-walnutBrown dark:text-warmBeige">
                    Router:
                  </span>
                  <select
                    value={modelProvider}
                    onChange={(e) => setModelProvider(e.target.value)}
                    aria-label="Select AI Model Routing"
                    className="px-2 py-0.5 rounded bg-softIvory dark:bg-darkChocolate border border-warmBeige dark:border-walnutBrown/60 text-xs font-medium text-darkChocolate dark:text-softIvory focus:outline-none"
                  >
                    <option value="ContextIQ-Verified">ContextIQ-Verified</option>
                    <option value="Hybrid-Deep-Reasoning">Hybrid-Deep-Reasoning</option>
                    <option value="Fast-Local-Fallback">Fast-Local-Fallback</option>
                  </select>
                </div>
              </div>

              {/* Sample Prompts */}
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-wider font-semibold text-walnutBrown dark:text-warmBeige">
                  Select a workspace question or ask your own:
                </p>
                <div className="flex flex-wrap gap-2">
                  {ws.prompts.map((item, idx) => (
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

              {/* Custom Question Bar */}
              <form onSubmit={handleCustomAsk} className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-walnutBrown dark:text-warmBeige absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={customQuery}
                    onChange={(e) => setCustomQuery(e.target.value)}
                    placeholder={`Ask across ${ws.docs.length} sources in ${ws.name}...`}
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

              {/* Verified Answer Box with Unified Context Retrieval Filters */}
              <div className="rounded-xl bg-vanillaCream/70 dark:bg-walnutBrown/20 border border-warmBeige dark:border-walnutBrown/60 p-4 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-caramel">
                    <ShieldCheck className="w-4 h-4" />
                    Source-Grounded ({modelProvider})
                  </span>

                  {/* Capability I: Unified Context Retrieval Filter Pills */}
                  <div className="flex flex-wrap gap-1">
                    {sourceFilterTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setSourceFilter(type)}
                        className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                          sourceFilter === type
                            ? 'bg-darkChocolate dark:bg-caramel text-softIvory'
                            : 'bg-softIvory dark:bg-darkChocolate text-walnutBrown dark:text-warmBeige border border-warmBeige/70 dark:border-walnutBrown/50'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <p className="text-xs font-semibold text-walnutBrown dark:text-warmBeige">
                  Q: “{activePrompt.question}”
                </p>
                <p className="text-sm text-darkChocolate dark:text-softIvory leading-relaxed">
                  {activePrompt.answers[responseStyle]}
                </p>

                {/* Clickable Citation Pills */}
                <div className="pt-2 border-t border-warmBeige/60 dark:border-walnutBrown/40 flex flex-wrap gap-2">
                  {filteredDocIds.length > 0 ? (
                    filteredDocIds.map((docId) => {
                      const doc = ws.docs.find((d) => d.id === docId);
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
                          <span className="text-[10px] opacity-75">
                            ({doc.type})
                          </span>
                        </button>
                      );
                    })
                  ) : (
                    <span className="text-xs text-walnutBrown dark:text-warmBeige italic">
                      No {sourceFilter} citations for this specific answer—switch filter to “All”.
                    </span>
                  )}
                </div>
              </div>

              {/* Context-to-Action Checklist */}
              <div className="rounded-xl bg-vanillaCream/40 dark:bg-walnutBrown/15 border border-warmBeige/80 dark:border-walnutBrown/50 p-4 space-y-2.5">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-wider font-semibold text-darkChocolate dark:text-softIvory">
                    Context-to-Action Checklist
                  </p>
                  <span className="text-xs font-medium text-caramel">
                    {completedCount} of {currentTasks.length} completed
                  </span>
                </div>

                <div className="space-y-2">
                  {currentTasks.map((task) => (
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
                          Evidence: {task.source}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Live Evidence Inspector */}
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
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-walnutBrown dark:text-warmBeige">
                        {inspectedDoc.fileName}
                      </p>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-softIvory dark:bg-darkChocolate text-caramel border border-warmBeige/80 dark:border-walnutBrown/50">
                        {inspectedDoc.type}
                      </span>
                    </div>
                    <h4 className="font-display text-lg font-bold text-darkChocolate dark:text-softIvory mt-1">
                      {inspectedDoc.title}
                    </h4>
                  </div>

                  <div className="p-4 rounded-lg bg-softIvory dark:bg-darkChocolate border-l-4 border-caramel text-sm text-darkChocolate dark:text-softIvory leading-relaxed">
                    {inspectedDoc.excerpt}
                  </div>

                  <div className="p-3 rounded-lg bg-softIvory/80 dark:bg-walnutBrown/20 border border-warmBeige/80 dark:border-walnutBrown/50">
                    <p className="text-[11px] uppercase tracking-wider font-semibold text-walnutBrown dark:text-warmBeige">
                      Verified Supporting Claim
                    </p>
                    <p className="text-xs font-semibold text-caramel mt-1">
                      “{inspectedDoc.highlight}”
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-warmBeige/70 dark:border-walnutBrown/40 flex items-center justify-between text-xs text-walnutBrown dark:text-warmBeige">
                  <span>Zero-Hallucination Grounding</span>
                  <button
                    type="button"
                    onClick={() => setModalView('analytics')}
                    className="font-semibold text-caramel hover:underline"
                  >
                    Inspect Dataset &amp; Metrics →
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* VIEW 2: MODULE 12 (DATASET INTELLIGENCE) & MODULE 14 (ANALYTICS DASHBOARD) */
          <div className="p-4 sm:p-6 space-y-6">
            {/* Module 14: Practical Workspace Intelligence Analytics */}
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-caramel mb-3">
                Module 14 · Workspace Intelligence Overview ({ws.name})
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-vanillaCream/70 dark:bg-walnutBrown/20 border border-warmBeige dark:border-walnutBrown/60">
                  <p className="text-xs text-walnutBrown dark:text-warmBeige">
                    Indexed Sources
                  </p>
                  <p className="font-display text-2xl font-bold text-darkChocolate dark:text-softIvory mt-1">
                    {ws.analytics.docsIndexed} Files
                  </p>
                  <p className="text-[11px] text-caramel font-medium mt-1">
                    {ws.analytics.knowledgeGrowth}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-vanillaCream/70 dark:bg-walnutBrown/20 border border-warmBeige dark:border-walnutBrown/60">
                  <p className="text-xs text-walnutBrown dark:text-warmBeige">
                    Verified Citations
                  </p>
                  <p className="font-display text-2xl font-bold text-darkChocolate dark:text-softIvory mt-1">
                    {ws.analytics.verifiedCitations}
                  </p>
                  <p className="text-[11px] text-walnutBrown dark:text-warmBeige mt-1">
                    100% page/row traceable
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-vanillaCream/70 dark:bg-walnutBrown/20 border border-warmBeige dark:border-walnutBrown/60">
                  <p className="text-xs text-walnutBrown dark:text-warmBeige">
                    Unresolved Decisions
                  </p>
                  <p className="font-display text-2xl font-bold text-darkChocolate dark:text-softIvory mt-1">
                    {ws.analytics.unresolvedDecisions}
                  </p>
                  <p className="text-[11px] text-caramel font-medium mt-1">
                    Flagged in Proactive Briefing
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-vanillaCream/70 dark:bg-walnutBrown/20 border border-warmBeige dark:border-walnutBrown/60">
                  <p className="text-xs text-walnutBrown dark:text-warmBeige">
                    Extracted Task Progress
                  </p>
                  <p className="font-display text-2xl font-bold text-darkChocolate dark:text-softIvory mt-1">
                    {completedCount}/{currentTasks.length} Done
                  </p>
                  <p className="text-[11px] text-walnutBrown dark:text-warmBeige mt-1">
                    Synced with Q&amp;A checklist
                  </p>
                </div>
              </div>
            </div>

            {/* Module 12: Structured Dataset Profiling & Traceable Visualization */}
            <div className="rounded-2xl bg-vanillaCream/60 dark:bg-walnutBrown/20 border border-warmBeige dark:border-walnutBrown/60 p-5 sm:p-6 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-warmBeige/70 dark:border-walnutBrown/40 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-darkChocolate dark:bg-walnutBrown/40 flex items-center justify-center">
                    <Database className="w-5 h-5 text-caramel" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider font-semibold text-caramel">
                      Module 12 · CSV &amp; Dataset Intelligence
                    </p>
                    <h4 className="font-display text-lg font-bold text-darkChocolate dark:text-softIvory">
                      {ws.datasetProfile.fileName}
                    </h4>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-2.5 py-1 rounded-md bg-softIvory dark:bg-darkChocolate border border-warmBeige dark:border-walnutBrown/60 font-medium">
                    {ws.datasetProfile.rows}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-softIvory dark:bg-darkChocolate border border-warmBeige dark:border-walnutBrown/60 font-medium">
                    {ws.datasetProfile.columns}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-softIvory dark:bg-darkChocolate border border-warmBeige dark:border-walnutBrown/60 font-medium text-caramel">
                    {ws.datasetProfile.qualityScore}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-xs uppercase tracking-wider font-semibold text-walnutBrown dark:text-warmBeige">
                  Traceable Dataset Distribution (Generated directly from CSV columns)
                </p>
                {ws.datasetProfile.bars.map((bar) => (
                  <div key={bar.label} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs sm:text-sm font-medium">
                      <span className="text-darkChocolate dark:text-softIvory">
                        {bar.label}
                      </span>
                      <span className="font-bold text-caramel">{bar.display}</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-softIvory dark:bg-darkChocolate overflow-hidden border border-warmBeige/60 dark:border-walnutBrown/40">
                      <div
                        className="h-full rounded-full bg-caramel transition-all duration-500"
                        style={{ width: `${bar.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-walnutBrown dark:text-warmBeige">
                <span>Missing-Value Check: {ws.datasetProfile.missingValues}</span>
                <button
                  type="button"
                  onClick={() => setModalView('qa')}
                  className="font-semibold text-caramel hover:underline"
                >
                  ← Back to Unified Q&amp;A &amp; Evidence
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
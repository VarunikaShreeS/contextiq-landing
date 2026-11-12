import { useState } from 'react';
import {
  Network,
  ShieldCheck,
  CheckSquare,
  AlertTriangle,
  BookOpen,
  History,
} from 'lucide-react';

const featuresData = [
  {
    title: 'Context Graph Intelligence',
    category: 'core',
    tag: 'Signature Engine',
    description:
      'Automatically connects people, documents, research papers, meetings, and decisions into one navigable web of project knowledge.',
    icon: Network,
  },
  {
    title: 'Evidence-Level Verification',
    category: 'trust',
    tag: 'Zero Hallucination Focus',
    description:
      'Every AI answer links directly to exact page numbers and highlighted source passages—clearly separating verified facts from inference.',
    icon: ShieldCheck,
  },
  {
    title: 'Context-to-Action Engine',
    category: 'workflow',
    tag: 'Execution',
    description:
      'Extracts action items, owners, and deadlines straight from meeting transcripts and project specs while keeping links to the original discussion.',
    icon: CheckSquare,
  },
  {
    title: 'Knowledge Conflict Detector',
    category: 'trust',
    tag: 'Accuracy',
    description:
      'Scans across your workspace to flag contradictory numbers, conflicting deadlines, and outdated requirement versions before they cause errors.',
    icon: AlertTriangle,
  },
  {
    title: 'Research & Student Hub',
    category: 'workflow',
    tag: 'Academic & Hackathon',
    description:
      'Compare research methodologies, organize syllabus units, analyze hackathon problem statements, and export structured literature tables.',
    icon: BookOpen,
  },
  {
    title: 'Temporal Context Memory',
    category: 'core',
    tag: 'Version Awareness',
    description:
      'Tracks how project decisions and requirements evolve over time so you always know which document holds the latest approved truth.',
    icon: History,
  },
];

const filterTabs = [
  { id: 'all', label: 'All Capabilities' },
  { id: 'core', label: 'Context & Memory' },
  { id: 'trust', label: 'Evidence & Trust' },
  { id: 'workflow', label: 'Research & Action' },
];

export default function Features() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const visibleFeatures =
    selectedCategory === 'all'
      ? featuresData
      : featuresData.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="features"
      className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-vanillaCream/45 dark:bg-walnutBrown/15 border-b border-warmBeige/40 dark:border-walnutBrown/40 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <p className="text-xs uppercase tracking-widest text-caramel font-semibold">
            Core Capabilities
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-darkChocolate dark:text-softIvory">
            Built to connect scattered knowledge
          </h2>
          <p className="text-walnutBrown dark:text-warmBeige text-base leading-relaxed">
            Go beyond basic document chat. ContextIQ structures your information,
            verifies every claim, and turns insights into trackable work.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
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

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleFeatures.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="rounded-2xl bg-softIvory dark:bg-darkChocolate border border-warmBeige/80 dark:border-walnutBrown/60 p-6 flex flex-col justify-between hover:border-caramel dark:hover:border-caramel hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-vanillaCream dark:bg-walnutBrown/25 border border-warmBeige dark:border-walnutBrown/50 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-caramel" />
                    </div>
                    <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-vanillaCream dark:bg-walnutBrown/25 text-walnutBrown dark:text-warmBeige border border-warmBeige/60 dark:border-walnutBrown/50">
                      {feature.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-darkChocolate dark:text-softIvory">
                    {feature.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-walnutBrown dark:text-warmBeige leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
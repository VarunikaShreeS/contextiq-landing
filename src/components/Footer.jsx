import { Network } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-darkChocolate dark:bg-[#2A1D16] text-softIvory border-t border-walnutBrown/40 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-walnutBrown/40">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-walnutBrown/40 border border-caramel/40 flex items-center justify-center">
                <Network className="w-5 h-5 text-caramel" />
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-softIvory">
                Context<span className="text-caramel">IQ</span>
              </span>
            </a>
            <p className="text-sm text-warmBeige leading-relaxed max-w-sm">
              Knowledge that connects. Intelligence that acts. A unified AI
              workspace for source-verified research, project memory, and clear
              execution.
            </p>
          </div>

          {/* Platform Links Column */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs uppercase tracking-wider font-semibold text-caramel">
              Platform
            </p>
            <ul className="space-y-2.5 text-sm text-warmBeige">
              <li>
                <a href="#features" className="hover:text-softIvory transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-softIvory transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-softIvory transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-softIvory transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-softIvory transition-colors">
                  Request Access
                </a>
              </li>
            </ul>
          </div>

          {/* Intelligence Hubs Navigation Column */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs uppercase tracking-wider font-semibold text-caramel">
              Intelligence Hubs
            </p>
            <ul className="space-y-2.5 text-sm text-warmBeige">
              <li>
                <a href="#how-it-works" className="hover:text-softIvory transition-colors">
                  Student &amp; Hackathon Intelligence
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-softIvory transition-colors">
                  Research &amp; Literature Synthesis
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-softIvory transition-colors">
                  Context Graph &amp; Temporal Memory
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-softIvory transition-colors">
                  Evidence-Grounded Verification
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-warmBeige/80">
          <p>© {new Date().getFullYear()} ContextIQ. All rights reserved.</p>
          <p className="text-warmBeige/70">Knowledge that connects. Intelligence that acts.</p>
        </div>
      </div>
    </footer>
  );
}
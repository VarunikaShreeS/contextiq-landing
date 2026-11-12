import { useState, useEffect } from 'react';
import { Network, Menu, X, Sun, Moon, Sparkles, ArrowUp } from 'lucide-react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';

const navLinks = [
  { id: 'features', name: 'Features', href: '#features' },
  { id: 'how-it-works', name: 'How It Works', href: '#how-it-works' },
  { id: 'pricing', name: 'Pricing', href: '#pricing' },
  { id: 'faq', name: 'FAQ', href: '#faq' },
  { id: 'contact', name: 'Contact', href: '#contact' },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('Researcher Pro');
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  // Tracks which section is currently visible in the viewport (Scroll-Spy)
  const [activeSection, setActiveSection] = useState('');
  // Tracks whether the floating Scroll-to-Top button should appear
  const [showScrollTop, setShowScrollTop] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('contextiq-theme') === 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('contextiq-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('contextiq-theme', 'light');
    }
  }, [darkMode]);

  // Listens to page scroll to update the active navbar link and Scroll-to-Top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 450);

      if (window.scrollY < 250) {
        setActiveSection('');
        return;
      }

      for (const link of navLinks) {
        const sectionEl = document.getElementById(link.id);
        if (sectionEl) {
          const rect = sectionEl.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-softIvory dark:bg-darkChocolate text-darkChocolate dark:text-softIvory transition-colors duration-300">
      {/* Sticky Navigation Bar */}
      <header className="sticky top-0 z-40 bg-softIvory/95 dark:bg-darkChocolate/95 backdrop-blur-sm border-b border-warmBeige/40 dark:border-walnutBrown/40 transition-colors duration-300">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-darkChocolate dark:bg-walnutBrown/35 border border-transparent dark:border-caramel/40 flex items-center justify-center text-softIvory transition-transform group-hover:scale-105">
              <Network className="w-5 h-5 text-caramel" />
            </div>
            <span className="font-display text-xl font-bold tracking-tight text-darkChocolate dark:text-softIvory">
              Context<span className="text-caramel">IQ</span>
            </span>
          </a>

          {/* Desktop Navigation Links with Scroll-Spy Highlighting */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative py-1 text-sm transition-colors ${
                    isActive
                      ? 'font-semibold text-caramel'
                      : 'font-medium text-walnutBrown dark:text-warmBeige hover:text-darkChocolate dark:hover:text-softIvory'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-caramel" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Warm Dark Mode'}
              className="p-2.5 rounded-lg bg-vanillaCream dark:bg-walnutBrown/25 border border-warmBeige/80 dark:border-walnutBrown/60 text-darkChocolate dark:text-vanillaCream hover:border-caramel transition-colors"
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-caramel" />
              ) : (
                <Moon className="w-4 h-4 text-walnutBrown" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setDemoModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-vanillaCream dark:bg-walnutBrown/25 border border-warmBeige dark:border-walnutBrown/60 text-darkChocolate dark:text-softIvory text-sm font-medium hover:border-caramel transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-caramel" />
              <span>Live Sandbox</span>
            </button>

            <a
              href="#contact"
              className="px-5 py-2.5 rounded-lg bg-caramel text-softIvory text-sm font-medium hover:bg-darkChocolate dark:hover:bg-walnutBrown transition-colors shadow-sm"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 rounded-lg bg-vanillaCream dark:bg-walnutBrown/25 border border-warmBeige/70 dark:border-walnutBrown/60 text-darkChocolate dark:text-vanillaCream"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-caramel" />
              ) : (
                <Moon className="w-5 h-5 text-walnutBrown" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-darkChocolate dark:text-softIvory hover:bg-vanillaCream dark:hover:bg-walnutBrown/25 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-vanillaCream dark:bg-[#2E2018] border-b border-warmBeige/50 dark:border-walnutBrown/50 px-4 pt-3 pb-5 space-y-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 text-base transition-colors ${
                    isActive
                      ? 'font-semibold text-caramel'
                      : 'font-medium text-darkChocolate dark:text-softIvory hover:text-caramel'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setDemoModalOpen(true);
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-softIvory dark:bg-darkChocolate border border-warmBeige dark:border-walnutBrown text-darkChocolate dark:text-softIvory text-sm font-medium"
            >
              <Sparkles className="w-4 h-4 text-caramel" />
              <span>Try Live Sandbox</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center px-5 py-2.5 rounded-lg bg-caramel text-softIvory text-sm font-medium hover:bg-darkChocolate transition-colors"
            >
              Get Started
            </a>
          </div>
        )}
      </header>

      {/* Main Page Sections */}
      <main>
        <Hero onOpenDemo={() => setDemoModalOpen(true)} />
        <Features />
        <HowItWorks />
        <Pricing onSelectPlan={(planName) => setSelectedPlan(planName)} />
        <FAQ />
        <Contact selectedPlan={selectedPlan} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Workspace Sandbox Modal */}
      <DemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />

      {/* Floating Scroll-to-Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        title="Back to Top"
        className={`fixed bottom-6 right-6 z-30 p-3 rounded-full bg-darkChocolate dark:bg-caramel text-softIvory border border-caramel/40 shadow-lg hover:bg-caramel dark:hover:bg-walnutBrown transition-all duration-300 ${
          showScrollTop
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
}
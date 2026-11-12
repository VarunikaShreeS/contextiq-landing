import { useState, useEffect } from 'react';
import { Network, Menu, X, Sun, Moon } from 'lucide-react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('Researcher Pro');

  // Reads saved theme from browser memory (defaults to Light Mode)
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('contextiq-theme') === 'dark';
  });

  // Adds or removes the "dark" class on the <html> element whenever darkMode changes
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

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-softIvory dark:bg-darkChocolate text-darkChocolate dark:text-softIvory transition-colors duration-300">
      {/* Sticky Navigation Bar */}
      <header className="sticky top-0 z-50 bg-softIvory/95 dark:bg-darkChocolate/95 backdrop-blur-sm border-b border-warmBeige/40 dark:border-walnutBrown/40 transition-colors duration-300">
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

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-walnutBrown dark:text-warmBeige hover:text-darkChocolate dark:hover:text-softIvory transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Theme Toggle & Get Started Button */}
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

            <a
              href="#contact"
              className="px-5 py-2.5 rounded-lg bg-caramel text-softIvory text-sm font-medium hover:bg-darkChocolate dark:hover:bg-walnutBrown transition-colors shadow-sm"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Controls (Theme Toggle + Menu Button) */}
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
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-darkChocolate dark:text-softIvory hover:text-caramel"
              >
                {link.name}
              </a>
            ))}
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
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing onSelectPlan={(planName) => setSelectedPlan(planName)} />
        <Contact selectedPlan={selectedPlan} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
import { useState } from 'react';
import { Network, Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('Researcher Pro');

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-softIvory text-darkChocolate">
      {/* Sticky Navigation Bar */}
      <header className="sticky top-0 z-50 bg-softIvory/95 backdrop-blur-sm border-b border-warmBeige/40">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-darkChocolate flex items-center justify-center text-softIvory transition-transform group-hover:scale-105">
              <Network className="w-5 h-5 text-caramel" />
            </div>
            <span className="font-display text-xl font-bold tracking-tight text-darkChocolate">
              Context<span className="text-caramel">IQ</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-walnutBrown hover:text-darkChocolate transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Get Started Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-lg bg-caramel text-softIvory text-sm font-medium hover:bg-darkChocolate transition-colors shadow-sm"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-darkChocolate hover:bg-vanillaCream transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-vanillaCream border-b border-warmBeige/50 px-4 pt-3 pb-5 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-darkChocolate hover:text-caramel"
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

      {/* Dark Chocolate Footer */}
      <Footer />
    </div>
  );
}
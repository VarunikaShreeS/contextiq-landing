# ContextIQ — AI-Powered Knowledge & Context Intelligence Platform

**Tagline:** *Knowledge that connects. Intelligence that acts.*

ContextIQ is a responsive, interactive SaaS landing page and product sandbox for an AI-powered knowledge management, research synthesis, and context intelligence platform. It demonstrates how scattered documents, research papers, meeting transcripts, datasets, and project decisions connect into one source-verified workspace.

## Live Demo
- **Live Website:** `<PASTE-YOUR-VERCEL-URL-HERE-AFTER-DEPLOYING>`

## Key Interactive Features
- **Warm Light & Dark Theme Switcher:** Toggles smoothly between a soft editorial light palette (*Soft Ivory* `#FAF7F0` & *Vanilla Cream* `#F2E7D5`) and a warm dark palette (*Dark Chocolate* `#3B2A20` & *Walnut Brown* `#7B5E4A`), persisted via `localStorage`.
- **Multi-Scenario Hero Simulator:** Interactive preview switching between *Architecture Sync*, *Conflict Detector*, and *Hackathon & Research* across both *Verified Q&A* and *Context Graph* views.
- **Interactive Live Sandbox Modal (`DemoModal.jsx`):** Includes a multi-workspace switcher (*Research & Hackathon Lab*, *Startup & Business Ops*, *Institution Dept Hub*), proactive assistant alerts, unified source filters (*Docs*, *Papers*, *Meetings*, *Datasets*), AI response style controls (*Concise*, *Academic*, *Executive*), clickable citations with an *Evidence Inspector*, an interactive task checklist, and a *Dataset & Analytics* profiling view.
- **9 Differentiating Capabilities & 16-Module Ecosystem:** Interactive capability spotlight (A–I) paired with a category-filterable grid covering all 16 product modules.
- **5 Target User Ecosystems:** Interactive workflow explorer for *Students & Hackathons*, *Research Scholars*, *Developers & Teams*, *Startups & Businesses*, and *Organizations & Institutions*.
- **Dynamic Pricing & Validated Request Form:** Monthly/Annual billing toggle that pre-selects the chosen plan in the Contact form, complete with client-side validation and confirmation states.
- **Smooth FAQ Accordion & Scroll-Spy Navigation:** Animated CSS-grid FAQ disclosures, active section highlighting on scroll, and a floating scroll-to-top button.

## Technologies Used
- **React 18** (`useState`, `useEffect`, modular component architecture)
- **Vite** (Development server and production bundler)
- **Tailwind CSS v3** (Custom warm neutral color tokens, responsive grid layouts, and class-based dark mode)
- **Lucide React** (Consistent vector line icons)
- **Google Fonts** (*Playfair Display* & *Inter*)

## Challenges & Solutions
- **Tailwind CSS Configuration & Theme Persistence:** Configured Tailwind CSS v3 with `darkMode: 'class'` and custom color tokens, synchronizing user theme preferences with `localStorage` and `document.documentElement` inside a React `useEffect` hook without flash or layout shift.
- **Cross-Component State Without a Backend:** Connected the Pricing tier buttons, Hero scenario triggers, and Live Sandbox modal cleanly through lifted React state so button actions feel cohesive across the entire page.

## How to Run Locally
1. Clone this repository:
   ```bash
   git clone <your-github-repo-url>
   cd contextiq-landing
export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  year: string;
  insight: string;
  overview: string;
  before: string[];
  problem: string;
  constraints: string;
  process: string;
  solution: string;
  tradeoffs: string;
  outcome: string;
  hindsight: string;
  results: { label: string; value: string; context?: string }[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "noir-studio",
    title: "Noir Studio",
    description:
      "Brand identity and e-commerce platform for a luxury fashion house.",
    category: "Branding",
    tags: ["Branding", "E-Commerce", "Strategy"],
    year: "2025",
    insight:
      "Rebuilt the checkout as the primary revenue driver, reducing friction and lifting conversion by 40%.",
    overview:
      "A complete digital transformation for Noir Studio, a luxury fashion label seeking to establish a commanding online presence that matched their runway reputation.",
    before: [
      "68% drop-off at checkout",
      "No mobile-optimized product pages",
      "Fragmented brand presence across channels",
    ],
    problem:
      "The brand's existing digital presence was fragmented and failed to convey the level of craftsmanship and exclusivity their physical collections embodied. Conversion rates were below industry average.",
    constraints:
      "Tight 8-week deadline. No existing design system. Legacy CMS that couldn't be replaced mid-project, so we built a translation layer between old content and new frontend.",
    process:
      "Conducted extensive brand audits, competitive analysis, and user research. Created a design language rooted in negative space and typographic restraint. Iterative prototyping with real customer testing.",
    solution:
      "A monochromatic e-commerce experience with cinematic product photography, micro-interactions on scroll, and a streamlined checkout flow that reduced friction by 60%.",
    tradeoffs:
      "Chose SSR over full SPA for SEO despite the added complexity. Sacrificed some animation fidelity on mobile to keep LCP under 2.5s. Prioritised checkout speed over visual richness in the cart flow.",
    outcome:
      "40% increase in online conversions. 3x improvement in average session duration. Featured in Awwwards and CSS Design Awards.",
    hindsight:
      "I over-indexed on hero animations in early iterations. User testing revealed they created a 2-second delay before the first product was visible. Stripping them back improved time-to-first-product by 40% and bounce rate dropped. The lesson: entrance spectacle competes with entrance utility.",
    results: [
      { label: "Conversion Lift", value: "+40%", context: "3-week redesign, same traffic" },
      { label: "Session Duration", value: "3x", context: "within first month" },
      { label: "Checkout Friction", value: "−60%", context: "from 68% to 27% drop-off" },
    ],
  },
  {
    id: 2,
    slug: "atelier",
    title: "Atelier",
    description:
      "Digital experience for an architectural firm redefining modern living.",
    category: "Web",
    tags: ["Web Design", "Development", "WebGL"],
    year: "2025",
    insight:
      "Turned underperforming photography into a scroll-driven sales tool. Inquiries up 55%, two major deals closed from the site.",
    overview:
      "Atelier is a Tokyo-based architecture firm known for minimalist residential design. They needed a portfolio that felt as intentional as their buildings.",
    before: [
      "Template-based site with no differentiation",
      "Strong photography buried in generic layouts",
      "Zero inbound inquiries from the website",
    ],
    problem:
      "Their previous website was template-based and failed to differentiate them in a competitive market. Project photography was strong but poorly showcased.",
    constraints:
      "All photography was existing, no new shoots. The firm's brand guidelines were minimal (just a logo). Built the entire visual language from scratch while respecting Japanese design sensibility.",
    process:
      "Immersive research into architectural portfolio standards. Developed a scroll-driven narrative approach where each project unfolds like a story. Custom WebGL transitions between projects.",
    solution:
      "A full-screen, scroll-driven portfolio with parallax photography, ambient sound design, and project narratives that guide visitors through each space.",
    tradeoffs:
      "WebGL transitions added 180KB to bundle, justified by the 55% inquiry lift. Chose scroll-hijacking for desktop storytelling despite accessibility concerns, with a standard scroll fallback for mobile and reduced-motion users.",
    outcome:
      "Inquiries increased 55%. The site became a conversation piece in client meetings, directly contributing to two major project wins.",
    hindsight:
      "The scroll-hijacking was polarising. About 15% of test users found it disorienting. I should have implemented a toggle for linear scrolling from the start. In future, I'd prototype the scroll model with real users before committing to it architecturally.",
    results: [
      { label: "Inquiry Increase", value: "+55%", context: "organic traffic only" },
      { label: "Project Wins", value: "2 Major", context: "directly from site" },
      { label: "Avg. Scroll Depth", value: "87%", context: "vs 34% before" },
    ],
  },
  {
    id: 3,
    slug: "meridian",
    title: "Meridian",
    description:
      "SaaS dashboard redesign for a fintech analytics platform.",
    category: "Product",
    tags: ["Product Design", "UI", "Data Viz"],
    year: "2024",
    insight:
      "Reduced onboarding drop-off from 40% to 18% and doubled NPS by removing complexity, not adding features.",
    overview:
      "Meridian provides real-time financial analytics for institutional traders. Their dashboard needed a ground-up redesign to handle increasing data complexity.",
    before: [
      "40% onboarding drop-off in first week",
      "NPS score of 34",
      "Users averaging 3 support tickets per week",
    ],
    problem:
      "Information overload. Users struggled to extract actionable insights from dense data tables. Onboarding drop-off was at 40% within the first week.",
    constraints:
      "Had to work within existing React + D3 codebase, no greenfield rebuild. Real-time data feeds couldn't tolerate layout thrashing. SEC compliance required certain data to always be visible.",
    process:
      "Shadowed traders for two weeks. Mapped cognitive workflows. Developed a progressive disclosure framework that surfaces critical data first.",
    solution:
      "A dark-mode dashboard with customizable widget layouts, AI-powered insight summaries, and a guided onboarding flow with contextual tooltips.",
    tradeoffs:
      "Chose progressive disclosure over radical simplification: removed nothing, just layered it. Custom tooltip system over a library because Radix couldn't handle the real-time update frequency. Traded design novelty for cognitive familiarity in the trading view.",
    outcome:
      "Onboarding completion improved to 82%. NPS increased from 34 to 67. Average daily active usage grew by 45%.",
    hindsight:
      "I underestimated the learning curve of the widget layout system. Power users loved it, but new users felt overwhelmed by the customisation options. Adding 3 preset layouts as starting points (which we shipped in v2) should have been in v1. Defaults are a design decision, not a fallback.",
    results: [
      { label: "Onboarding", value: "82%", context: "from 54%, over 6 weeks" },
      { label: "NPS", value: "34→67", context: "measured at 90 days" },
      { label: "DAU Growth", value: "+45%", context: "within existing user base" },
    ],
  },
  {
    id: 4,
    slug: "monolith",
    title: "Monolith",
    description:
      "Brand system and website for a next-gen creative agency.",
    category: "Branding",
    tags: ["Branding", "Web", "Motion"],
    year: "2024",
    insight:
      "3 enterprise clients in Q1 and 8 senior hires. The site was a recruiting and sales tool, not a portfolio.",
    overview:
      "Monolith is a creative agency that bridges traditional advertising with digital innovation. They needed a brand that was as bold as their work.",
    before: [
      "No visual identity or brand guidelines",
      "Competing founder visions (minimal vs. maximal)",
      "Zero digital presence or portfolio",
    ],
    problem:
      "As a new agency, they lacked visual identity and digital presence. They needed to attract both enterprise clients and top creative talent.",
    constraints:
      "Zero existing brand equity, had to build trust and recognition simultaneously. The founders had opposing aesthetic preferences (minimal vs. maximal). Budget limited custom photography to 2 shoot days.",
    process:
      "Collaborative workshops to define brand pillars. Developed three distinct directions before converging on a brutalist-meets-luxury aesthetic. Motion design as a core brand element.",
    solution:
      "A modular brand system with dynamic typography, a portfolio site with real-time case study filtering, and a custom CMS for easy content updates.",
    tradeoffs:
      "Brutalist aesthetic polarises, intentionally. Chose to alienate some prospects to deeply resonate with ideal clients. Custom CMS over Sanity to give non-technical founders full control, at the cost of 3 extra weeks of development.",
    outcome:
      "Landed 3 enterprise clients within first quarter post-launch. Successfully recruited 8 senior creatives who cited the website as a key attraction factor.",
    hindsight:
      "The custom CMS was a mistake. It solved the immediate problem but created long-term maintenance burden. The founders outgrew it within 6 months. Should have invested the 3 weeks in a Sanity setup with a custom studio UI: same control, zero maintenance. Build for year-two, not week-one.",
    results: [
      { label: "Enterprise Clients", value: "3 in Q1", context: "first 90 days post-launch" },
      { label: "Senior Hires", value: "8", context: "cited website as key factor" },
      { label: "Brand Recall", value: "Top 5%", context: "in target agency segment" },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

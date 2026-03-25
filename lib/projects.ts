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
  {
    id: 5,
    slug: "plateform",
    title: "Building PlateForm",
    description:
      "Designed, built, and launched a commission-free SaaS ordering platform for restaurants across the MENA region. From zero to 38+ restaurants and 50K+ orders.",
    category: "Product",
    tags: ["SaaS", "Founder", "Full-Stack"],
    year: "2024",
    insight:
      "Restaurants don't need another aggregator taking 30%. They need infrastructure they own. That insight became the entire product.",
    overview:
      "PlateForm is a commission-free online ordering system I built from scratch for restaurants in Egypt, Saudi Arabia, the UAE, and the Gulf. It gives restaurant owners a branded storefront, real-time order management, WhatsApp notifications, delivery zone configuration, and full analytics, all without per-order fees.",
    before: [
      "Restaurants losing 15–30% per order to third-party aggregators",
      "No ownership of customer data or ordering experience",
      "No affordable, localized alternative in the MENA market",
    ],
    problem:
      "Restaurants across the MENA region were trapped in a dependency loop: third-party delivery apps controlled the customer relationship, took 15–30% per order, and offered no data portability. Small and mid-size operators couldn't afford custom solutions, and existing alternatives weren't built for the region: no Arabic/RTL support, no local payment gateways, no WhatsApp integration.",
    constraints:
      "Solo founder with no external funding. Had to build a production-ready platform that could onboard restaurants in under 24 hours. Needed to support Arabic and English with full RTL layout. Had to integrate local payment processors and WhatsApp Business API for order notifications. Pricing had to undercut aggregators dramatically to drive switching.",
    process:
      "Started with deep customer discovery. Interviewed 30+ restaurant owners across Egypt and the Gulf to map their pain points. Built the MVP focusing on the three things they cared about most: zero commissions, branded experience, and WhatsApp notifications. Launched with a free tier to reduce switching friction, then iterated weekly based on real operator feedback. Added delivery zone management, OTP phone verification (which cut failed orders by ~60%), and analytics dashboards based on what restaurants actually asked for.",
    solution:
      "A three-tier SaaS platform: Starter (free, 1 branch, subdomain), Pro ($79/mo, 5 branches, custom domain, AI chatbot, card payments), and Scale ($159/mo, unlimited branches, white-label mobile apps, POS integration). Restaurants go live in under 24 hours. The platform handles menu management, order routing, delivery fee configuration, customer analytics, and automated weekly performance reports.",
    tradeoffs:
      "Chose to build a web-first platform over native apps to ship faster, then added white-label apps later for Scale tier only. Went with a flat monthly pricing model instead of per-order fees, which meant slower initial revenue but built trust and reduced churn. Prioritised WhatsApp integration over email because that's how MENA restaurant operators actually communicate. Built in-house rather than using a white-label solution to maintain full control over the product roadmap.",
    outcome:
      "38+ restaurants onboarded across Egypt, Saudi Arabia, UAE, Kuwait, and Jordan. 50,000+ orders processed through the platform. Restaurants have collectively saved over EGP 3.7M in aggregator commissions. OTP verification reduced failed orders by ~60%. Weekly shipping cadence with features driven directly by operator feedback.",
    hindsight:
      "I should have launched the POS integration earlier. It was the number one request from multi-branch operators and I deprioritised it in favour of marketing features. The restaurants that churned early almost all cited lack of POS sync as the reason. When your power users are telling you what they need, that's your roadmap.",
    results: [
      { label: "Restaurants", value: "38+", context: "across 7 MENA countries" },
      { label: "Orders Processed", value: "50K+", context: "and growing" },
      { label: "Commissions Saved", value: "EGP 3.7M+", context: "vs. aggregator fees" },
    ],
  },
  {
    id: 6,
    slug: "talkmobile-tsar",
    title: "Talkmobile's First TSAR Team",
    description:
      "Built and launched the first dedicated Sales & Retention team for Talkmobile (Vodafone) from zero, securing client approval and establishing a scalable operating model.",
    category: "Operations",
    tags: ["Team Building", "Sales Ops", "GTM"],
    year: "2024",
    insight:
      "The hardest part wasn't the sales motion. It was convincing a global org to bet on an unproven model. Once it launched, it became the template.",
    overview:
      "Talkmobile, a Vodafone-owned brand, needed a new approach to customer retention. Working through VOIS (Vodafone Intelligent Solutions), I piloted and launched the first combined Sales & Retention (TSAR) team for Talkmobile, building it from concept through to a fully operational unit with client sign-off.",
    before: [
      "Sales and retention operated as separate, siloed functions",
      "No precedent for a combined team within Talkmobile",
      "New hires ramping slowly without structured mentorship",
    ],
    problem:
      "Talkmobile's sales and retention teams operated independently, creating handoff friction and missed opportunities. There was no model for combining these functions, and no internal champion willing to take the risk.",
    constraints:
      "Had to prove the concept within existing headcount. No additional budget for hiring. Required client-side approval from Vodafone UK leadership. Needed to maintain BAU performance metrics while simultaneously building something new.",
    process:
      "Identified the retention-to-upsell gap through data analysis. Built a business case with projected impact. Recruited and mentored the initial team from existing high performers. Created training materials, KPI frameworks, and escalation paths. Ran a 90-day pilot with weekly reporting to stakeholders.",
    solution:
      "A hybrid team model where reps handled both retention saves and sales conversions in a single interaction. Structured coaching framework to accelerate new hire ramp time. Weekly performance cadence with clear KPIs tied to both retention and revenue.",
    tradeoffs:
      "Chose to staff from existing high performers rather than hiring externally, which reduced risk but temporarily weakened other teams. Prioritised speed-to-proof over perfection: shipped the model with manual reporting, automated it later.",
    outcome:
      "Client approved the model for ongoing operations. Ranked as top performer across sales and retention dashboards consistently. The model became a template for future team expansions.",
    hindsight:
      "I should have built the automated reporting from day one. The manual overhead during the pilot consumed hours that could have gone into coaching. When you're proving a concept, the data presentation matters as much as the data itself.",
    results: [
      { label: "Team Status", value: "1st", context: "first TSAR team for Talkmobile" },
      { label: "Performance", value: "Top", context: "ranked #1 across dashboards" },
      { label: "Ramp Time", value: "−30%", context: "for mentored new hires" },
    ],
  },
  {
    id: 7,
    slug: "doordash-acquisition",
    title: "210% of Target at DoorDash",
    description:
      "Data-driven enterprise acquisition strategy that delivered 210% of quota in Q1, built on a custom CRM dashboard and systematic prospecting methodology.",
    category: "Revenue",
    tags: ["Enterprise Sales", "CRM", "Pipeline Strategy"],
    year: "2025",
    insight:
      "The CRM dashboard wasn't a reporting tool. It was the strategy itself. When you can see the pipeline in real time, you stop guessing and start operating.",
    overview:
      "As Senior Associate at DoorDash, I owned full-cycle enterprise B2B SaaS sales. The challenge wasn't just hitting target. It was building a repeatable system that made outperformance the default, not the exception.",
    before: [
      "Pipeline visibility dependent on manual reporting",
      "Forecasting accuracy inconsistent across the team",
      "Junior sellers lacking structured coaching cadence",
    ],
    problem:
      "The acquisition team had strong individual performers but lacked systematic pipeline management. Forecasting was reactive, prospecting was intuition-driven, and there was no standardised way to identify at-risk deals or prioritise outreach.",
    constraints:
      "Had to work within existing CRM infrastructure with no greenfield tooling budget. Coaching responsibilities were additional to a full individual quota. Enterprise deal cycles meant results took weeks to materialise, requiring leading indicators for early validation.",
    process:
      "Built a custom CRM dashboard that surfaced deal velocity, pipeline gaps, and next-best-action recommendations. Established a weekly pipeline review cadence. Designed GTM initiatives targeting high-propensity accounts using data signals rather than spray-and-pray outreach.",
    solution:
      "A three-layer system: (1) Custom dashboard for real-time pipeline health, (2) Data-driven prospecting methodology that improved lead quality, (3) Structured coaching framework for junior sellers tied to specific pipeline metrics rather than generic advice.",
    tradeoffs:
      "Invested significant upfront time building the dashboard instead of selling, a bet that the system would compound. Chose depth over breadth in account targeting: fewer prospects, higher conviction, longer deal cycles but better win rates.",
    outcome:
      "Achieved 210% of target in Q1. The dashboard became a team-wide tool adopted by leadership for forecasting. Mentored junior sellers to higher quota attainment through structured pipeline coaching.",
    hindsight:
      "The dashboard could have shipped in half the time if I'd started with the three most important metrics instead of trying to build a comprehensive view. The team only used five fields consistently. Build for actual behaviour, not ideal behaviour.",
    results: [
      { label: "Quota Attainment", value: "210%", context: "Q1 2025, top performer" },
      { label: "Forecast Accuracy", value: "+35%", context: "team-wide after dashboard adoption" },
      { label: "Win Rate", value: "+20%", context: "data-driven targeting vs. prior method" },
    ],
  },
  {
    id: 8,
    slug: "emea-post-merger",
    title: "Scaling EMEA SaaS Sales Post-Merger",
    description:
      "Led GTM alignment for a distributed B2B SaaS team across EMEA after a company merger, standardising playbooks, cleaning CRM data, and resetting KPIs.",
    category: "Operations",
    tags: ["GTM", "Sales Playbooks", "Post-Merger"],
    year: "2021",
    insight:
      "Post-merger GTM is 80% CRM cleanup and process alignment, 20% actual selling. Most teams skip the 80% and wonder why the 20% doesn't work.",
    overview:
      "Regional Technology Services had just completed a merger, inheriting two sales teams with different CRMs, KPIs, and sales motions. I led the EMEA sales team through the transition, building a unified operating model.",
    before: [
      "Two separate CRM systems with duplicate and conflicting data",
      "No standardised sales playbook across merged teams",
      "KPIs from legacy orgs that no longer mapped to business goals",
    ],
    problem:
      "The merger combined two companies with fundamentally different sales cultures. One was relationship-driven with long cycles, the other was velocity-based. Neither's playbook worked for the combined entity, and the CRM was a mess of duplicate records and stale pipelines.",
    constraints:
      "Contract role with a fixed timeline. Had to deliver results within 6 months. Distributed team across multiple EMEA time zones. No budget for new tooling; had to work with existing CRM and standardise around it.",
    process:
      "Audited both CRM systems and identified 40% duplicate or stale records. Ran workshops with both legacy teams to map their sales motions and find common ground. Built a unified playbook that preserved the strengths of each approach. Reset KPIs to align with the merged company's revenue targets.",
    solution:
      "A unified sales playbook combining relationship-depth with velocity-efficiency. Clean CRM with standardised pipeline stages, deal scoring, and forecasting methodology. Weekly performance reviews with new KPI framework tied to post-merger revenue goals.",
    tradeoffs:
      "Chose to reset all pipeline data rather than attempt a merge, which lost some deal history but gained accuracy. Prioritised playbook adoption over perfection: shipped v1 with known gaps and iterated based on rep feedback.",
    outcome:
      "Maintained high forecast accuracy through the transition. Improved close rates through structured playbooks. Successfully onboarded both legacy teams onto a single operating model within the contract period.",
    hindsight:
      "I underestimated the cultural resistance. The relationship-driven team saw the playbook as reductive. I should have involved their top performers as co-authors from day one instead of presenting a finished framework. Buy-in scales faster than mandates.",
    results: [
      { label: "CRM Cleanup", value: "−40%", context: "duplicate/stale records removed" },
      { label: "Close Rate", value: "+15%", context: "post-playbook standardisation" },
      { label: "Forecast Accuracy", value: "High", context: "maintained through transition" },
    ],
  },
  {
    id: 9,
    slug: "kuna-retention",
    title: "Reducing CAC While Lifting Renewals",
    description:
      "Rebuilt Kuna's retention and expansion engine, increasing renewal rates by 25% and cutting customer acquisition cost by 10% through Agile sales methodology.",
    category: "Revenue",
    tags: ["Retention", "CAC Optimization", "Agile Sales"],
    year: "2020",
    insight:
      "Most companies treat retention as a defensive play. We turned it into the primary growth lever. Cheaper than acquisition and faster to compound.",
    overview:
      "Kuna was a crypto exchange platform facing high churn and rising acquisition costs. I led the sales and retention function, implementing Agile methodologies to systematically improve both sides of the unit economics equation.",
    before: [
      "Renewal rates declining quarter-over-quarter",
      "CAC increasing as paid channels saturated",
      "No structured retention strategy beyond reactive outreach",
    ],
    problem:
      "The business was spending more to acquire customers who were churning faster. Retention was reactive, triggered by cancellation requests rather than proactive engagement. Vendor costs for acquisition channels kept climbing with no corresponding improvement in customer quality.",
    constraints:
      "Regulated financial services environment with strict compliance requirements on customer communications. Small team with no dedicated retention specialists, so had to build capability within existing headcount. Limited budget for tooling or incentive programs.",
    process:
      "Mapped the full customer lifecycle to identify churn signals. Introduced Agile sprint methodology to the sales team with two-week cycles with clear retention and expansion targets. Renegotiated vendor contracts based on lead quality data rather than volume. Built feedback loops between retention conversations and product development.",
    solution:
      "A proactive retention system with early churn detection, structured save offers based on customer segment, and an expansion playbook for satisfied accounts. Agile cadence gave the team clear focus and rapid iteration on what worked.",
    tradeoffs:
      "Chose Agile methodology despite initial team resistance. The overhead of sprint planning felt heavy for a sales team, but the focus and accountability it created justified the investment. Prioritised vendor renegotiation over exploring new channels: lower risk, faster impact.",
    outcome:
      "Renewal rates increased by 25%. CAC reduced by 10% through vendor renegotiation and lead quality optimization. Forecasting accuracy improved significantly through Agile sprint reviews and structured pipeline health checks.",
    hindsight:
      "The Agile adoption would have been smoother if I'd started with a single team and let results sell the methodology, instead of rolling it out across the whole function at once. Proof beats persuasion, especially with sales teams who are naturally sceptical of process changes.",
    results: [
      { label: "Renewals", value: "+25%", context: "quarter-over-quarter improvement" },
      { label: "CAC Reduction", value: "−10%", context: "vendor renegotiation + lead quality" },
      { label: "Forecast Accuracy", value: "+20%", context: "via Agile sprint cadence" },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export interface System {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image?: string;
  overview: string;
  architecture: string;
  techStack: string[];
  highlights: string[];
  scale?: string;
}

export const systems: System[] = [
  {
    id: 1,
    slug: "ai-sales-lead-engines",
    title: "AI Sales & Lead Engines",
    description:
      "End-to-end pipelines that qualify leads, score intent, and route prospects to the right action: auto-reply, nurture, or human handoff.",
    category: "Sales",
    tags: ["AI Agents", "Lead Scoring", "Pipeline Automation"],
    overview:
      "A fully autonomous lead qualification system that ingests prospects from multiple channels, runs AI-powered intent detection, scores each lead using adaptive weighted factors, and routes them to the optimal next step. High-intent leads get immediate outreach. Low-confidence leads enter nurture sequences. Spam gets filtered silently.",
    architecture:
      "Webhook intake receives leads from forms, ads, and API integrations. Each lead passes through an AI intent classifier (GPT-4o-mini with Gemini fallback) that extracts buying signals, urgency, and budget indicators. A scoring engine applies six weighted factors with adaptive learning: the weights adjust automatically based on which signals actually convert. The decision engine routes leads to auto-reply, WhatsApp outreach, nurture drip, or human handoff based on score thresholds and A/B test variants.",
    techStack: ["n8n", "OpenAI", "Google Gemini", "PostgreSQL", "RabbitMQ", "WhatsApp API"],
    highlights: [
      "Adaptive scoring weights that self-adjust based on real conversion data",
      "A/B testing with epsilon-greedy variant selection and statistical significance detection",
      "Multi-channel intake: webhooks, forms, social media, and manual entry",
      "Automatic fallback from OpenAI to Gemini if primary model fails",
    ],
    scale: "10K+ leads/day",
  },
  {
    id: 2,
    slug: "social-crm",
    title: "Social CRM Systems",
    description:
      "Multi-platform intake from Facebook, Instagram, TikTok, and YouTube, funneled through AI intent detection into WhatsApp conversion sequences.",
    category: "CRM",
    tags: ["Multi-Platform", "WhatsApp API", "RabbitMQ"],
    image: "/systems/social-crm.webp",
    overview:
      "A 21-workflow event-driven system that monitors social media across four platforms, detects buying intent in comments and DMs (including Arabic dialect), and converts high-intent users into WhatsApp conversations. The system handles the full lifecycle: intake, AI analysis, scoring, automated replies, nurture sequences, human escalation, A/B testing, and revenue attribution.",
    architecture:
      "Platform-specific listeners (webhooks for Facebook/Instagram/WhatsApp, pollers for TikTok/YouTube) publish events to a RabbitMQ message bus. An AI intent detector processes each message with conversation history and lead memory context. A decision engine scores and routes: auto-reply on the source platform, redirect to WhatsApp, queue for human agent, or enter a 5-step nurture drip. Background workers handle rate limiting, health monitoring, daily reporting, backup management, and a revenue feedback loop that auto-adjusts scoring weights with a 2% learning rate.",
    techStack: ["n8n", "RabbitMQ", "PostgreSQL", "Redis", "OpenAI", "WhatsApp Cloud API", "Meta Graph API", "YouTube Data API"],
    highlights: [
      "21 interconnected micro-workflows with event-driven architecture",
      "Arabic/Egyptian dialect intent detection with buying signal extraction",
      "Anti-ban measures: randomized delays, message variation, warm-up protocols",
      "Self-learning revenue feedback loop that adjusts scoring weights from real conversions",
    ],
    scale: "100K+ messages/month",
  },
  {
    id: 3,
    slug: "competitor-intelligence",
    title: "Competitor Intelligence",
    description:
      "Automated scraping and AI analysis of competitor content. Extracts winning hooks, patterns, and generates actionable weekly strategies.",
    category: "Intelligence",
    tags: ["Web Scraping", "AI Analysis", "Content Strategy"],
    image: "/systems/competitor-intelligence.webp",
    overview:
      "An automated intelligence engine that scrapes competitor social media posts across six platforms, reverse-engineers why content performs well using AI, tracks engagement patterns over time, and generates weekly content strategies with ready-to-use hooks. Includes a scoreboard that ranks competitors by engagement and a hook library that catalogs winning opening lines.",
    architecture:
      "A scheduled scraper batches competitors in groups of three (rate limit safety), pulls recent posts via Apify actors, deduplicates by content hash, and stores raw data. An AI analyzer (GPT-4o-mini) processes each post to extract hook type, angle, structure, tone, viral prediction score, and replication difficulty. A strategy generator (GPT-4o) synthesizes patterns across all analyzed posts into a 7-day content plan with specific content ideas, recommended hooks, and identified content gaps. Results feed into a content engine webhook and a sales system webhook for messaging insights.",
    techStack: ["n8n", "Apify", "OpenAI GPT-4o", "Google Sheets"],
    highlights: [
      "Six-platform coverage: Facebook, Instagram, Twitter, LinkedIn, YouTube, TikTok",
      "Viral prediction scoring (0-100) with replication difficulty rating",
      "Auto-generated hook library ranked by engagement performance",
      "Cross-workflow integration: feeds content engine and sales system automatically",
    ],
  },
  {
    id: 4,
    slug: "ai-support-agent",
    title: "AI Support Agent",
    description:
      "Autonomous ticket triage, knowledge base retrieval, and AI-generated responses with human escalation paths and self-improving feedback loops.",
    category: "Support",
    tags: ["NLP", "Queue Systems", "Learning Loops"],
    image: "/systems/ai-support-agent.webp",
    overview:
      "A 7-workflow support automation system that triages incoming tickets, searches a knowledge base for relevant articles, generates contextual AI responses, validates them against quality standards, and either sends them automatically or escalates to human agents. A feedback loop ingests human corrections and uses them to improve future responses.",
    architecture:
      "Tickets arrive via IMAP email or API webhook. A queue controller normalizes and pushes them to a processing queue. Worker nodes pull tickets and run them through a multi-stage pipeline: category classification, urgency detection, KB similarity search, AI response generation with the retrieved context, and a validation step that checks response quality before sending. If confidence is low or the topic is flagged for human review, it routes to a Slack escalation channel. A learning loop captures human edits to AI responses and feeds them back as training examples. Hourly metric aggregation tracks resolution rates, response times, and escalation ratios.",
    techStack: ["n8n", "OpenAI", "IMAP", "Slack", "Queue API", "Knowledge Base API"],
    highlights: [
      "Multi-stage validation prevents low-quality responses from reaching customers",
      "Human resolution feedback creates a reinforcement learning loop",
      "Hourly metrics dashboard: resolution rate, avg response time, escalation ratio",
      "Graceful degradation: falls back to human queue if AI confidence is below threshold",
    ],
  },
  {
    id: 5,
    slug: "hr-recruitment-automation",
    title: "HR & Recruitment Automation",
    description:
      "CV assessment engines with dual-AI pipelines, automated scoring, candidate ranking, and recruiter notification workflows.",
    category: "HR",
    tags: ["Document Processing", "AI Scoring", "Google Workspace"],
    image: "/systems/hr-recruitment-automation.webp",
    overview:
      "An automated recruitment pipeline that watches Google Drive folders (each folder = a job role), extracts text from uploaded CVs, runs them through a dual-AI assessment (information extraction + role-fit scoring), auto-categorizes candidates as shortlisted/review/rejected, notifies recruiters of high-scoring candidates, and logs run statistics for tracking.",
    architecture:
      "A Google Drive trigger watches a parent folder weekly. Subfolders are discovered automatically, with each folder name used as the job role. CVs are downloaded, text-extracted, and deduplicated against a tracking sheet. Two parallel AI branches process each CV: an information extractor pulls structured contact info (name, email, GitHub, languages, certifications, years of experience), while a CV assessor scores the candidate 1-10 against the specific role using a strict startup-grade rubric. Results merge and auto-set status: 8+ shortlisted, 4-7 review, below 4 rejected. High-score candidates trigger recruiter email alerts.",
    techStack: ["n8n", "OpenRouter", "Google Drive", "Google Sheets", "Gmail", "LangChain"],
    highlights: [
      "Dual-AI pipeline: parallel information extraction and role-fit assessment",
      "Multi-folder support: each subfolder is automatically treated as a separate job role",
      "Strict scoring rubric with hard caps: no alignment = max 3, no hands-on = max 2",
      "Auto-deduplication prevents reprocessing of previously assessed CVs",
    ],
  },
  {
    id: 6,
    slug: "content-repurposing",
    title: "Content & Repurposing Engines",
    description:
      "One piece of content in, platform-specific outputs across LinkedIn, Twitter, and Instagram. Performance feedback loops learn what works.",
    category: "Content",
    tags: ["AI Generation", "Multi-Format", "Performance Learning"],
    image: "/systems/content-repurposing.webp",
    overview:
      "A content multiplication system that takes a single input (article, video transcript, tweet) and generates platform-optimized versions for LinkedIn, Twitter, and Instagram. Each output is tailored to the platform's format, tone, and audience expectations. A performance feedback loop analyzes which styles and angles perform best, then injects those learnings into future generation runs.",
    architecture:
      "Content arrives via webhook or manual trigger. A normalization step extracts the core message regardless of input format. An AI distillation phase identifies key ideas, hooks, and story elements. An angle generator produces five variations (controversial, educational, storytelling, contrarian, actionable). A platform switch routes each angle to platform-specific generators that respect character limits, hashtag conventions, and formatting norms. Outputs are stored in a Google Sheet. An hourly cron fetches performance data from posted content, runs AI analysis on what worked and why, and stores learnings that get injected into the next generation run.",
    techStack: ["n8n", "OpenAI", "Google Sheets", "Webhook API"],
    highlights: [
      "Five content angles generated per input: controversial, educational, storytelling, contrarian, actionable",
      "Platform-specific formatting: LinkedIn long-form, Twitter threads, Instagram captions",
      "Performance feedback loop: hourly analysis of posted content injects learnings into next run",
      "Extensible: email, blog, and video script outputs can be added as additional branches",
    ],
  },
];

export const systemCategories = ["All", "Sales", "CRM", "Intelligence", "Support", "HR", "Content"];

export function getSystemBySlug(slug: string): System | undefined {
  return systems.find((s) => s.slug === slug);
}

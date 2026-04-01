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
    image: "/systems/ai-sales-lead-engines.webp",
    overview:
      "A fully autonomous lead qualification system that ingests prospects from multiple channels, runs AI-powered intent detection, scores each lead using adaptive weighted factors, and routes them to the optimal next step. High-intent leads get immediate outreach. Low-confidence leads enter nurture sequences. Spam gets filtered silently.",
    architecture:
      "Webhook intake receives leads from forms, ads, and API integrations. Each lead passes through an AI intent classifier (GPT-4o-mini with Gemini fallback) that extracts buying signals, urgency, and budget indicators. A scoring engine applies six weighted factors with adaptive learning: the weights adjust automatically based on which signals actually convert. The decision engine routes leads to auto-reply, WhatsApp outreach, nurture drip, or human handoff based on score thresholds and A/B test variants.",
    techStack: [
      "n8n",
      "OpenAI",
      "Google Gemini",
      "PostgreSQL",
      "RabbitMQ",
      "WhatsApp API",
    ],
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
    techStack: [
      "n8n",
      "RabbitMQ",
      "PostgreSQL",
      "Redis",
      "OpenAI",
      "WhatsApp Cloud API",
      "Meta Graph API",
      "YouTube Data API",
    ],
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
    techStack: [
      "n8n",
      "OpenAI",
      "IMAP",
      "Slack",
      "Queue API",
      "Knowledge Base API",
    ],
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
    techStack: [
      "n8n",
      "OpenRouter",
      "Google Drive",
      "Google Sheets",
      "Gmail",
      "LangChain",
    ],
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
  {
    id: 7,
    slug: "omnichannel-ai-agent",
    title: "Omnichannel AI Agent",
    description:
      "Omnichannel AI-powered customer support and sales agent. Multi-agent routing, RAG knowledge base, BANT lead scoring, and self-tuning optimization.",
    category: "Omnichannel",
    tags: ["Multi-Agent AI", "Infobip", "RAG", "Supabase"],
    image: "/systems/plateform-ai-agent.webp",
    overview:
      "A 10-workflow omnichannel AI system built to handle customer support and sales across WhatsApp, SMS, and Web. Incoming messages go through rate limiting, deduplication, and language detection (AR/FR/EN/ES), then route to specialized AI agents: Sales Specialist (aggressive closing), Support Specialist (empathetic resolution), or Retention Specialist (loyalty focus). Each agent has access to real tools (order lookup, pricing API, CRM queries) and operates with 2-step reasoning, confidence scoring, and automatic handoff to human agents when confidence drops below 0.4.",
    architecture:
      "Messages arrive via Infobip webhook into WF-01 (rate limiting, dedup, priority scoring 1-5, regex + AI intent classification). WF-02 runs 5-way parallel data fetch: response cache check, RAG (8 chunks reranked to top 5), conversation memory (summarized older + verbatim recent 5), customer profile (orders, spend, VIP status), and feedback history. On cache hit, AI is skipped entirely. On miss, context merges and routes to the appropriate specialist agent. Agents execute real Supabase tool calls, generate responses with confidence scores, and post-process: low confidence triggers WF-05 (human handoff with AI-generated briefing), lead signals trigger WF-03 (BANT scoring + buying stage state machine). WF-08 auto-optimizes every 6 hours, adjusting LLM temperatures, handoff thresholds, and RAG chunk counts based on performance metrics. WF-10 tracks a 7-stage conversion funnel with A/B test evaluation.",
    techStack: ["n8n", "Infobip", "OpenAI GPT-4o-mini", "Supabase", "Slack", "WhatsApp API"],
    highlights: [
      "3 specialized AI agents (Sales/Support/Retention) with distinct prompts, temperatures, and goals",
      "5-way parallel data fetch with response caching (12-48h TTL based on confidence)",
      "Self-tuning optimizer adjusts thresholds every 6 hours based on real performance data",
      "7-stage conversion funnel with A/B testing and statistical significance detection",
      "BANT-based lead scoring with buying stage state machine and objection tracking",
    ],
    scale: "10K+ messages/day",
  },
  {
    id: 8,
    slug: "ai-blog-copywriter",
    title: "AI Blog Copywriter Engine",
    description:
      "Search-informed, feedback-driven bilingual content engine with three autonomous streams: SEO blogs, news insights, and performance-based rewrites.",
    category: "Content",
    tags: ["AI Writing", "SEO", "Bilingual", "GSC Tracking"],
    image: "/systems/ai-blog-copywriter.webp",
    overview:
      "A 71-node content production system that autonomously generates, scores, and publishes bilingual blog content (English and Arabic). Three independent streams run in parallel: an SEO pipeline that researches competitors, analyzes SERPs, and generates keyword-optimized articles; a news pipeline that monitors RSS feeds, filters for industry relevance, and produces opinionated analysis pieces; and a performance tracker that pulls Google Search Console data weekly to auto-rewrite underperforming titles and flag content that needs attention.",
    architecture:
      "Stream 1 (SEO): A Google Sheets trigger feeds topics with keywords and cluster metadata. The system fetches existing blog posts for internal linking context, runs SERP analysis (top 10 results, H2 extraction, People Also Ask, entity mapping, content gaps), then generates a full article with Claude Sonnet 4 using brand voice rules and competitor insights. The output goes through SEO enrichment (word count, keyword density, readability scoring), AI-powered internal link injection with cluster priority, and a calibrated quality gate. Posts scoring 75+ get auto-published with Google Indexing API pings; 65-74 get one AI rewrite attempt with scoring feedback; below 65 get rejected with a Telegram alert. Stream 2 (News): Hourly RSS monitoring with a strict 3-step AI relevance filter (content type, geography, industry). Relevant articles get transformed into opinionated analysis pieces and fed into the shared quality pipeline. Stream 3 (GSC Tracker): Weekly Google Search Console pull that matches analytics data to published posts and classifies signals: low CTR pages get auto-rewritten titles, striking distance keywords (position 8-15) get flagged for optimization, and dead content gets surfaced for review.",
    techStack: ["n8n", "Claude Sonnet 4", "GPT-4.1-mini", "Google Search Console", "Serper API", "Telegram"],
    highlights: [
      "Three autonomous content streams: SEO blogs, news insights, and performance rewrites",
      "SERP-informed generation: competitor analysis, entity extraction, content gap detection before writing",
      "Calibrated quality gate with auto-rewrite loop (75+ publish, 65-74 rewrite, below 65 reject)",
      "Bilingual output (English + Egyptian Arabic) with Google Indexing API auto-submission",
      "Weekly GSC performance tracking: auto-rewrites low CTR titles, flags striking distance keywords",
    ],
    scale: "20+ posts/month",
  },
];

export const systemCategories = [
  "All",
  "Sales",
  "CRM",
  "Intelligence",
  "Support",
  "HR",
  "Content",
  "Omnichannel",
];

export function getSystemBySlug(slug: string): System | undefined {
  return systems.find((s) => s.slug === slug);
}

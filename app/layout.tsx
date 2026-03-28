import type { Metadata } from "next";
import { Forum, Inter } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import "./globals.css";

const forum = Forum({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const SITE_URL = "https://isaac-nashaat.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Isaac Nashaat | Revenue Operator & Systems Builder",
    template: "%s | Isaac Nashaat",
  },
  description:
    "Revenue operator and systems builder with 7+ years in B2B SaaS. I sell, strategize, and build the autonomous systems that scale revenue. Founder of PlateForm.",
  keywords: [
    "revenue operator",
    "systems builder",
    "B2B SaaS sales",
    "automation",
    "AI agents",
    "GTM strategy",
    "PlateForm",
    "n8n workflows",
    "sales automation",
    "Isaac Nashaat",
  ],
  authors: [{ name: "Isaac Nashaat", url: SITE_URL }],
  creator: "Isaac Nashaat",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Isaac Nashaat",
    title: "Isaac Nashaat | Revenue Operator & Systems Builder",
    description:
      "Revenue operator and systems builder with 7+ years in B2B SaaS. I sell, strategize, and build the autonomous systems that scale revenue.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Isaac Nashaat - Revenue Operator & Systems Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isaac Nashaat | Revenue Operator & Systems Builder",
    description:
      "Revenue operator and systems builder with 7+ years in B2B SaaS. I sell, strategize, and build the autonomous systems that scale revenue.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Isaac Nashaat",
      jobTitle: "Revenue Operator & Systems Builder",
      url: SITE_URL,
      description:
        "Revenue operator and systems builder with 7+ years in B2B SaaS sales, GTM strategy, and building autonomous AI-powered business systems.",
      knowsAbout: [
        "B2B SaaS Sales",
        "Revenue Operations",
        "Sales Automation",
        "AI Agents",
        "GTM Strategy",
        "n8n Workflows",
        "CRM Systems",
        "Lead Scoring",
      ],
      sameAs: [
        "https://linkedin.com/in/isaac-nashaat",
        "https://www.behance.net/isaacnashat",
        "https://www.facebook.com/isaac.nashaat.2025/",
        "https://www.plateform.me",
      ],
      worksFor: {
        "@type": "Organization",
        name: "PlateForm",
        url: "https://www.plateform.me",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Isaac Nashaat",
      description:
        "Portfolio of Isaac Nashaat, a revenue operator and systems builder specializing in B2B SaaS sales, automation, and AI-powered business systems.",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profilepage`,
      url: SITE_URL,
      name: "Isaac Nashaat | Revenue Operator & Systems Builder",
      mainEntity: { "@id": `${SITE_URL}/#person` },
      isPartOf: { "@id": `${SITE_URL}/#website` },
    },
  ],
};

export default function RootLayout({
  children,
  casestudy,
}: Readonly<{
  children: React.ReactNode;
  casestudy: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${forum.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="grain" aria-hidden="true" />
        <MotionProvider>
          {children}
          {casestudy}
        </MotionProvider>
      </body>
    </html>
  );
}

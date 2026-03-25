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

export const metadata: Metadata = {
  title: "Isaac — Revenue & Growth Operator",
  description:
    "I turn products, funnels, and teams into revenue engines. Strategy, product, GTM, and execution — aligned to one outcome: growth.",
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
      <head>
        <script src="https://mcp.figma.com/mcp/html-to-design/capture.js" async />
      </head>
      <body>
        <div className="grain" aria-hidden="true" />
        <MotionProvider>
          {children}
          {casestudy}
        </MotionProvider>
      </body>
    </html>
  );
}

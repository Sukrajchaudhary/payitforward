import React from "react";
import { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { Noto_Sans_Devanagari } from "next/font/google";
import { Noto_Sans_JP } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/hooks/use-language";
import { Header } from "@/components/header";
import { Suspense } from "react";
import "./globals.css";
import TopNavbar from "@/components/TopNavbar";
import Link from "next/link";
import Script from "next/script";
import Fallback from "./fallback";

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
});

const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  display: "swap",
  variable: "--font-nepali",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-japanese",
});

export const metadata: Metadata = {
  title: "payitforwardjpn- Join Us to Make a Difference Through Volunteering",
  description:
    "We help you make a positive impact by connecting you with meaningful volunteering opportunities. Join us in supporting students, homeless people, and communities in Nepal and Japan. Together, we can create real change.",
  keywords:
    "volunteer, volunteering, social responsibility, help students, help homeless, Nepal, Japan, community service, volunteer opportunities, student support, homelessness, social impact, join us, make a difference",
  authors: [{ name: "payitforwardjpn" }],

  // Single favicon configuration
  icons: {
    icon: "/favicon.ico",
  },

  // Additional meta tags
  robots: {
    index: true,
    follow: true,
  },
  // Theme color for mobile browsers
  themeColor: "#3B82F6",
};

// Schema.org structured data
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "payit",
  alternateName: ["Pay It Forward JPN", "Payit", "Pay It Forward Nepal","nepal japan","help japan","help people"],
  url: "https://payitforwardjpn.com/",
  logo: "https://payitforwardjpn.com/logo.png",
  description:
    "We help you make a positive impact by connecting you with meaningful volunteering opportunities. Join us in supporting students, homeless people, and communities in Nepal and Japan.",
  foundingDate: "2024",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["English", "Nepali", "Japanese"],
  },
  areaServed: [
    {
      "@type": "Country",
      name: "Nepal",
    },
    {
      "@type": "Country",
      name: "Japan",
    },
  ],
  knowsAbout: [
    "Volunteering",
    "Community Service",
    "Student Support",
    "Homelessness Support",
    "Social Impact",
    "old people support"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Link rel="icon" href="/favicon.ico" />
        {/* Schema.org structured data */}
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body
        className={`${workSans.variable} ${notoSansDevanagari.variable} ${notoSansJP.variable} antialiased`}
      >
        <Suspense fallback={<Fallback />}>
          <LanguageProvider>
            <TopNavbar />
            <Header />
            {children}
          </LanguageProvider>
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}

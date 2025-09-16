import React from "react";
import { Metadata, Viewport } from "next";
import { Work_Sans } from "next/font/google";
import { Noto_Sans_Devanagari } from "next/font/google";
import { Noto_Sans_JP } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/hooks/use-language";
import { Header } from "@/components/header";
import { Suspense } from "react";
import "./globals.css";
import TopNavbar from "@/components/TopNavbar";
import Script from "next/script";
import Fallback from "./fallback";
import { Toaster } from "@/components/ui/sonner";

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
  title: {
    default: "Pay It Forward JPN - Join Us to Make a Difference Through Volunteering",
    template: "%s | Pay It Forward JPN"
  },
  description:
    "We help you make a positive impact by connecting you with meaningful volunteering opportunities. Join us in supporting students, homeless people, and communities in Nepal and Japan. Together, we can create real change.",
  keywords: [
    "volunteer", "volunteering", "social responsibility", "help students", "help homeless", 
    "Nepal", "Japan", "community service", "volunteer opportunities", "student support", 
    "homelessness", "social impact", "join us", "make a difference", "charity", "nonprofit",
    "community development", "education support", "elderly care", "environmental volunteering"
  ],
  authors: [{ name: "Pay It Forward JPN", url: "https://payitforwardjpn.com" }],
  creator: "Pay It Forward JPN",
  publisher: "Pay It Forward JPN",
  
  // Favicon configuration
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/fav.png", type: "image/png" }
    ],
    apple: "/fav.png",
    shortcut: "/favicon.ico"
  },

  // Open Graph metadata
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://payitforwardjpn.com",
    siteName: "Pay It Forward JPN",
    title: "Pay It Forward JPN - Join Us to Make a Difference Through Volunteering",
    description: "We help you make a positive impact by connecting you with meaningful volunteering opportunities. Join us in supporting students, homeless people, and communities in Nepal and Japan.",
    images: [
      {
        url: "/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "Pay It Forward JPN - Volunteering Organization",
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Pay It Forward JPN - Join Us to Make a Difference Through Volunteering",
    description: "We help you make a positive impact by connecting you with meaningful volunteering opportunities. Join us in supporting students, homeless people, and communities in Nepal and Japan.",
    images: ["/logo/logo.png"],
    creator: "@payitforwardjpn",
    site: "@payitforwardjpn",
  },

  // Additional meta tags
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
 


  // Additional metadata
  category: "Nonprofit Organization",
  classification: "Volunteering and Community Service",
  referrer: "origin-when-cross-origin",
  
  // App-specific metadata
  applicationName: "Pay It Forward JPN",
  generator: "Next.js",
  
  // Language and region
  alternates: {
    canonical: "https://payitforwardjpn.com",
    languages: {
      "en-US": "https://payitforwardjpn.com",
      "ja-JP": "https://payitforwardjpn.com/ja",
      "ne-NP": "https://payitforwardjpn.com/ne",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#3B82F6" },
    { media: "(prefers-color-scheme: dark)", color: "#1E40AF" }
  ],
};

// Schema.org structured data
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Pay It Forward JPN",
  alternateName: [
    "Pay It Forward JPN", 
    "Payit", 
    "Pay It Forward Nepal",
    "nepal japan",
    "help japan",
    "help people"
  ],
  url: "https://payitforwardjpn.com/",
  logo: "https://payitforwardjpn.com/logo/logo.png",
  image: "https://payitforwardjpn.com/logo/logo.png",
  description: "We help you make a positive impact by connecting you with meaningful volunteering opportunities. Join us in supporting students, homeless people, and communities in Nepal and Japan.",
  foundingDate: "2024",
  
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["English", "Nepali", "Japanese"],
    areaServed: ["Nepal", "Japan"],
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: ["Nepal", "Japan"]
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
    "Elderly Care",
    "Education Support",
    "Environmental Volunteering",
    "Community Development"
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Volunteering Opportunities",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Student Support Programs",
          description: "Educational support and mentorship for students in Nepal and Japan"
        }
      },
      {
        "@type": "Offer", 
        itemOffered: {
          "@type": "Service",
          name: "Homelessness Support",
          description: "Community support programs for homeless individuals"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service", 
          name: "Elderly Care Programs",
          description: "Support and care services for elderly community members"
        }
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
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
          <Toaster />
        </Suspense>
      </body>
    </html>
  );
}

import type React from "react"
import type { Metadata } from "next"
import { Work_Sans } from "next/font/google"
import { Noto_Sans_Devanagari } from "next/font/google"
import { Noto_Sans_JP } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/hooks/use-language"
import { Header } from "@/components/header"
import { Suspense } from "react"
import "./globals.css"
import TopNavbar from "@/components/TopNavbar"

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
})

const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  display: "swap",
  variable: "--font-nepali",
})

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-japanese",
})

export const metadata: Metadata = {
  title: "VolunteerHub - Make a Difference Through Volunteering",
  description:
    "Connect with meaningful volunteering opportunities and create positive change in your community and beyond. Support for English, Nepali, and Japanese.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${workSans.variable} ${notoSansDevanagari.variable} ${notoSansJP.variable} antialiased`}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <LanguageProvider>
            <TopNavbar/>
            <Header />
            {children}
          </LanguageProvider>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}

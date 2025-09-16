"use client"

import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/hooks/use-language"
import { Heart, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useSelectedLayoutSegment } from "next/navigation"
import { cn } from "@/lib/utils"

export function Header() {
  const { t, getFontClass } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const selectedSegment = useSelectedLayoutSegment()

  const navItems = [
    { key: "home" as const, href: "/", segment: null },
    { key: "opportunities" as const, href: "#opportunities", segment: null },
    { key: "about" as const, href: "#about", segment: null },
    { key: "contact" as const, href: "#contact", segment: null },
    { key: "volunteerApplication" as const, href: "/volunteer-application", segment: "volunteer-application" },
  ]

  const isActive = (item: typeof navItems[0]) => {
    if (item.segment === null) {
      // For home page - only show active when we're actually on home page
      if (item.href === "/") {
        return selectedSegment === null
      }
      // For hash links, don't show as active by default
      // They should only be active when the user is actually viewing that section
      return false
    }
    return selectedSegment === item.segment
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 10)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300 ${
        isScrolled ? "shadow-lg bg-white/98" : ""
      } ${getFontClass()}`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-18 lg:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity">
            <div className="relative h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 flex items-center justify-center rounded-full">
              <Image 
                src="https://res.cloudinary.com/dfzg6gkoh/image/upload/v1757175190/upialfsbqmhqmr3zb9bp.png" 
                fill 
                alt="Pay It Forward Logo" 
                unoptimized 
                loading="lazy"
                className="object-cover"
              />
            </div>
            <span className="hidden sm:block text-lg lg:text-xl font-bold text-gray-800 tracking-tight">
              Pay It Forward
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={cn(
                  "text-base  font-semibold transition-all duration-200 relative px-3 py-2",
                  isActive(item)
                    ? "text-green-600"
                    : "text-gray-600 hover:text-green-600"
                )}
              >
                {t(item.key)}
                {isActive(item) && (
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-green-600 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
              {t("findOpportunities")}
            </Button>
          </div>

          {/* Tablet/Mobile Actions */}
          <div className="flex lg:hidden items-center gap-3">
            <LanguageSwitcher />
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-green-50 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="h-5 w-5 text-gray-600" /> : <Menu className="h-5 w-5 text-gray-600" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-6 bg-white/98 backdrop-blur-sm">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className={cn(
                    "text-base font-semibold transition-all duration-200 py-3 px-4 mx-2 relative",
                    isActive(item)
                      ? "text-green-600"
                      : "text-gray-600 hover:text-green-600"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                  {isActive(item) && (
                    <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-green-600 rounded-full" />
                  )}
                </Link>
              ))}
              <div className="mt-4 mx-2">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
                  {t("findOpportunities")}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
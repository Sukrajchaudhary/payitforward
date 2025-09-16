"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { translations, type Language } from "@/lib/translations"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => any
  getFontClass: () => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage)
    }
    setIsLoaded(true)
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string) => {
    const keys = key.split(".")
    let value: any = translations[language]

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k]
      } else {
        // Fallback to English if key not found
        let fallback: any = translations.en
        for (const k of keys) {
          if (fallback && typeof fallback === "object" && k in fallback) {
            fallback = fallback[k]
          } else {
            return key // Return the key itself if not found
          }
        }
        return fallback
      }
    }

    return value
  }

  const getFontClass = () => {
    switch (language) {
      case "np":
        return "font-nepali"
      case "ja":
        return "font-japanese"
      default:
        return "font-sans"
    }
  }

  // Prevent hydration mismatch by not rendering until loaded
  if (!isLoaded) {
    return null
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t, getFontClass }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

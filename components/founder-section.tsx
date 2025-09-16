"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export function FounderSection() {
  const { t, getFontClass } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [animatedNumber, setAnimatedNumber] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate number from 0 to 15
          let current = 0
          const increment = 15 / 60 // 60 frames for 1 second animation
          const timer = setInterval(() => {
            current += increment
            if (current >= 15) {
              setAnimatedNumber(15)
              clearInterval(timer)
            } else {
              setAnimatedNumber(Math.floor(current))
            }
          }, 16) // ~60fps
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className={`py-6 sm:py-12 lg:py-16 px-3 sm:px-6 lg:px-8 rounded-t-3xl sm:rounded-t-4xl rounded-br-3xl sm:rounded-br-4xl bg-gradient-to-br from-emerald-50 to-green-50 transition-all duration-1000 ${getFontClass()}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 sm:mb-12 lg:mb-16">
          <h2 className={`text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {t("founder.title")}
          </h2>
          <div className={`flex items-center justify-center gap-2 sm:gap-4 text-emerald-600 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold">{animatedNumber}+</span>
              <span className="text-xs sm:text-sm lg:text-base xl:text-lg font-semibold">Years Experience</span>
            </div>
          </div>
        </div>

        <Card className={`overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-1000 p-2 sm:p-4 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative order-1 md:order-1">
                <div className="aspect-[4/3] sm:aspect-[3/2] md:aspect-[4/3] lg:aspect-[3/4] xl:aspect-square relative overflow-hidden p-1 sm:p-3">
                  <Image 
                    src="/images/ceo.png" 
                    alt={t("founder.name")} 
                    fill
                    className="object-cover rounded-t-xl sm:rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none rounded-br-none md:rounded-br-2xl hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    priority
                  />
                  {/* Subtle overlay for better text contrast if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent md:hidden"></div>
                </div>
              </div>

              {/* Content Section */}
              <div className="order-2 md:order-2 p-4 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-center bg-white">
                <div className={`mb-4 sm:mb-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                  <Quote className="h-6 w-6 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-emerald-600 mb-3 sm:mb-6 opacity-90" />
                  <blockquote className="text-base sm:text-xl lg:text-2xl xl:text-3xl text-gray-700 italic mb-3 sm:mb-6 leading-relaxed font-light">
                    "{t("founder.quote")}"
                  </blockquote>
                </div>

                <div className={`mb-3 sm:mb-6 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                  <h3 className="text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-1 sm:mb-3">
                    {t("founder.name")}
                  </h3>
                  <p className="text-emerald-600 font-semibold text-sm sm:text-lg lg:text-xl xl:text-2xl">
                    {t("founder.role")}
                  </p>
                </div>

                <p className={`text-gray-600 leading-relaxed text-sm sm:text-lg lg:text-xl mb-4 sm:mb-8 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                  {t("founder.bio")}
                </p>

                {/* Enhanced status section */}
                <div className={`mt-auto pt-4 sm:pt-6 border-t border-gray-200 transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                    <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm lg:text-base text-gray-600">
                      <span className="flex items-center">
                        <span className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-500 rounded-full mr-2 sm:mr-3 animate-pulse"></span>
                        <span className="font-medium">Available for consultation</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4 text-emerald-600">
                      <div className="text-center">
                        <div className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold">{animatedNumber}+</div>
                        <div className="text-xs sm:text-sm font-medium">Years</div>
                      </div>
                      <div className="text-center">
                        <div className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold">1000+</div>
                        <div className="text-xs sm:text-sm font-medium">Lives Impacted</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
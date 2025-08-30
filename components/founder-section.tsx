"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import Image from "next/image"

export function FounderSection() {
  const { t } = useLanguage()

  return (
    <section className="py-6 sm:py-10 px-2 rounded-t-4xl rounded-br-4xl bg-emerald-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            {t("founder.title")}
          </h2>
        </div>

        <Card className="overflow-hidden shadow-lg p-2">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2">
              {/* Image Section */}
              <div className="relative order-1 lg:order-1">
                <div className="aspect-[4/3] p-2 sm:aspect-[3/2] lg:aspect-[3/4] xl:aspect-square relative overflow-hidden">
                  <Image 
                    src="/images/ceo.png" 
                    alt={t("founder.name")} 
                    fill
                    className="object-cover rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none rounded-br-none lg:rounded-br-3xl"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  {/* Subtle overlay for better text contrast if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent lg:hidden"></div>
                </div>
              </div>

              {/* Content Section */}
              <div className="order-2 lg:order-2 p-4 sm:p-6 lg:p-8 xl:p-10 flex flex-col justify-center bg-white">
                <div className="mb-4 sm:mb-6">
                  <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-600 mb-3 sm:mb-4 opacity-80" />
                  <blockquote className="text-base sm:text-lg lg:text-xl text-gray-700 italic mb-3 sm:mb-4 leading-relaxed font-light">
                    "{t("founder.quote")}"
                  </blockquote>
                </div>

                <div className="mb-3 sm:mb-4">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                    {t("founder.name")}
                  </h3>
                  <p className="text-emerald-600 font-semibold text-sm sm:text-base lg:text-lg">
                    {t("founder.role")}
                  </p>
                </div>

                <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                  {t("founder.bio")}
                </p>

                {/* Optional: Add social links or contact info */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
                      Available for consultation
                    </span>
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
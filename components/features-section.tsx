"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/hooks/use-language"
import { Heart, Clock, Users } from "lucide-react"

export function FeaturesSection() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Heart,
      title: t("feature1Title"),
      description: t("feature1Description"),
    },
    {
      icon: Clock,
      title: t("feature2Title"),
      description: t("feature2Description"),
    },
    {
      icon: Users,
      title: t("feature3Title"),
      description: t("feature3Description"),
    },
  ]

  return (
    <section className="py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4 ">{t("featuresTitle")}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center border-0 shadow-sm hover:shadow-md transition-shadow bg-[#248406] text-white"
            >
              <CardContent className="pt-8 pb-6">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white mb-6">
                  <feature.icon className="h-8 w-8 text-[#248406]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-white/80 text-pretty">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/hooks/use-language"
import { 
  Heart, 
  Clock, 
  Users, 
  Award, 
  Globe, 
  Target, 
  BookOpen, 
  HandHeart 
} from "lucide-react"

export function FeaturesSection() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Heart,
      title: "Meaningful Impact",
      description: "Every hour you volunteer creates lasting change in communities worldwide.",
    },
    {
      icon: Clock,
      title: "Flexible Opportunities",
      description: "Find volunteer work that fits your schedule and interests.",
    },
    {
      icon: Users,
      title: "Global Community",
      description: "Join thousands of volunteers making a difference together.",
    },
    {
      icon: BookOpen, 
      title: "Personal Growth",
      description: "Gain unique experiences and develop new skills while helping others.",
    },
    {
      icon: Award,
      title: "Recognition & Rewards",
      description: "Earn certificates and acknowledgments for your valuable contributions.",
    },
    {
      icon: Globe,
      title: "Worldwide Reach",
      description: "Connect with causes across the globe and make an international impact.",
    },
    {
      icon: Target,
      title: "Skill-Based Matching",
      description: "Get matched with opportunities that align with your expertise and passions.",
    },
    {
      icon: HandHeart,
      title: "Compassionate Network",
      description: "Be part of a supportive community dedicated to positive change.",
    },
  ]

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">{t("featuresTitle")}</h2>
        </div>

        {/* Responsive Grid: 1 column on xs, 2 on sm, 3 on md, 4 on lg+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-[#248406] text-white hover:scale-105"
            >
              <CardContent className="pt-6 pb-6 px-4">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white mb-4">
                  <feature.icon className="h-7 w-7 text-[#248406]" />
                </div>
                <h3 className="text-lg font-semibold mb-3 leading-tight">{feature.title}</h3>
                <p className="text-white/90 text-sm text-pretty leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
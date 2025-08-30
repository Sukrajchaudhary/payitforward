"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"
import { ArrowRight, Play } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export function HeroSection() {
  const { t, getFontClass } = useLanguage()

  const heroSlides = [
    {
      title: t("heroTitle"),
      subtitle: t("heroSubtitle"),
      image: "/diverse-group-of-volunteers-working-together-in-co.png",
      alt: "Volunteers working together",
    },
    {
      title: t("heroTitle2") || "Join Our Global Community",
      subtitle: t("heroSubtitle2") || "Connect with like-minded individuals making a difference worldwide",
      image: "/volunteers-planting-trees.png",
      alt: "Volunteers planting trees",
    },
    {
      title: t("heroTitle3") || "Create Lasting Impact",
      subtitle: t("heroSubtitle3") || "Every small action contributes to meaningful change in communities",
      image: "/volunteers-helping-elderly-people.png",
      alt: "Volunteers helping elderly",
    },
  ]

  return (
    <section id="home" className={`relative py-20 lg:py-32 overflow-hidden ${getFontClass()}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="hero-swiper"
          >
            {heroSlides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="text-center">
                  {/* Hero Content */}
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6">{slide.title}</h1>

                  <p className="text-lg sm:text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto">
                    {slide.subtitle}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                    <Button size="lg" className="gap-2">
                      {t("findOpportunities")}
                      <ArrowRight className="h-4 w-4" />
                    </Button>

                    <Button variant="outline" size="lg" className="gap-2 bg-transparent">
                      <Play className="h-4 w-4" />
                      {t("learnMore")}
                    </Button>
                  </div>

                  {/* Hero Image */}
                  <div className="relative mx-auto max-w-4xl">
                    <img
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.alt}
                      className="w-full h-auto rounded-lg shadow-2xl"
                    />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-background/20 to-transparent" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

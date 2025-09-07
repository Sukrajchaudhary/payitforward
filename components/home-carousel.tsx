"use client"

import { useState, useRef } from "react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import { Heart, Users, Globe, Play, Pause, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const carouselSlides = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dfzg6gkoh/image/upload/v1757174735/rgxvmmdlui0yn8emyiqk.jpg",
    titleKey: "carousel.slide1.title",
    descriptionKey: "carousel.slide1.description",
    buttonKey: "carousel.slide1.button",
    icon: Globe,
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/dfzg6gkoh/image/upload/v1757174678/fdlknwqfytoobvw98efg.jpg",
    titleKey: "carousel.slide2.title",
    descriptionKey: "carousel.slide2.description",
    buttonKey: "carousel.slide2.button",
    icon: Heart,
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/dfzg6gkoh/image/upload/v1757174156/egrpkzghk8cibykjlrlq.jpg",
    titleKey: "carousel.slide3.title",
    descriptionKey: "carousel.slide3.description",
    buttonKey: "carousel.slide3.button",
    icon: Users,
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/dfzg6gkoh/image/upload/v1757174678/ynpbh3ze707c4o8kmky5.jpg",
    titleKey: "carousel.slide3.title",
    descriptionKey: "carousel.slide3.description",
    buttonKey: "carousel.slide3.button",
    icon: Users,
  },
  {
    id: 5,
    image: "https://res.cloudinary.com/dfzg6gkoh/image/upload/v1757174755/htpuwssyrf8sc1cn8suu.jpg",
    titleKey: "carousel.slide3.title",
    descriptionKey: "carousel.slide3.description",
    buttonKey: "carousel.slide3.button",
    icon: Users,
  },
]

export function HomeCarousel() {
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef(null)
  const { t, getFontClass } = useLanguage()

  const toggleAutoPlay = () => {
    if (swiperRef.current && swiperRef.current?.swiper) {
      if (isAutoPlaying) {
        swiperRef.current?.swiper.autoplay.stop()
      } else {
        swiperRef.current.swiper.autoplay.start()
      }
      setIsAutoPlaying(!isAutoPlaying)
    }
  }

  const handleSlideChange = (swiper:any) => {
    setActiveIndex(swiper.activeIndex)
  }

  return (
    <div className={`relative w-full mx-auto max-w-full ${getFontClass()}`}>
      <div className="relative w-full h-[55vh] md:h-[85vh] bg-muted overflow-hidden">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          effect="fade"
          fadeEffect={{
            crossFade: true
          }}
          speed={800}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{
            el: '.swiper-pagination-custom',
            clickable: true,
            bulletClass: 'swiper-pagination-bullet-custom',
            bulletActiveClass: 'swiper-pagination-bullet-active-custom',
          }}
          onSlideChange={handleSlideChange}
          className="w-full h-full"
          style={{
            '--swiper-theme-color': '#248406',
          }}
        >
          {carouselSlides.map((slide, index) => {
            const Icon = slide.icon
            return (
              <SwiperSlide key={slide.id}>
                <div className="relative w-full h-full">
                  <img
                    src={slide.image || "/placeholder.svg"}
                    alt={t(slide.titleKey)}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/40 flex items-center justify-center">
                    <div className="text-center text-white max-w-4xl px-4 sm:px-8">
                      <h1 className="text-xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-balance leading-tight drop-shadow-lg">
                        {t(slide.titleKey)}
                      </h1>
                      <p className="text-sm sm:text-xl leading-relaxed max-w-3xl mx-auto drop-shadow-md mb-8">
                        {t(slide.descriptionKey)}
                      </p>
                      <Button
                        size="lg"
                        className="bg-[#248406] hover:bg-[#1a6304] text-white border text-base px-6 py-3 sm:py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-xl group"
                      >
                        {t(slide.buttonKey)} 
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          className="swiper-button-prev-custom absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-md rounded-full h-10 w-10 sm:h-12 sm:w-12 transition-all duration-300 hover:scale-110 z-20 opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          className="swiper-button-next-custom absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-md rounded-full h-10 w-10 sm:h-12 sm:w-12 transition-all duration-300 hover:scale-110 z-20 opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
        </Button>

        {/* Auto-play Toggle */}
        <Button
          variant="outline"
          size="icon"
          className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-md rounded-full h-8 w-8 sm:h-10 sm:w-10 transition-all duration-300 z-20"
          onClick={toggleAutoPlay}
        >
          {isAutoPlaying ? <Pause className="h-3 w-3 sm:h-4 sm:w-4" /> : <Play className="h-3 w-3 sm:h-4 sm:w-4" />}
        </Button>

        {/* Custom Pagination */}
        <div className="swiper-pagination-custom absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20"></div>

        {/* Progress Bar */}
        {isAutoPlaying && (
          <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#248406] to-[#2ea043] transition-all duration-[5000ms] ease-linear z-20"
               style={{ width: `${((activeIndex + 1) / carouselSlides.length) * 100}%` }}>
          </div>
        )}
      </div>

      <style jsx>{`
        .swiper-pagination-bullet-custom {
          width: 24px !important;
          height: 4px !important;
          border-radius: 2px !important;
          background: rgba(255, 255, 255, 0.4) !important;
          opacity: 1 !important;
          transition: all 0.3s ease !important;
          cursor: pointer !important;
        }
        
        .swiper-pagination-bullet-custom:hover {
          background: rgba(255, 255, 255, 0.6) !important;
        }
        
        .swiper-pagination-bullet-active-custom {
          background: white !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3) !important;
        }

        @media (min-width: 640px) {
          .swiper-pagination-bullet-custom {
            width: 32px !important;
          }
        }

        .swiper-container:hover .swiper-button-prev-custom,
        .swiper-container:hover .swiper-button-next-custom {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  )
}
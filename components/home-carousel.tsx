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
    if (swiperRef.current && (swiperRef.current as any)?.swiper) {
      if (isAutoPlaying) {
        (swiperRef.current as any)?.swiper.autoplay.stop()
      } else {
        (swiperRef.current as any).swiper.autoplay.start()
      }
      setIsAutoPlaying(!isAutoPlaying)
    }
  }

  const handleSlideChange = (swiper:any) => {
    setActiveIndex(swiper.activeIndex)
  }

  return (
    <div className={`relative w-full mx-auto max-w-full ${getFontClass()}`}>
      <div className="relative w-full h-[55vh] md:h-[85vh] bg-muted overflow-hidden group">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          effect="fade"
          fadeEffect={{
            crossFade: true
          }}
          speed={1000}
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
          } as React.CSSProperties}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/50 flex items-center justify-center">
                    <div className="text-center text-white max-w-4xl px-4 sm:px-6 animate-fade-in">
                      <h1 className=" text-xl md:text-5xl font-semibold mb-2 text-balance leading-tight tracking-tight animate-slide-up">
                        <span className="bg-gradient-to-r from-white via-white to-gray-200 bg-clip-text text-transparent drop-shadow-lg">
                          {t(slide.titleKey)}
                        </span>
                      </h1>
                      <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8 font-medium text-gray-100 drop-shadow-md animate-slide-up-delay">
                        {t(slide.descriptionKey)}
                      </p>
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-[#248406] to-[#2ea043] hover:from-[#1a6304] hover:to-[#248406] text-white border-0 text-sm font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-all duration-500 hover:scale-110 shadow-xl hover:shadow-green-500/25 group backdrop-blur-sm animate-slide-up-delay-2"
                      >
                        <span className="flex items-center gap-2">
                          {t(slide.buttonKey)}
                          <ArrowRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                        </span>
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
          className="swiper-button-prev-custom absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-md rounded-full h-10 w-10 sm:h-12 sm:w-12 transition-all duration-500 ease-in-out hover:scale-110 z-50 opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6 transition-transform duration-300" />
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          className="swiper-button-next-custom absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-md rounded-full h-10 w-10 sm:h-12 sm:w-12 transition-all duration-500 ease-in-out hover:scale-110 z-50 opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6 transition-transform duration-300" />
        </Button>

        {/* Auto-play Toggle */}
        <Button
          variant="outline"
          size="icon"
          className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-md rounded-full h-8 w-8 sm:h-10 sm:w-10 transition-all duration-300 z-50"
          onClick={toggleAutoPlay}
        >
          {isAutoPlaying ? <Pause className="h-3 w-3 sm:h-4 sm:w-4" /> : <Play className="h-3 w-3 sm:h-4 sm:w-4" />}
        </Button>

        {/* Custom Pagination */}
        <div className="swiper-pagination-custom absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3 z-50"></div>
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

        /* Enhanced fade and slide animations */
        .animate-fade-in {
          animation: fadeIn 1.2s ease-out;
        }

        .animate-slide-up {
          animation: slideUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .animate-slide-up-delay {
          animation: slideUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s both;
        }

        .animate-slide-up-delay-2 {
          animation: slideUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s both;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* Enhanced Swiper fade effect */
        .swiper-slide-active .animate-fade-in,
        .swiper-slide-active .animate-slide-up,
        .swiper-slide-active .animate-slide-up-delay,
        .swiper-slide-active .animate-slide-up-delay-2 {
          animation-play-state: running;
        }

        /* Text rendering improvements */
        h1 {
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Enhanced button hover effects */
        .group:hover .group-hover\\:translate-x-1 {
          transform: translateX(4px) scale(1.1);
        }

        /* Gradient text enhancement */
        .bg-clip-text {
          -webkit-background-clip: text;
          background-clip: text;
        }

        /* Improved shadow effects */
        .drop-shadow-2xl {
          filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.25));
        }
      `}</style>
    </div>
  )
}
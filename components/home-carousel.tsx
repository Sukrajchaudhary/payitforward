"use client"

import { useState, useRef } from "react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import { Heart, Users, Globe, Play, Pause, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio" // Make sure to import AspectRatio

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

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex)
  }

  return (
    <div className={`relative w-full mx-auto max-w-full ${getFontClass()}`}>
      <div className="relative w-full h-[35vh]  md:h-[80vh] bg-muted overflow-hidden group">
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
            return (
              <SwiperSlide key={slide.id}>
                <div className="relative aspect-square h-full w-full">
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt={t(slide.titleKey)}
                    fill
                    className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                    priority={index === 0}
                    sizes="100vw"
                  />
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          className="swiper-button-prev-custom absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-md rounded-full h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 transition-all duration-500 ease-in-out hover:scale-110 z-10 opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6 transition-transform duration-300" />
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          className="swiper-button-next-custom absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-md rounded-full h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 transition-all duration-500 ease-in-out hover:scale-110 z-10 opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6 transition-transform duration-300" />
        </Button>

       

        {/* Custom Pagination */}
        <div className="swiper-pagination-custom absolute bottom-2 sm:bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex space-x-1 sm:space-x-2 md:space-x-3 z-50"></div>
      </div>

     
    </div>
  )
}
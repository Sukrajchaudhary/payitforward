"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"

export interface CardSliderItem {
  id: string | number
  title: string
  description?: string
  image?: string
  date?: string
  author?: string
  category?: string
  location?: string
  participants?: number
  status?: string
  href?: string
  buttonText?: string
  metadata?: Array<{
    icon: React.ReactNode
    text: string
  }>
}

interface CardSliderProps {
  items: CardSliderItem[]
  title?: string
  subtitle?: string
  showNavigation?: boolean
  autoPlay?: boolean
  className?: string
  cardClassName?: string
  itemsPerView?: {
    mobile?: number
    tablet?: number
    desktop?: number
  }
  renderCard?: (item: CardSliderItem) => React.ReactNode
}

export function CardSlider({
  items,
  title,
  subtitle,
  showNavigation = true,
  autoPlay = false,
  className,
  cardClassName,
  itemsPerView = {
    mobile: 1,
    tablet: 3,
    desktop: 4,
  },
  renderCard,
}: CardSliderProps) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const defaultRenderCard = (item: CardSliderItem) => (
    <Card className={cn("overflow-hidden rounded-2xl border border-gray-200 bg-white  h-full flex flex-col", cardClassName)}>
      {item.image && (
        <div className="h-48 w-full overflow-hidden p-2">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <CardHeader className="px-6  pb-1 flex-shrink-0">
        {item.status && (
          <div className="flex justify-between items-start mb-2">
            <Badge variant={item.status === "Completed" ? "default" : "secondary"} className="text-xs font-medium">
              {item.status}
            </Badge>
          </div>
        )}
        
        {item.metadata && (
          <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
            {item.metadata.map((meta, index) => (
              <div key={index} className="flex items-center gap-1">
                {meta.icon}
                <span className="font-medium">{meta.text}</span>
              </div>
            ))}
          </div>
        )}
        
        <CardTitle className="text-lg font-bold text-gray-900 hover:text-emerald-600 transition-colors leading-tight">
          {item.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="px-6 pb-2 flex-grow flex flex-col">
        {item.description && (
          <p className="text-sm text-gray-600 mb-3 leading-relaxed flex-grow overflow-hidden" style={{
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
          }}>
            {item.description}
          </p>
        )}
        
        {item.buttonText && (
          <Button
            variant="outline"
            className="w-full border-emerald-600 bg-emerald-600 text-white transition-all hover:bg-emerald-700 font-semibold py-2.5 mt-auto"
            onClick={() => item.href && window.open(item.href, '_blank')}
          >
            {item.buttonText}
          </Button>
        )}
      </CardContent>
    </Card>
  )

  return (
    <section className={cn("py-14", className)}>
      <div className="mx-auto px-4 ">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>}
            {subtitle && <p className="text-base text-justify px-2 text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
          </div>
        )}

        <div className="relative group">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 pb-4 px-2">
              {items.map((item, index) => (
                <CarouselItem
                  key={item.id}
                  className={cn(
                    "pl-4",
                    "basis-full",
                    "sm:basis-1/2",
                    "md:basis-1/3",
                    "lg:basis-1/4"
                  )}
                >
                  {renderCard ? renderCard(item) : defaultRenderCard(item)}
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {showNavigation && (
              <>
                <CarouselPrevious className="hidden lg:flex -left-12 bg-white shadow-lg border-gray-200 hover:bg-gray-50 hover:shadow-xl transition-all duration-200 opacity-0 group-hover:opacity-100">
                  <ChevronLeft className="h-4 w-4" />
                </CarouselPrevious>
                <CarouselNext className="hidden lg:flex -right-12 bg-white shadow-lg border-gray-200 hover:bg-gray-50 hover:shadow-xl transition-all duration-200 opacity-0 group-hover:opacity-100">
                  <ChevronRight className="h-4 w-4" />
                </CarouselNext>
              </>
            )}
          </Carousel>

          {/* Dots Navigation */}
          {showNavigation && count > 1 && (
            <div className="flex justify-center mt-8">
              <div className="flex items-center gap-2">
                {Array.from({ length: count }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-200 cursor-pointer",
                      current === index + 1
                        ? "bg-green-600 w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    )}
                  />
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  )
}

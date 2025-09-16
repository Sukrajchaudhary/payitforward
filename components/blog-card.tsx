"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User } from "lucide-react"
import Link from "next/link"

interface BlogCardProps {
  id: string | number
  title: string
  description: string
  author: string
  date: string
  image: string
  category: string
  href: string
}

export function BlogCard({
  id,
  title,
  description,
  author,
  date,
  image,
  category,
  href
}: BlogCardProps) {
  return (
    <Card className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      {image && (
        <div className="h-48 w-full overflow-hidden p-2">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <CardHeader className="px-6 pt-2 pb-1 flex-shrink-0">
        <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            <span className="font-medium">{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span className="font-medium">{new Date(date).toLocaleDateString()}</span>
          </div>
        </div>
        
        <CardTitle className="text-lg font-bold text-gray-900 hover:text-emerald-600 transition-colors leading-tight">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="px-6 pb-3 flex-grow flex flex-col">
        <p className="text-sm text-gray-600 mb-3 leading-relaxed flex-grow overflow-hidden" style={{
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
        }}>
          {description}
        </p>
        
        <Link href={href}>
          <Button
            variant="outline"
            className="w-full border-emerald-600 bg-emerald-600 text-white transition-all hover:bg-emerald-700 font-semibold py-2.5 mt-auto"
          >
            Read More
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}

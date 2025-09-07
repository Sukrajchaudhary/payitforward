"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import Link from "next/link"
import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    title: "Building Schools in Rural Nepal",
    excerpt: "Our volunteers helped construct a new school building that will serve 200+ children in a remote village.",
    author: "Saroj Raj Dhamala",
    date: "2024-01-15",
    image: "https://res.cloudinary.com/dfzg6gkoh/image/upload/v1757174679/mxhyug2gvglwmjmjjjt0.jpg",
    category: "Education",
  },
  {
    id: 2,
    title: "Ocean Cleanup Success Story",
    excerpt: "Together with local communities, we removed over 2 tons of plastic waste from coastal areas.",
    author: "Saroj Raj Dhamala",
    date: "2024-01-10",
    image: "https://res.cloudinary.com/dfzg6gkoh/image/upload/v1757174766/kssnbr2mljbbs5sj3bbx.jpg",
    category: "Environment",
  },
  {
    id: 3,
    title: "Teaching Digital Skills to Seniors",
    excerpt: "Our tech volunteers helped 150+ elderly residents learn to use smartphones and connect with family.",
    author: "Saroj Raj Dhamala",
    date: "2024-01-05",
    image: "https://res.cloudinary.com/dfzg6gkoh/image/upload/v1757174156/udriuphi1pwb1dtpziy4.jpg",
    category: "Community",
  },
]

export function BlogsSection() {
  const { t } = useLanguage()

  return (
    <section className="mt-4">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t("blogs.title")}</h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">{t("blogs.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video p-2 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={500}
                  height={280}
                  className="w-full h-full object-cover rounded-3xl hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="px-6 pt-1 pb-0">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 hover:text-emerald-600 transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-1">
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                <Link href={`/blog/${post.id}`}>
                  <Button
                    variant="outline"
                    className="w-full  border-emerald-600 bg-emerald-600 text-white transition-all"
                  >
                    {t("blogs.readMore")} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

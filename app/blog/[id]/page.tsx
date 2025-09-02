"use client"

import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, ArrowLeft, Share2, Heart, MessageCircle } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/hooks/use-language"

const blogPosts = [
  {
    id: "1",
    title: "Building Schools in Rural Nepal",
    content: `
      <p>In the remote mountains of Nepal, education remains a challenge for many children. Our recent project focused on constructing a new school building that will serve over 200 children in the village of Gorkha.</p>
      
      <p>The project began six months ago when local community leaders reached out to our organization. The existing school was a small, deteriorating structure that could barely accommodate 50 students. With the growing population and increased awareness about the importance of education, the need for a larger, more robust facility became urgent.</p>
      
      <p>Our team of 25 volunteers, including architects, engineers, and construction workers, worked alongside local craftsmen and community members. The collaborative effort not only ensured the building met international safety standards but also provided valuable skills training to local workers.</p>
      
      <p>The new school features:</p>
      <ul>
        <li>8 spacious classrooms with proper ventilation and lighting</li>
        <li>A library and computer lab</li>
        <li>Clean water facilities and sanitation</li>
        <li>Solar panels for sustainable energy</li>
        <li>A playground and sports facilities</li>
      </ul>
      
      <p>The impact has been immediate and profound. Enrollment has increased by 150%, and for the first time, girls' attendance has reached 60% - a significant milestone in this traditional community.</p>
    `,
    author: "Maria Rodriguez",
    date: "2024-01-15",
    image: "/school-construction-in-nepal.png",
    category: "Education",
    readTime: "5 min read",
    likes: 124,
    comments: 18,
  },
  {
    id: "2",
    title: "Ocean Cleanup Success Story",
    content: `
      <p>Our coastal cleanup initiative has achieved remarkable results, removing over 2 tons of plastic waste from pristine beaches and marine environments across three countries.</p>
      
      <p>The project, spanning six months, involved partnerships with local environmental groups, government agencies, and hundreds of dedicated volunteers. What started as a small beach cleanup has evolved into a comprehensive marine conservation program.</p>
      
      <p>Key achievements include:</p>
      <ul>
        <li>2.3 tons of plastic waste removed</li>
        <li>15 beaches restored to pristine condition</li>
        <li>500+ volunteers trained in marine conservation</li>
        <li>3 permanent recycling stations established</li>
        <li>Educational programs reaching 2,000+ students</li>
      </ul>
      
      <p>The most rewarding aspect has been witnessing the transformation in local communities. Fishermen report seeing more marine life, and tourism has increased as beaches become cleaner and more attractive.</p>
    `,
    author: "Saroj Raj Dhamala",
    date: "2024-01-10",
    image: "/ocean-cleanup-volunteers.png",
    category: "Environment",
    readTime: "4 min read",
    likes: 89,
    comments: 12,
  },
  {
    id: "3",
    title: "Teaching Digital Skills to Seniors",
    content: `
      <p>In an increasingly digital world, our senior citizens often feel left behind. Our digital literacy program has successfully bridged this gap, helping over 150 elderly residents master essential technology skills.</p>
      
      <p>The program was designed with patience and empathy at its core. Our volunteers, many of whom are young professionals and students, worked one-on-one with seniors to ensure personalized learning experiences.</p>
      
      <p>Program highlights:</p>
      <ul>
        <li>Basic smartphone and tablet operation</li>
        <li>Video calling with family members</li>
        <li>Online banking and shopping safety</li>
        <li>Social media basics and digital safety</li>
        <li>Health apps and telemedicine platforms</li>
      </ul>
      
      <p>The emotional impact has been profound. Many participants have reconnected with distant family members, while others have discovered new hobbies and interests online. The confidence boost has been remarkable to witness.</p>
    `,
    author: "Saroj Raj Dhamala",
    date: "2024-01-05",
    image: "/teaching-seniors-technology.png",
    category: "Community",
    readTime: "3 min read",
    likes: 156,
    comments: 24,
  },
]

export default function BlogDetailPage() {
  const params = useParams()
  const { t } = useLanguage()
  const post = blogPosts.find((p) => p.id === params.id)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog post not found</h1>
          <Link href="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with back button */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero Image */}
        <div className="aspect-video mb-8 rounded-lg overflow-hidden">
          <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
        </div>

        {/* Article Header */}
        <div className="mb-8">
          <Badge variant="secondary" className="mb-4">
            {post.category}
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-balance">{post.title}</h1>

          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src={`/abstract-geometric-shapes.png?height=40&width=40&query=${post.author}`} />
                <AvatarFallback>
                  {post.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-gray-900">{post.author}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4 mr-1" />
                {post.likes}
              </Button>
              <Button variant="outline" size="sm">
                <MessageCircle className="h-4 w-4 mr-1" />
                {post.comments}
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <Card>
          <CardContent className="p-8">
            <div
              className="prose prose-lg max-w-none prose-emerald"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Card className="bg-emerald-50 border-emerald-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">Inspired to Make a Difference?</h3>
              <p className="text-emerald-700 mb-6">
                Join our community of volunteers and help create positive change in the world.
              </p>
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Join Our Mission
              </Button>
            </CardContent>
          </Card>
        </div>
      </article>
    </div>
  )
}

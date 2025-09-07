"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/hooks/use-language"
import { Star, Quote } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

export function TestimonialsSection() {
  const { t } = useLanguage()

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Environmental Volunteer",
      content:
        "Volunteering through this platform has been life-changing. I've met amazing people and made a real difference in my community. The support and guidance provided is exceptional.",
      avatar: "/smiling-woman-volunteer-portrait.png",
      rating: 5,
      location: "Tokyo, Japan",
    },
    {
      id: 2,
      name: "राम बहादुर",
      role: "Community Organizer",
      content: "यो प्लेटफर्मले मलाई मेरो समुदायमा सेवा गर्ने अवसर दिएको छ। यहाँ धेरै राम्रा कार्यक्रमहरू छन्। सबैलाई सिफारिस गर्छु।",
      avatar: "/smiling-nepali-man-volunteer-portrait.png",
      rating: 5,
      location: "Kathmandu, Nepal",
    },
    {
      id: 3,
      name: "田中太郎",
      role: "Education Volunteer",
      content: "このプラットフォームを通じて、多くの子どもたちに教育の機会を提供できました。とても充実した経験です。継続して参加したいと思います。",
      avatar: "/smiling-japanese-man-volunteer-portrait.png",
      rating: 5,
      location: "Osaka, Japan",
    },
    {
      id: 4,
      name: "Maria Rodriguez",
      role: "Healthcare Volunteer",
      content: "The healthcare support program has been incredibly rewarding. Working with underserved communities has given me a new perspective on life and service.",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      location: "Yokohama, Japan",
    },
    {
      id: 5,
      name: "David Chen",
      role: "Digital Skills Mentor",
      content: "Teaching digital skills to seniors has been one of the most fulfilling experiences. Seeing their confidence grow as they learn new technologies is priceless.",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      location: "Kyoto, Japan",
    },
    {
      id: 6,
      name: "Priya Sharma",
      role: "Student Support Volunteer",
      content: "Helping students with their education has been amazing. The impact we can make on young lives through this platform is truly inspiring.",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      location: "Pokhara, Nepal",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-emerald-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("testimonialsTitle")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our amazing volunteers who are making a difference in communities across Nepal and Japan
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <CardContent className="p-6 lg:p-8">
                {/* Quote Icon */}
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-emerald-100 rounded-full group-hover:bg-emerald-200 transition-colors duration-300">
                    <Quote className="h-6 w-6 text-emerald-600" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-5 w-5 fill-yellow-400 text-yellow-400 mx-0.5" 
                    />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-gray-700 mb-8 text-center leading-relaxed text-base lg:text-lg">
                  "{testimonial.content}"
                </blockquote>

                {/* Author Info */}
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-16 w-16 mb-4 ring-4 ring-emerald-100 group-hover:ring-emerald-200 transition-all duration-300">
                    <AvatarImage 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-emerald-100 text-emerald-700 font-semibold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-emerald-600 font-medium text-sm mb-1">
                      {testimonial.role}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-lg border border-white/20">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Ready to Share Your Story?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join our community of volunteers and become part of the change. Your experience could inspire others to make a difference.
            </p>
            <Link href="/join-community">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer">
                Join Our Community
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}

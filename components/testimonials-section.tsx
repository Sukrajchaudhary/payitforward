"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/hooks/use-language"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const { t } = useLanguage()

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Environmental Volunteer",
      content:
        "Volunteering through this platform has been life-changing. I've met amazing people and made a real difference in my community.",
      avatar: "/smiling-woman-volunteer-portrait.png",
      rating: 5,
    },
    {
      id: 2,
      name: "राम बहादुर",
      role: "Community Organizer",
      content: "यो प्लेटफर्मले मलाई मेरो समुदायमा सेवा गर्ने अवसर दिएको छ। यहाँ धेरै राम्रा कार्यक्रमहरू छन्।",
      avatar: "/smiling-nepali-man-volunteer-portrait.png",
      rating: 5,
    },
    {
      id: 3,
      name: "田中太郎",
      role: "Education Volunteer",
      content: "このプラットフォームを通じて、多くの子どもたちに教育の機会を提供できました。とても充実した経験です。",
      avatar: "/smiling-japanese-man-volunteer-portrait.png",
      rating: 5,
    },
  ]

  return (
    <section className="py-10">
      <div className="container mx-auto px-4 ">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">{t("testimonialsTitle")}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-0 shadow-sm">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 text-pretty">"{testimonial.content}"</p>

                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

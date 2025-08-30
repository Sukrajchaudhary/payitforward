"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/hooks/use-language"
import { MapPin, Calendar, Users } from "lucide-react"

export function OpportunitiesSection() {
  const { t } = useLanguage()

  const opportunities = [
    {
      id: 1,
      title: "Community Garden Project",
      category: t("environment"),
      location: "Kathmandu, Nepal",
      date: "March 15, 2025",
      participants: 12,
      image: "/community-garden-with-volunteers-planting-vegetabl.png",
      description: "Help create a sustainable community garden that will provide fresh produce for local families.",
    },
    {
      id: 2,
      title: "English Teaching Program",
      category: t("education"),
      location: "Tokyo, Japan",
      date: "March 20, 2025",
      participants: 8,
      image: "/teacher-helping-children-learn-in-classroom.png",
      description: "Teach English to children and adults in underserved communities.",
    },
    {
      id: 3,
      title: "Healthcare Support Initiative",
      category: t("healthcare"),
      location: "Remote/Online",
      date: "Ongoing",
      participants: 25,
      image: "/healthcare-volunteers-helping-patients.png",
      description: "Provide administrative support and patient care assistance to healthcare facilities.",
    },
  ]

  return (
    <section id="opportunities" className="py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-2">{t("opportunitiesTitle")}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {opportunities.map((opportunity) => (
            <Card key={opportunity.id} className="overflow-hidden hover:shadow-lg transition-shadow p-2">
              <div className="relative p-2">
                <img
                  src={opportunity.image || "/placeholder.svg"}
                  alt={opportunity.title}
                  className="w-full rounded-3xl h-48 object-cover"
                />
                <Badge className="absolute top-3 left-3 bg-primary">{opportunity.category}</Badge>
              </div>

              <CardHeader>
                <h3 className="text-xl font-semibold text-balance">{opportunity.title}</h3>
                <p className="text-muted-foreground text-pretty">{opportunity.description}</p>
              </CardHeader>

              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {opportunity.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {opportunity.date}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  {opportunity.participants} volunteers needed
                </div>
              </CardContent>

              <CardFooter>
                <Button className="w-full">{t("applyNow")}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

       
      </div>
    </section>
  )
}

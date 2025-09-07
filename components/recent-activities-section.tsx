"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

const activities = [
  {
    id: 1,
    title: "Community Garden Project",
    location: "Tokyo, Japan",
    date: "2024-01-20",
    participants: 25,
    image: "https://res.cloudinary.com/dfzg6gkoh/image/upload/v1757174157/t8agquzbkufsmxxgpsr1.jpg",
    status: "Completed",
    description: "Volunteers created a beautiful community garden in downtown Tokyo.",
  },
  {
    id: 2,
    title: "Beach Cleanup Drive",
    location: "Kathmandu, Nepal",
    date: "2024-01-18",
    participants: 40,
    image: "https://res.cloudinary.com/dfzg6gkoh/image/upload/v1757174156/mflcaacdxpkjma1jvphp.jpg",
    status: "Completed",
    description: "Removed 500kg of waste from local beaches and waterways.",
  },
  {
    id: 3,
    title: "Literacy Program",
    location: "New York, USA",
    date: "2024-01-25",
    participants: 15,
    image: "https://res.cloudinary.com/dfzg6gkoh/image/upload/v1757174708/i4rn89fnevemgdibs82l.jpg",
    status: "Ongoing",
    description: "Teaching reading and writing skills to adult learners.",
  },
  {
    id: 4,
    title: "Food Distribution",
    location: "London, UK",
    date: "2024-01-22",
    participants: 30,
    image: "https://res.cloudinary.com/dfzg6gkoh/image/upload/v1757174679/mxhyug2gvglwmjmjjjt0.jpg",
    status: "Completed",
    description: "Distributed meals to 200+ families in need.",
  },
]

export function RecentActivitiesSection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 px-4">
      <div className=" mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t("recentActivities")?.title || "Recent Activities"}
          </h2>
          <p className="text-balance text-gray-600">
            {t("recentActivities")?.subtitle || "See what our volunteers have been up to lately"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {activities.map((activity) => (
            <Card key={activity.id} className="overflow-hidden p-2 hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.title}
                  className="w-full h-full rounded-2xl object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant={activity.status === "Completed" ? "default" : "secondary"}>{activity.status}</Badge>
                </div>
                <CardTitle className="text-lg">{activity.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {activity.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(activity.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {activity.participants} volunteers
                  </div>
                </div>
                <p className="text-sm text-gray-600">{activity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

     
      </div>
    </section>
  )
}

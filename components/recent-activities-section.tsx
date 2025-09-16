"use client"

import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { CardSlider, type CardSliderItem } from "@/components/ui/card-slider"

const activities: CardSliderItem[] = [
  {
    id: 1,
    title: "Community Garden Project",
    location: "Tokyo, Japan",
    date: "2024-01-20",
    participants: 25,
    image: "https://res.cloudinary.com/dfzg6gkoh/image/upload/v1757174157/t8agquzbkufsmxxgpsr1.jpg",
    status: "Completed",
    description: "Volunteers created a beautiful community garden in downtown Tokyo.",
    metadata: [
      { icon: <MapPin className="h-4 w-4" />, text: "Tokyo, Japan" },
      { icon: <Calendar className="h-4 w-4" />, text: new Date("2024-01-20").toLocaleDateString() },
      { icon: <Users className="h-4 w-4" />, text: "25 volunteers" },
    ],
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
    metadata: [
      { icon: <MapPin className="h-4 w-4" />, text: "Kathmandu, Nepal" },
      { icon: <Calendar className="h-4 w-4" />, text: new Date("2024-01-18").toLocaleDateString() },
      { icon: <Users className="h-4 w-4" />, text: "40 volunteers" },
    ],
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
    metadata: [
      { icon: <MapPin className="h-4 w-4" />, text: "New York, USA" },
      { icon: <Calendar className="h-4 w-4" />, text: new Date("2024-01-25").toLocaleDateString() },
      { icon: <Users className="h-4 w-4" />, text: "15 volunteers" },
    ],
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
    metadata: [
      { icon: <MapPin className="h-4 w-4" />, text: "London, UK" },
      { icon: <Calendar className="h-4 w-4" />, text: new Date("2024-01-22").toLocaleDateString() },
      { icon: <Users className="h-4 w-4" />, text: "30 volunteers" },
    ],
  },
  {
    id: 5,
    title: "Healthcare Support",
    location: "Osaka, Japan",
    date: "2024-01-28",
    participants: 20,
    image: "https://res.cloudinary.com/dfzg6gkoh/image/upload/v1757174156/udriuphi1pwb1dtpziy4.jpg",
    status: "Ongoing",
    description: "Providing free medical checkups to elderly residents.",
    metadata: [
      { icon: <MapPin className="h-4 w-4" />, text: "Osaka, Japan" },
      { icon: <Calendar className="h-4 w-4" />, text: new Date("2024-01-28").toLocaleDateString() },
      { icon: <Users className="h-4 w-4" />, text: "20 volunteers" },
    ],
  },
]

export function RecentActivitiesSection() {
  const { t } = useLanguage()

  return (
    <CardSlider
      items={activities}
      title={t("recentActivities.title")}
      subtitle={t("recentActivities.subtitle")}
      showNavigation={true}
      className="py-16 px-4"
    />
  )
}

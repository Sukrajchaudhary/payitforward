import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Volunteer Application - Join Our Community",
  description: "Apply to become a volunteer with Pay It Forward JPN. Join our community of changemakers supporting students, helping the homeless, and making a positive impact in Nepal and Japan.",
  keywords: [
    "volunteer application",
    "join volunteer program",
    "volunteer opportunities Nepal Japan",
    "community service application",
    "volunteer registration",
    "social impact volunteering",
    "charity volunteer application"
  ],
  openGraph: {
    title: "Volunteer Application - Join Our Community | Pay It Forward JPN",
    description: "Apply to become a volunteer with Pay It Forward JPN. Join our community of changemakers supporting students, helping the homeless, and making a positive impact in Nepal and Japan.",
    url: "https://payitforwardjpn.com/volunteer-application",
    images: [
      {
        url: "/diverse-volunteers.png",
        width: 1200,
        height: 630,
        alt: "Diverse volunteers working together",
      },
    ],
  },
  twitter: {
    title: "Volunteer Application - Join Our Community | Pay It Forward JPN",
    description: "Apply to become a volunteer with Pay It Forward JPN. Join our community of changemakers supporting students, helping the homeless, and making a positive impact in Nepal and Japan.",
    images: ["/diverse-volunteers.png"],
  },
  alternates: {
    canonical: "https://payitforwardjpn.com/volunteer-application",
  },
}

export default function VolunteerApplicationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

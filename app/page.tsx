import { HomeCarousel } from "@/components/home-carousel"
import { FeaturesSection } from "@/components/features-section"
import { BlogsSection } from "@/components/blogs-section"
import { AboutUsSection } from "@/components/about-us-section"
import { FounderSection } from "@/components/founder-section"
import { RecentActivitiesSection } from "@/components/recent-activities-section"
import { OpportunitiesSection } from "@/components/opportunities-section"
import { ContactUsSection } from "@/components/contact-us-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"
import Gallary from "@/components/gallary/Gallary"
import { Metadata } from "next"
import Aboutus from "@/components/Aboutus"

export const metadata: Metadata = {
  title: "Home - Join Our Volunteering Community",
  description: "Discover meaningful volunteering opportunities in Nepal and Japan. Support students, help the homeless, and make a positive impact in your community. Join Pay It Forward JPN today!",
  keywords: [
    "volunteer opportunities Nepal Japan",
    "community service",
    "student support programs", 
    "homelessness support",
    "volunteer application",
    "social impact",
    "charity work",
    "community development"
  ],
  openGraph: {
    title: "Join Our Volunteering Community - Pay It Forward JPN",
    description: "Discover meaningful volunteering opportunities in Nepal and Japan. Support students, help the homeless, and make a positive impact in your community.",
    url: "https://payitforwardjpn.com",
    images: [
      {
        url: "/diverse-group-of-volunteers-working-together-in-co.png",
        width: 1200,
        height: 630,
        alt: "Diverse group of volunteers working together",
      },
    ],
  },
  twitter: {
    title: "Join Our Volunteering Community - Pay It Forward JPN",
    description: "Discover meaningful volunteering opportunities in Nepal and Japan. Support students, help the homeless, and make a positive impact in your community.",
    images: ["/diverse-group-of-volunteers-working-together-in-co.png"],
  },
}

export default function HomePage() {
  return (
    <div >
      <main>
        <HomeCarousel />
        <div className="max-w-[1400px] mx-auto ">
          <Aboutus/>
          <FeaturesSection />
          <BlogsSection />
          <AboutUsSection />
          <FounderSection />
          <Gallary/>
          <RecentActivitiesSection />
          <OpportunitiesSection />
          <ContactUsSection />
          <TestimonialsSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}

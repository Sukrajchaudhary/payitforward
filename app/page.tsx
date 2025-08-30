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

export default function HomePage() {
  return (
    <div >
      <main>
        <HomeCarousel />
        <div className="max-w-[1400px] mx-auto px-2 ">
          <FeaturesSection />
          <BlogsSection />
          <AboutUsSection />
          <FounderSection />
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

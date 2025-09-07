"use client"

import { useLanguage } from "@/hooks/use-language"
import { CardSlider } from "@/components/ui/card-slider"
import { BlogCard } from "@/components/blog-card"

const blogPosts = [
  {
    id: 1,
    title: "Building Schools in Rural Nepal",
    description: "Our volunteers helped construct a new school building that will serve 200+ children in a remote village.",
    author: "Saroj Raj Dhamala",
    date: "2024-01-15",
    image: "https://res.cloudinary.com/dfzg6gkoh/image/upload/v1757174679/mxhyug2gvglwmjmjjjt0.jpg",
    category: "Education",
    href: "/blog/1",
  },
  {
    id: 2,
    title: "Ocean Cleanup Success Story",
    description: "Together with local communities, we removed over 2 tons of plastic waste from coastal areas.",
    author: "Saroj Raj Dhamala",
    date: "2024-01-10",
    image: "https://res.cloudinary.com/dfzg6gkoh/image/upload/v1757174766/kssnbr2mljbbs5sj3bbx.jpg",
    category: "Environment",
    href: "/blog/2",
  },
  {
    id: 3,
    title: "Teaching Digital Skills to Seniors",
    description: "Our tech volunteers helped 150+ elderly residents learn to use smartphones and connect with family.",
    author: "Saroj Raj Dhamala",
    date: "2024-01-05",
    image: "https://res.cloudinary.com/dfzg6gkoh/image/upload/v1757174156/udriuphi1pwb1dtpziy4.jpg",
    category: "Community",
    href: "/blog/3",
  },
  {
    id: 4,
    title: "Community Garden Initiative",
    description: "Volunteers created a beautiful community garden in downtown Tokyo, bringing neighbors together.",
    author: "Saroj Raj Dhamala",
    date: "2024-01-20",
    image: "https://res.cloudinary.com/dfzg6gkoh/image/upload/v1757174157/t8agquzbkufsmxxgpsr1.jpg",
    category: "Community",
    href: "/blog/4",
  },
  {
    id: 5,
    title: "Healthcare Support Program",
    description: "Our medical volunteers provided free healthcare services to underserved communities.",
    author: "Saroj Raj Dhamala",
    date: "2024-01-25",
    image: "https://res.cloudinary.com/dfzg6gkoh/image/upload/v1757174708/i4rn89fnevemgdibs82l.jpg",
    category: "Healthcare",
    href: "/blog/5",
  },
]

export function BlogsSection() {
  const { t } = useLanguage()

  return (
    <CardSlider
      items={blogPosts}
      title={t("blogs.title")}
      subtitle={t("blogs.subtitle")}
      showNavigation={true}
      className="mt-4"
      renderCard={(item) => (
        <BlogCard
          id={item.id}
          title={item.title}
          description={item.description || ""}
          author={item.author || ""}
          date={item.date || ""}
          image={item.image || ""}
          category={item.category || ""}
          href={item.href || ""}
        />
      )}
    />
  )
}

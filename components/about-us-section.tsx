"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Globe, Award } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const stats = [
  { icon: Users, value: "10,000+", labelKey: "Volunteers" },
  { icon: Globe, value: "50+", labelKey: "Countries" },
  { icon: Heart, value: "500+", labelKey: "Projects" },
  { icon: Award, value: "15", labelKey: "Years" },
];

export function AboutUsSection() {
  const { t, getFontClass } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    volunteers: 0,
    countries: 0,
    projects: 0,
    years: 0,
  });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate stats
          animateStats();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateStats = () => {
    const targets = { volunteers: 10000, countries: 50, projects: 500, years: 15 };
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepDuration = duration / steps;

    Object.keys(targets).forEach((key) => {
      const target = targets[key as keyof typeof targets];
      let current = 0;
      const increment = target / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setAnimatedStats(prev => ({ ...prev, [key]: target }));
          clearInterval(timer);
        } else {
          setAnimatedStats(prev => ({ ...prev, [key]: Math.floor(current) }));
        }
      }, stepDuration);
    });
  };

  return (
    <section 
      ref={sectionRef}
      className={`py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-emerald-50/30 ${getFontClass()} overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              {t("aboutUs.title")}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6">
              {t("aboutUs.subtitle")}
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              {t("aboutUs.description")}
            </p>

            <div className={`grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                const getAnimatedValue = () => {
                  switch (stat.labelKey) {
                    case "Volunteers": return animatedStats.volunteers.toLocaleString() + "+";
                    case "Countries": return animatedStats.countries + "+";
                    case "Projects": return animatedStats.projects + "+";
                    case "Years": return animatedStats.years;
                    default: return stat.value;
                  }
                };
                return (
                  <Card key={index} className="text-center p-3 sm:p-4 hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <CardContent className="pt-3 sm:pt-4">
                      <Icon className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-emerald-600 mx-auto mb-2 sm:mb-3" />
                      <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900">
                        {getAnimatedValue()}
                      </div>
                      <div className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium">
                        {stat.labelKey}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Button 
              size="lg" 
              className={`bg-emerald-600 rounded-3xl hover:bg-emerald-700 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              {t("aboutUs.learnMore")}
            </Button>
          </div>

          <div className={`relative w-full max-w-full transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative overflow-hidden rounded-xl lg:rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <Image
                src="https://res.cloudinary.com/dfzg6gkoh/image/upload/v1757174708/i4rn89fnevemgdibs82l.jpg"
                alt="About us"
                width={600}
                height={400}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
              />
            </div>
            <div className={`absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-emerald-600 text-white p-3 sm:p-4 rounded-lg shadow-lg transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="text-lg sm:text-xl lg:text-2xl font-bold">{animatedStats.years}+</div>
              <div className="text-xs sm:text-sm lg:text-base">Years of Impact</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
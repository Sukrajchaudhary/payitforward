"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Globe, Award } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import Image from "next/image";

const stats = [
  { icon: Users, value: "10,000+", labelKey: "Volunteers" },
  { icon: Globe, value: "50+", labelKey: "Countries" },
  { icon: Heart, value: "500+", labelKey: "Projects" },
  { icon: Award, value: "15", labelKey: "Years" },
];

export function AboutUsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 px-4">
      <div className="mx-auto">
        <div className="grid lg:grid-cols-2 gap-12  items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("aboutUs.title")}
            </h2>
            <p className="text-base text-gray-600 mb-6">
              {t("aboutUs.subtitle")}
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {t("aboutUs.description")}
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="text-center p-4">
                    <CardContent className="pt-4">
                      <Icon className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">
                        {stat.labelKey}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Button size="lg" className="bg-emerald-600 rounded-3xl hover:bg-emerald-700">
              {t("aboutUs.learnMore")}
            </Button>
          </div>

          <div className="relative w-full max-w-full">
            <Image
              src="/images/kh.jpeg"
              alt="About us"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 animate-bounce -left-6 bg-emerald-600 text-white p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-base">Years of Impact</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

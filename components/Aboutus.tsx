"use client"
import Image from "next/image";
import React, { useState } from "react";
import { Globe, Users, Heart, MapPin } from "lucide-react";

const Aboutus = () => {
  const [language, setLanguage] = useState("en"); 

  const content = {
    en: {
      title: "About Pay It Forward",
      subtitle: "Bridging Hearts Between Nepal and Japan",
      description: "Pay It Forward is a dedicated volunteering platform that connects the compassionate hearts of Nepal and Japan. Our mission is to create meaningful impact by helping students, homeless individuals, and lost people find support, guidance, and hope in Japan.",
      mission: "Our Mission",
      missionText: "We believe in the power of community and cross-cultural collaboration. Through our platform, we facilitate volunteer opportunities that address critical social needs while fostering understanding between Nepali and Japanese communities.",
      services: [
        "Student Support Services - Academic guidance and cultural adaptation assistance",
        "Homeless Outreach Programs - Providing essential resources and rehabilitation support",
        "Lost Person Assistance - Helping individuals reconnect with families and communities",
        "Cultural Exchange Programs - Building bridges between Nepal and Japan"
      ],
      impact: "Our Impact",
      impactText: "Since our inception, we have connected over 500 volunteers with meaningful opportunities, supported 200+ students in their academic journey, and provided assistance to countless individuals in need across Japan.",
      cta: "Join Our Community"
    },
    jp: {
      title: "ペイ・イット・フォワードについて",
      subtitle: "ネパールと日本の心をつなぐ",
      description: "ペイ・イット・フォワードは、ネパールと日本の思いやりのある心をつなぐ専用のボランティアプラットフォームです。私たちの使命は、日本で学生、ホームレスの人々、迷子の人々が支援、指導、希望を見つけるのを助けることで、意味のある影響を与えることです。",
      mission: "私たちの使命",
      missionText: "私たちはコミュニティと異文化間協力の力を信じています。私たちのプラットフォームを通じて、ネパールと日本のコミュニティ間の理解を促進しながら、重要な社会的ニーズに対処するボランティア機会を促進します。",
      services: [
        "学生支援サービス - 学術指導と文化適応支援",
        "ホームレス支援プログラム - 必要不可欠なリソースとリハビリテーション支援の提供",
        "迷子の人の支援 - 個人が家族やコミュニティと再接続するのを手助け",
        "文化交流プログラム - ネパールと日本の架け橋を築く"
      ],
      impact: "私たちの影響",
      impactText: "設立以来、500人以上のボランティアを意味のある機会とつなげ、200人以上の学生の学習の旅を支援し、日本全国の無数の困っている人々に支援を提供してきました。",
      cta: "コミュニティに参加"
    }
  };
 //@ts-ignore
  const currentContent = content[language];

  return (
    <section className="py-14 ">
      <div className="container flex flex-col mx-auto gap-y-10 px-6 lg:px-8">
        {/* Language Toggle */}
        <div className="flex justify-start ">
          <div className="inline-flex rounded-xl bg-white shadow-lg border p-1">
            <button
              onClick={() => setLanguage("en")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                language === "en"
                  ? "bg-[#248406] text-white"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage("jp")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                language === "jp"
                  ? "bg-[#248406] text-white"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              日本語
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="flex flex-col items-center space-y-6">
            <div className="relative">
              {/* Main Logo */}
              <div className="relative h-40 w-44  md:h-44 md:w-48 flex items-center justify-center rounded-full shadow-2xl bg-white">
                <Image
                  src="https://res.cloudinary.com/dfzg6gkoh/image/upload/v1757175190/upialfsbqmhqmr3zb9bp.png"
                  fill
                  alt="Pay It Forward Logo"
                  unoptimized
                  loading="lazy"
                  className="object-cover rounded-full"
                />
              </div>
              
              {/* Floating Icons */}
              <div className="absolute -top-4 -right-4 h-12 w-12 bg-[#248406] rounded-full flex items-center justify-center shadow-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 h-12 w-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <Users className="h-6 w-6 text-white" />
              </div>
            </div>

            {/* Flag Icons */}
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="w-12 h-8 bg-gradient-to-r from-blue-600 via-white to-red-600 rounded border shadow-md flex items-center justify-center">
                  <span className="text-xs font-bold">🇳🇵</span>
                </div>
                <p className="text-xs mt-1 text-gray-600">Nepal</p>
              </div>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-[#248406] to-blue-500"></div>
              <div className="text-center">
                <div className="w-12 h-8 bg-gradient-to-b from-white to-red-600 rounded border shadow-md flex items-center justify-center">
                  <span className="text-xs font-bold">🇯🇵</span>
                </div>
                <p className="text-xs mt-1 text-gray-600">Japan</p>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-4">
                {currentContent.title}
              </h1>
              <p className="text-base text-[#248406] font-medium mb-6">
                {currentContent.subtitle}
              </p>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                {currentContent.description}
              </p>
            </div>

            {/* Mission Section */}
            <div className="bg-[#248406] rounded-lg p-6 shadow-md">
              <h2 className="text-xl font-semibold text-white mb-3 flex items-center">
                <MapPin className="h-5 w-5 text-red-400 mr-2" />
                {currentContent.mission}
              </h2>
              <p className="text-white leading-relaxed">
                {currentContent.missionText}
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {language === "en" ? "Our Services:" : "私たちのサービス:"}
              </h3>
              <ul className="space-y-2">
                {currentContent.services.map((service:any, index:number) => (
                  <li key={index} className="flex items-start">
                    <div className="h-2 w-2 bg-[#248406] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Impact Stats */}
            <div className="bg-gradient-to-r from-[#248406] to-green-600 rounded-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Globe className="h-5 w-5 mr-2" />
                {currentContent.impact}
              </h3>
              <p className="leading-relaxed">
                {currentContent.impactText}
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-[#248406] rounded-full hover:bg-green-700 text-white font-semibold px-8 py-3  shadow-lg transition-all duration-300 transform hover:scale-105">
                {currentContent.cta} →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
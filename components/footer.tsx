"use client";

import { useLanguage } from "@/hooks/use-language";
import { Heart, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const { t, getFontClass } = useLanguage();

  const quickLinks = [
    { key: "home" as const, href: "#home" },
    { key: "opportunities" as const, href: "#opportunities" },
    { key: "about" as const, href: "#about" },
    { key: "contact" as const, href: "#contact" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const contactInfo = [
    { icon: Mail, text: "payitforwardjpn@gmail.com", href: "mailto:payitforwardjpn@gmail.com" },
    { icon: Phone, text: "090-9190-7575", href: "tel:090-9190-7575" },
    { icon: MapPin, text: "Tokyo, Japan", href: "#" },
  ];

  return (
    <footer className={`relative overflow-hidden bg-gray-900 ${getFontClass()}`}>
      {/* Background Image */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src="https://res.cloudinary.com/dfzg6gkoh/image/upload/v1757174157/t8agquzbkufsmxxgpsr1.jpg"
          alt="Background"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900/40"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="relative bg-white p-1 h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center rounded-full overflow-hidden shadow-lg">
                <Image
                  src="https://res.cloudinary.com/dfzg6gkoh/image/upload/v1757175190/upialfsbqmhqmr3zb9bp.png"
                  fill
                  alt="logo"
                  unoptimized
                  loading="lazy"
                  className="object-cover"
                />
              </div>
              <span className="text-lg sm:text-xl lg:text-2xl text-white font-bold">
                Pay It Forward
              </span>
            </div>
            <p className="text-white/90 text-sm sm:text-base mb-4 sm:mb-6 max-w-md leading-relaxed">
              {t("footerMission")}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 sm:space-y-3">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center gap-2 sm:gap-3 text-white/80 hover:text-white transition-colors text-xs sm:text-sm"
                  >
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>{contact.text}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white text-lg sm:text-xl mb-4 sm:mb-6">{t("quickLinks")}</h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-white text-lg sm:text-xl mb-4 sm:mb-6">{t("followUs")}</h3>
            <div className="flex gap-2 sm:gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex h-8 w-8 sm:h-10 sm:w-10 text-white/80 hover:text-white items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              ))}
            </div>
            
            {/* Heart Icon */}
            <div className="mt-6 sm:mt-8 flex items-center gap-2 text-white/80">
              <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-red-400" />
              <span className="text-xs sm:text-sm">Made with love for the community</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 sm:mt-12 pt-4 sm:pt-6 text-center">
          <p className="text-white/80 text-xs sm:text-sm">
            &copy; 2025 Pay It Forward Japan. All rights reserved. | 
            <span className="ml-1">Connecting hearts, changing lives.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

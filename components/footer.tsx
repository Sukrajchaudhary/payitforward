"use client";

import { useLanguage } from "@/hooks/use-language";
import { Heart, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const { t } = useLanguage();

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

  return (
    <footer className="bg-[#248406] border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative h-14 aspect-square flex items-center justify-center rounded-full overflow-hidden">
                <Image
                  src="/logo/logo.png"
                  fill
                  alt="logo"
                  unoptimized
                  loading="lazy"
                />
              </div>
              <span className="text-xl text-white font-bold">
                Payitforwardjpn
              </span>
            </div>
            <p className="text-white text-pretty mb-6 max-w-md">
              {t("footerMission")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white text-xl mb-4">{t("quickLinks")}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-white hover:text-foreground transition-colors"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-white text-xl mb-4">{t("followUs")}</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex h-10 text-wh w-10 items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t text-white mt-8 pt-4 text-center ">
          <p>&copy; 2025 Payitforwardjpn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

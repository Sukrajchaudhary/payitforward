"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  CheckCircle,
} from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export function ContactUsSection() {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Badge
              variant="secondary"
              className="bg-emerald-500 text-white px-4 py-2 text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              Get In Touch
            </Badge>
          </div>
          <h2 className="text-4xl font-bold text-emerald-600 mb-4">
            {t("contactUs.title")}
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t("contactUs.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="order-2 lg:order-1">
            <Card className="border  transition-all duration-500 transform hover:-translate-y-1">
              <CardHeader className="p-2">
                <CardTitle className="text-center p-0 text-xl flex items-center justify-center gap-2">
                  <Send className="h-5 w-5" />
                  Send us a message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2 group">
                      <Label
                        htmlFor="contactName"
                        className="text-sm font-semibold text-gray-700 group-focus-within:text-emerald-600 transition-colors"
                      >
                        {t("contactUs.yourName")}
                      </Label>
                      <Input
                        id="contactName"
                        placeholder="Enter your name"
                        className="h-10 text-sm border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all duration-300 rounded-lg"
                      />
                    </div>
                    <div className="space-y-2 group">
                      <Label
                        htmlFor="contactEmail"
                        className="text-sm font-semibold text-gray-700 group-focus-within:text-emerald-600 transition-colors"
                      >
                        {t("contactUs.yourEmail")}
                      </Label>
                      <Input
                        id="contactEmail"
                        type="email"
                        placeholder="Enter your email"
                        className="h-10 text-sm border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all duration-300 rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 group">
                    <Label
                      htmlFor="subject"
                      className="text-sm font-semibold text-gray-700 group-focus-within:text-emerald-600 transition-colors"
                    >
                      {t("contactUs.subject")}
                    </Label>
                    <Input
                      id="subject"
                      placeholder="Enter subject"
                      className="h-10 text-sm border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all duration-300 rounded-lg"
                    />
                  </div>

                  <div className="space-y-2 group">
                    <Label
                      htmlFor="contactMessage"
                      className="text-sm font-semibold text-gray-700 group-focus-within:text-emerald-600 transition-colors"
                    >
                      {t("contactUs.yourMessage")}
                    </Label>
                    <Textarea
                      id="contactMessage"
                      placeholder="Enter your message"
                      rows={4}
                      className="text-sm border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all duration-300 rounded-lg resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitted}
                    className="w-fit rounded-4xl h-12 text-base bg-emerald-600 hover:bg-emerald-700 transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="mr-2 h-5 w-5 animate-bounce" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        {t("contactUs.sendMessage")}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4 order-1 lg:order-2">
            <div>
              <h3 className="text-3xl font-bold text-emerald-600 mb-6 text-center lg:text-left">
                Get in touch
              </h3>
              <div className="space-y-3">
                <Card className="p-4 hover:shadow-lg transition-all duration-300 border-l-4 border-l-emerald-500 hover:border-l-6 transform hover:-translate-y-1 bg-emerald-50">
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-500 p-3 rounded-full shadow-md">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-1">
                        Address
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {t("contactUs.address")}
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500 hover:border-l-6 transform hover:-translate-y-1 bg-blue-50">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500 p-3 rounded-full shadow-md">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-1">
                        Phone
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {t("contactUs.phone")}
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 hover:shadow-lg transition-all duration-300 border-l-4 border-l-purple-500 hover:border-l-6 transform hover:-translate-y-1 bg-purple-50">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-500 p-3 rounded-full shadow-md">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-1">
                        Email
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {t("contactUs.email")}
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500 hover:border-l-6 transform hover:-translate-y-1 bg-orange-50">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500 p-3 rounded-full shadow-md">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-1">
                        Office Hours
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Monday - Friday: 9:00 AM - 6:00 PM
                      </p>
                      <p className="text-gray-600 text-sm">
                        Saturday: 10:00 AM - 4:00 PM
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <Card className="bg-emerald-50 border-2 border-emerald-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="bg-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-emerald-900 text-xl mb-2">
                  Quick Response
                </h4>
                <p className="text-emerald-700 text-sm leading-relaxed">
                  We typically respond to all inquiries within 24 hours. For
                  urgent matters, please call us directly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

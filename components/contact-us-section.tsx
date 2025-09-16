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
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

// Zod schema for form validation
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(100, "Subject must be less than 100 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactUsSection() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      toast.success("Message sent successfully! We'll get back to you soon.", {
        description: "Thank you for reaching out to us.",
        duration: 5000,
      });
      
      form.reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.", {
        description: "There was an error sending your message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 px-3">
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
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="text-sm font-semibold text-gray-700">
                              {t("contactUs.yourName")}
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter your name"
                                className="h-11 text-sm border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all duration-300 rounded-lg"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-xs text-red-500" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="text-sm font-semibold text-gray-700">
                              {t("contactUs.yourEmail")}
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="Enter your email"
                                className="h-11 text-sm border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all duration-300 rounded-lg"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-xs text-red-500" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel className="text-sm font-semibold text-gray-700">
                            {t("contactUs.subject")}
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter subject"
                              className="h-11 text-sm border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all duration-300 rounded-lg"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-xs text-red-500" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel className="text-sm font-semibold text-gray-700">
                            {t("contactUs.yourMessage")}
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Enter your message"
                              rows={5}
                              className="text-sm border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all duration-300 rounded-lg resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-xs text-red-500" />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-fit rounded-full h-12 text-base bg-emerald-600 hover:bg-emerald-700 transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          {t("contactUs.sendMessage")}
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
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

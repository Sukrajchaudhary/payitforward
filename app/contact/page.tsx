"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  ArrowLeft,
  Send,
  Loader2,
  CheckCircle,
  MessageSquare,
  Mail,
  Phone,
  User,
  MapPin,
  Clock,
} from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { toast } from "sonner"
import Link from "next/link"
import { useLanguage } from "@/hooks/use-language"

// Zod schema for form validation
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .optional(),
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(100, "Subject must be less than 100 characters"),
  category: z
    .string()
    .min(1, "Please select a category"),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters")
    .max(1000, "Message must be less than 1000 characters"),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export default function ContactPage() {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      category: "",
      message: "",
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log("Contact Form Data:", data)
      
      toast.success("Message sent successfully!", {
        description: "We'll get back to you within 24 hours.",
      })
      
      setIsSubmitted(true)
      form.reset()
      
    } catch (error) {
      toast.error("Failed to send message", {
        description: "Please try again or contact us directly.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50/30">
        {/* Header with back button */}
        <div className="bg-white border-b sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 py-16">
          <div className="text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Message Sent Successfully!
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Thank you for contacting us. We'll review your message and get back to you within 24 hours.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <p className="text-green-800">
                <strong>Next Steps:</strong> Check your email for a confirmation message and keep an eye out for our response.
              </p>
            </div>
            <Link href="/">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Return to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50/30">
      {/* Header with back button */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-emerald-100 rounded-full">
              <MessageSquare className="h-8 w-8 text-emerald-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">
              Contact Us
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with us. We'd love to hear from you and answer any questions you may have.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-6">
                <CardTitle className="text-xl flex items-center gap-3 text-gray-900">
                  <div className="p-2 bg-emerald-100 rounded-lg">
                    <Send className="h-5 w-5 text-emerald-600" />
                  </div>
                  Send us a Message
                </CardTitle>
                <p className="text-gray-600 text-sm">We'd love to hear from you</p>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-gray-700">Full Name *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your full name" 
                                className="h-12 border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all duration-300 rounded-lg"
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
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-gray-700">Email Address *</FormLabel>
                            <FormControl>
                              <Input 
                                type="email" 
                                placeholder="your@email.com" 
                                className="h-12 border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all duration-300 rounded-lg"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage className="text-xs text-red-500" />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-gray-700">Phone Number (Optional)</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="+1 (555) 123-4567" 
                                className="h-12 border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all duration-300 rounded-lg"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage className="text-xs text-red-500" />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-gray-700">Category *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all duration-300 rounded-lg">
                                  <SelectValue placeholder="Select a category" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="border-2 border-gray-200 rounded-lg shadow-lg">
                                <SelectItem value="general">General Inquiry</SelectItem>
                                <SelectItem value="volunteer">Volunteer Opportunities</SelectItem>
                                <SelectItem value="partnership">Partnership</SelectItem>
                                <SelectItem value="donation">Donation</SelectItem>
                                <SelectItem value="support">Technical Support</SelectItem>
                                <SelectItem value="feedback">Feedback</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage className="text-xs text-red-500" />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-gray-700">Subject *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Brief description of your inquiry" 
                              className="h-12 border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all duration-300 rounded-lg"
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
                        <FormItem>
                          <FormLabel className="text-sm font-semibold text-gray-700">Your Message *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Please provide details about your inquiry, question, or feedback..."
                              className="min-h-[150px] border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all duration-300 rounded-lg resize-none"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage className="text-xs text-red-500" />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      size="lg"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg flex items-center gap-3 text-gray-900">
                  <div className="p-2 bg-emerald-100 rounded-lg">
                    <MapPin className="h-5 w-5 text-emerald-600" />
                  </div>
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Tokyo, Japan<br />
                  Kathmandu, Nepal
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg flex items-center gap-3 text-gray-900">
                  <div className="p-2 bg-emerald-100 rounded-lg">
                    <Mail className="h-5 w-5 text-emerald-600" />
                  </div>
                  Email Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  <a href="mailto:payitforwardjpn@gmail.com" className="hover:text-emerald-600 transition-colors font-medium">
                    payitforwardjpn@gmail.com
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg flex items-center gap-3 text-gray-900">
                  <div className="p-2 bg-emerald-100 rounded-lg">
                    <Phone className="h-5 w-5 text-emerald-600" />
                  </div>
                  Call Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  <a href="tel:090-9190-7575" className="hover:text-emerald-600 transition-colors font-medium">
                    090-9190-7575
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg flex items-center gap-3 text-gray-900">
                  <div className="p-2 bg-emerald-100 rounded-lg">
                    <Clock className="h-5 w-5 text-emerald-600" />
                  </div>
                  Response Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed text-sm">
                  We typically respond to all inquiries within 24 hours. For urgent matters, please call us directly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

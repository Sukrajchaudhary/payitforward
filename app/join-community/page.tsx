"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
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
  User,
  Mail,
  Phone,
  MapPin,
  Heart,
  Users,
  Target,
  Clock,
} from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { toast } from "sonner"
import Link from "next/link"
import { useLanguage } from "@/hooks/use-language"

// Zod schema for form validation
const communityJoinSchema = z.object({
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
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be less than 15 digits"),
  location: z
    .string()
    .min(1, "Please select your location"),
  age: z
    .string()
    .min(1, "Please select your age group"),
  motivation: z
    .string()
    .min(20, "Please provide at least 20 characters about your motivation")
    .max(500, "Motivation must be less than 500 characters"),
  skills: z
    .string()
    .min(10, "Please describe your skills and experience")
    .max(300, "Skills description must be less than 300 characters"),
  availability: z
    .string()
    .min(1, "Please select your availability"),
  interests: z
    .array(z.string())
    .min(1, "Please select at least one area of interest"),
  experience: z
    .string()
    .min(1, "Please select your volunteer experience level"),
  commitment: z
    .boolean()
    .refine((val) => val === true, "You must agree to the commitment terms"),
  privacy: z
    .boolean()
    .refine((val) => val === true, "You must agree to the privacy policy"),
})

type CommunityJoinFormData = z.infer<typeof communityJoinSchema>

export default function JoinCommunityPage() {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<CommunityJoinFormData>({
    resolver: zodResolver(communityJoinSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      location: "",
      age: "",
      motivation: "",
      skills: "",
      availability: "",
      interests: [],
      experience: "",
      commitment: false,
      privacy: false,
    },
  })

  const interestOptions = [
    "Education & Student Support",
    "Healthcare & Medical Support",
    "Environmental Conservation",
    "Community Development",
    "Digital Skills Training",
    "Elderly Care",
    "Homelessness Support",
    "Cultural Exchange",
    "Event Organization",
    "Fundraising",
  ]

  const onSubmit = async (data: CommunityJoinFormData) => {
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log("Community Join Form Data:", data)
      
      toast.success("Application submitted successfully!", {
        description: "We'll review your application and get back to you within 2-3 business days.",
      })
      
      setIsSubmitted(true)
      form.reset()
      
    } catch (error) {
      toast.error("Failed to submit application", {
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
              Application Submitted Successfully!
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Thank you for your interest in joining our community. We'll review your application and get back to you within 2-3 business days.
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
              <Users className="h-8 w-8 text-emerald-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">
              Join Our Community
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Become part of our mission to make a positive impact. Fill out the form below and we'll get back to you soon.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Personal Information */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-6">
                <CardTitle className="text-xl flex items-center gap-3 text-gray-900">
                  <div className="p-2 bg-emerald-100 rounded-lg">
                    <User className="h-5 w-5 text-emerald-600" />
                  </div>
                  Personal Information
                </CardTitle>
                <p className="text-gray-600 text-sm">Tell us about yourself</p>
              </CardHeader>
              <CardContent className="space-y-6">
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
                        <FormLabel className="text-sm font-semibold text-gray-700">Phone Number *</FormLabel>
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
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-gray-700">Location *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all duration-300 rounded-lg">
                              <SelectValue placeholder="Select your location" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="border-2 border-gray-200 rounded-lg shadow-lg">
                            <SelectItem value="tokyo">Tokyo, Japan</SelectItem>
                            <SelectItem value="osaka">Osaka, Japan</SelectItem>
                            <SelectItem value="kyoto">Kyoto, Japan</SelectItem>
                            <SelectItem value="yokohama">Yokohama, Japan</SelectItem>
                            <SelectItem value="kathmandu">Kathmandu, Nepal</SelectItem>
                            <SelectItem value="pokhara">Pokhara, Nepal</SelectItem>
                            <SelectItem value="lalitpur">Lalitpur, Nepal</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-xs text-red-500" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-gray-700">Age Group *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all duration-300 rounded-lg">
                              <SelectValue placeholder="Select your age group" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="border-2 border-gray-200 rounded-lg shadow-lg">
                            <SelectItem value="18-25">18-25 years</SelectItem>
                            <SelectItem value="26-35">26-35 years</SelectItem>
                            <SelectItem value="36-45">36-45 years</SelectItem>
                            <SelectItem value="46-55">46-55 years</SelectItem>
                            <SelectItem value="56-65">56-65 years</SelectItem>
                            <SelectItem value="65+">65+ years</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-xs text-red-500" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="experience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-gray-700">Volunteer Experience *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all duration-300 rounded-lg">
                              <SelectValue placeholder="Select your experience level" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="border-2 border-gray-200 rounded-lg shadow-lg">
                            <SelectItem value="beginner">Beginner (No prior experience)</SelectItem>
                            <SelectItem value="some">Some experience (1-2 years)</SelectItem>
                            <SelectItem value="experienced">Experienced (3-5 years)</SelectItem>
                            <SelectItem value="expert">Expert (5+ years)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-xs text-red-500" />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Motivation & Skills */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-6">
                <CardTitle className="text-xl flex items-center gap-3 text-gray-900">
                  <div className="p-2 bg-emerald-100 rounded-lg">
                    <Heart className="h-5 w-5 text-emerald-600" />
                  </div>
                  Motivation & Skills
                </CardTitle>
                <p className="text-gray-600 text-sm">Share your passion and expertise</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <FormField
                  control={form.control}
                  name="motivation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-gray-700">Why do you want to join our community? *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us what motivates you to volunteer and make a difference..."
                          className="min-h-[120px] border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all duration-300 rounded-lg resize-none"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="skills"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-gray-700">What skills and experience can you bring? *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe your skills, professional experience, or any special talents that could help our cause..."
                          className="min-h-[120px] border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all duration-300 rounded-lg resize-none"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500" />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Interests & Availability */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-6">
                <CardTitle className="text-xl flex items-center gap-3 text-gray-900">
                  <div className="p-2 bg-emerald-100 rounded-lg">
                    <Target className="h-5 w-5 text-emerald-600" />
                  </div>
                  Interests & Availability
                </CardTitle>
                <p className="text-gray-600 text-sm">What areas interest you and when are you available?</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <FormField
                  control={form.control}
                  name="interests"
                  render={() => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-gray-700">Areas of Interest * (Select all that apply)</FormLabel>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        {interestOptions.map((interest) => (
                          <FormField
                            key={interest}
                            control={form.control}
                            name="interests"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={interest}
                                  className="flex flex-row items-start space-x-3 space-y-0 p-3 rounded-lg border border-gray-100 hover:border-emerald-200 hover:bg-emerald-50/50 transition-all duration-300"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(interest)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, interest])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== interest
                                              )
                                            )
                                      }}
                                      className="border-2 border-gray-300 data-[state=checked]:bg-emerald-600 data-[state=checked]:border-emerald-600"
                                    />
                                  </FormControl>
                                  <FormLabel className="text-sm font-normal cursor-pointer">
                                    {interest}
                                  </FormLabel>
                                </FormItem>
                              )
                            }}
                          />
                        ))}
                      </div>
                      <FormMessage className="text-xs text-red-500" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="availability"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-gray-700">How much time can you commit? *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all duration-300 rounded-lg">
                            <SelectValue placeholder="Select your availability" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="border-2 border-gray-200 rounded-lg shadow-lg">
                          <SelectItem value="flexible">Flexible - I can adapt to different schedules</SelectItem>
                          <SelectItem value="weekends">Weekends only</SelectItem>
                          <SelectItem value="weekdays">Weekdays only</SelectItem>
                          <SelectItem value="evenings">Evenings after 6 PM</SelectItem>
                          <SelectItem value="mornings">Mornings before 10 AM</SelectItem>
                          <SelectItem value="specific">I have specific time slots</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-xs text-red-500" />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Terms & Conditions */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-6">
                <CardTitle className="text-xl flex items-center gap-3 text-gray-900">
                  <div className="p-2 bg-emerald-100 rounded-lg">
                    <Clock className="h-5 w-5 text-emerald-600" />
                  </div>
                  Terms & Conditions
                </CardTitle>
                <p className="text-gray-600 text-sm">Please read and agree to our terms</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <FormField
                  control={form.control}
                  name="commitment"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4 rounded-lg border border-gray-100 hover:border-emerald-200 hover:bg-emerald-50/50 transition-all duration-300">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="border-2 border-gray-300 data-[state=checked]:bg-emerald-600 data-[state=checked]:border-emerald-600"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm font-normal cursor-pointer">
                          I commit to actively participate in volunteer activities and follow our community guidelines *
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="privacy"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4 rounded-lg border border-gray-100 hover:border-emerald-200 hover:bg-emerald-50/50 transition-all duration-300">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="border-2 border-gray-300 data-[state=checked]:bg-emerald-600 data-[state=checked]:border-emerald-600"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm font-normal cursor-pointer">
                          I agree to the privacy policy and terms of service *
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="flex justify-center pt-8">
              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 px-12 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Submitting Application...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Submit Application
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

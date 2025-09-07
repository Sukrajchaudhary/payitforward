"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  X,
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

interface CommunityJoinFormProps {
  children: React.ReactNode
}

export function CommunityJoinForm({ children }: CommunityJoinFormProps) {
  const [isOpen, setIsOpen] = useState(false)
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
      
      // Close dialog after 3 seconds
      setTimeout(() => {
        setIsOpen(false)
        setIsSubmitted(false)
      }, 3000)
      
    } catch (error) {
      toast.error("Failed to submit application", {
        description: "Please try again or contact us directly.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    if (!isSubmitting) {
      setIsOpen(false)
      setIsSubmitted(false)
      form.reset()
    }
  }

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Application Submitted Successfully!
            </h3>
            <p className="text-gray-600 mb-6">
              Thank you for your interest in joining our community. We'll review your application and get back to you within 2-3 business days.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800 text-sm">
                <strong>Next Steps:</strong> Check your email for a confirmation message and keep an eye out for our response.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Users className="h-6 w-6 text-emerald-600" />
            Join Our Community
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Become part of our mission to make a positive impact. Fill out the form below and we'll get back to you soon.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <User className="h-5 w-5 text-emerald-600" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <Input placeholder="+1 (555) 123-4567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your location" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
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
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Age Group *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your age group" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="18-25">18-25 years</SelectItem>
                            <SelectItem value="26-35">26-35 years</SelectItem>
                            <SelectItem value="36-45">36-45 years</SelectItem>
                            <SelectItem value="46-55">46-55 years</SelectItem>
                            <SelectItem value="56-65">56-65 years</SelectItem>
                            <SelectItem value="65+">65+ years</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="experience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Volunteer Experience *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your experience level" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="beginner">Beginner (No prior experience)</SelectItem>
                            <SelectItem value="some">Some experience (1-2 years)</SelectItem>
                            <SelectItem value="experienced">Experienced (3-5 years)</SelectItem>
                            <SelectItem value="expert">Expert (5+ years)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Motivation & Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Heart className="h-5 w-5 text-emerald-600" />
                  Motivation & Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="motivation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Why do you want to join our community? *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us what motivates you to volunteer and make a difference..."
                          className="min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="skills"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What skills and experience can you bring? *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe your skills, professional experience, or any special talents that could help our cause..."
                          className="min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Interests & Availability */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Target className="h-5 w-5 text-emerald-600" />
                  Interests & Availability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="interests"
                  render={() => (
                    <FormItem>
                      <FormLabel>Areas of Interest * (Select all that apply)</FormLabel>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                        {interestOptions.map((interest) => (
                          <FormField
                            key={interest}
                            control={form.control}
                            name="interests"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={interest}
                                  className="flex flex-row items-start space-x-3 space-y-0"
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
                                    />
                                  </FormControl>
                                  <FormLabel className="text-sm font-normal">
                                    {interest}
                                  </FormLabel>
                                </FormItem>
                              )
                            }}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="availability"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>How much time can you commit? *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your availability" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="flexible">Flexible - I can adapt to different schedules</SelectItem>
                          <SelectItem value="weekends">Weekends only</SelectItem>
                          <SelectItem value="weekdays">Weekdays only</SelectItem>
                          <SelectItem value="evenings">Evenings after 6 PM</SelectItem>
                          <SelectItem value="mornings">Mornings before 10 AM</SelectItem>
                          <SelectItem value="specific">I have specific time slots</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Terms & Conditions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Clock className="h-5 w-5 text-emerald-600" />
                  Terms & Conditions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="commitment"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
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
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          I agree to the privacy policy and terms of service *
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="flex justify-end gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Submit Application
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

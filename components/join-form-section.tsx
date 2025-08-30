"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Globe, Sparkles, CheckCircle, Star } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

const interestOptions = [
  "Education",
  "Environment",
  "Healthcare",
  "Community Development",
  "Disaster Relief",
  "Animal Welfare",
  "Technology",
  "Arts & Culture",
]

const availabilityOptions = [
  "Weekends only",
  "Weekdays only",
  "Flexible schedule",
  "Full-time commitment",
  "Part-time commitment",
]

export function JoinFormSection() {
  const { t } = useLanguage()
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInterestChange = (interest: string, checked: boolean) => {
    if (checked) {
      setSelectedInterests([...selectedInterests, interest])
    } else {
      setSelectedInterests(selectedInterests.filter((i) => i !== interest))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-emerald-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-3 bg-gradient-to-r from-emerald-100 via-blue-100 to-purple-100 px-8 py-4 rounded-full shadow-lg">
              <Heart className="h-6 w-6 text-emerald-600 animate-pulse" />
              <Sparkles className="h-6 w-6 text-blue-600 animate-bounce" />
              <Users className="h-6 w-6 text-purple-600 animate-pulse" />
            </div>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t("joinForm.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t("joinForm.subtitle")}</p>
        </div>

        <Card className="relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-500 p-[3px] rounded-xl">
            <div className="h-full w-full bg-white rounded-lg" />
          </div>
          <div className="relative">
            <CardHeader className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
              <CardTitle className="text-center text-3xl flex items-center justify-center gap-4 relative z-10">
                <Globe className="h-8 w-8 animate-spin-slow" />
                Volunteer Application Form
                <Heart className="h-8 w-8 animate-pulse" />
              </CardTitle>
            </CardHeader>
            <CardContent className="p-12">
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4 group">
                    <Label
                      htmlFor="fullName"
                      className="text-lg font-semibold text-gray-700 group-focus-within:text-emerald-600 transition-colors"
                    >
                      {t("joinForm.fullName")}
                    </Label>
                    <Input
                      id="fullName"
                      placeholder="Enter your full name"
                      className="h-14 text-lg border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all duration-300 rounded-xl"
                    />
                  </div>
                  <div className="space-y-4 group">
                    <Label
                      htmlFor="email"
                      className="text-lg font-semibold text-gray-700 group-focus-within:text-emerald-600 transition-colors"
                    >
                      {t("joinForm.email")}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="h-14 text-lg border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all duration-300 rounded-xl"
                    />
                  </div>
                </div>

                <div className="space-y-4 group">
                  <Label
                    htmlFor="phone"
                    className="text-lg font-semibold text-gray-700 group-focus-within:text-emerald-600 transition-colors"
                  >
                    {t("joinForm.phone")}
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="h-14 text-lg border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all duration-300 rounded-xl"
                  />
                </div>

                <div className="space-y-6">
                  <Label className="text-lg font-semibold text-gray-700">{t("joinForm.interests")}</Label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {interestOptions.map((interest) => (
                      <div
                        key={interest}
                        className="flex items-center space-x-4 p-4 rounded-xl border-2 border-gray-200 hover:border-emerald-300 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-blue-50 transition-all duration-300 cursor-pointer group"
                      >
                        <Checkbox
                          id={interest}
                          checked={selectedInterests.includes(interest)}
                          onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                          className="h-6 w-6 border-2 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
                        />
                        <Label
                          htmlFor={interest}
                          className="text-base font-medium cursor-pointer group-hover:text-emerald-700 transition-colors"
                        >
                          {interest}
                        </Label>
                        {selectedInterests.includes(interest) && (
                          <Star className="h-4 w-4 text-emerald-500 animate-pulse ml-auto" />
                        )}
                      </div>
                    ))}
                  </div>
                  {selectedInterests.length > 0 && (
                    <div className="flex flex-wrap gap-3 mt-6 p-4 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl">
                      {selectedInterests.map((interest) => (
                        <Badge
                          key={interest}
                          variant="secondary"
                          className="bg-gradient-to-r from-emerald-100 to-blue-100 text-emerald-800 px-4 py-2 text-base shadow-md"
                        >
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-4 group">
                  <Label
                    htmlFor="availability"
                    className="text-lg font-semibold text-gray-700 group-focus-within:text-emerald-600 transition-colors"
                  >
                    {t("joinForm.availability")}
                  </Label>
                  <Select>
                    <SelectTrigger className="h-14 text-lg border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all duration-300 rounded-xl">
                      <SelectValue placeholder={t("joinForm.selectAvailability")} />
                    </SelectTrigger>
                    <SelectContent>
                      {availabilityOptions.map((option) => (
                        <SelectItem key={option} value={option} className="text-lg py-3">
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4 group">
                  <Label
                    htmlFor="experience"
                    className="text-lg font-semibold text-gray-700 group-focus-within:text-emerald-600 transition-colors"
                  >
                    {t("joinForm.experience")}
                  </Label>
                  <Textarea
                    id="experience"
                    placeholder="Tell us about your previous volunteering experience"
                    rows={4}
                    className="text-lg border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all duration-300 rounded-xl resize-none"
                  />
                </div>

                <div className="space-y-4 group">
                  <Label
                    htmlFor="message"
                    className="text-lg font-semibold text-gray-700 group-focus-within:text-emerald-600 transition-colors"
                  >
                    {t("joinForm.message")}
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us why you want to volunteer and what motivates you"
                    rows={5}
                    className="text-lg border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all duration-300 rounded-xl resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitted}
                  className="w-full h-16 text-xl bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 hover:from-emerald-700 hover:via-blue-700 hover:to-purple-700 transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl hover:shadow-2xl rounded-xl relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="mr-3 h-7 w-7 animate-bounce" />
                      Application Submitted!
                      <Sparkles className="ml-3 h-7 w-7 animate-spin" />
                    </>
                  ) : (
                    <>
                      <Heart className="mr-3 h-7 w-7 group-hover:scale-110 transition-transform" />
                      {t("joinForm.submit")}
                      <Sparkles className="ml-3 h-7 w-7 group-hover:rotate-12 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  )
}

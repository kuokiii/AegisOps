"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin } from "lucide-react"

const teamMembers = [
  {
    name: "Harsha Kudaravalli",
    title: "CEO",
    image: "/harsha.jpeg",
    linkedin: "https://www.linkedin.com/in/kudaravallister/",
  },
  {
    name: "Shireesha Chintalapati",
    title: "Chief Product Officer",
    image: "/shireesha.jpeg",
    linkedin: "https://www.linkedin.com/in/shireesha-chintalapati-ab946896/",
  },
  {
    name: "Murthy Malladi",
    title: "CAIO - Chief AI Officer",
    image: "/murthy.jpeg",
    linkedin: "https://www.linkedin.com/in/murthy-malladi-19220025/",
  },
]

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              Meet Our <span className="gradient-text">Team</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up">
              The passionate innovators behind AegisOps, dedicated to revolutionizing IT operations through intelligent
              automation.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {teamMembers.map((member, index) => (
              <Card
                key={member.name}
                className="w-full max-w-sm hover-lift hover-glow border-gray-200 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover border-4 border-purple-100"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-purple-600 font-medium mb-4">{member.title}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-purple-600 text-purple-600 hover:bg-purple-50 hover:border-purple-700 focus-ring bg-transparent transition-colors"
                    onClick={() => window.open(member.linkedin, "_blank")}
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  )
}

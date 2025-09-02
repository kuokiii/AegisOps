import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, TrendingUp, Award, Building2, Globe, ArrowRight } from "lucide-react"

export default function AboutPage() {
  const milestones = [
    {
      year: "2025",
      title: "Company Founded",
      description: "AegisOps founded with vision to transform IT operations through agentic AI",
    },
    {
      year: "2025",
      title: "Design Partners Secured",
      description: "Fortune 500 Manufacturing/HiTech Client and Indian Communications Giant agreed for pilots",
    },
    {
      year: "2025",
      title: "MVP Development",
      description: "Building dual-agent system with SOP automation, targeting 70%+ manual effort reduction",
    },
    {
      year: "2025",
      title: "Pilot Program Launch",
      description: "60-90 days to value pilot program with measurable KPIs and ROI validation",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20">
              <Building2 className="w-4 h-4 mr-2" />
              About AegisOps
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Transforming Enterprise IT with <span className="gradient-text">Agentic AI</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're building the future of IT operations where AI agents don't just monitor—they act, resolve, and
              learn. Our mission is to reduce manual IT operational effort by 70%+ through intelligent automation.
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover-lift animate-scale-in">
              <div className="text-3xl font-bold text-primary mb-2">$1B</div>
              <div className="text-gray-600">Serviceable Market</div>
            </div>
            <div
              className="text-center p-6 bg-white rounded-xl shadow-lg hover-lift animate-scale-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="text-3xl font-bold text-primary mb-2">70%+</div>
              <div className="text-gray-600">Effort Reduction</div>
            </div>
            <div
              className="text-center p-6 bg-white rounded-xl shadow-lg hover-lift animate-scale-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="text-3xl font-bold text-primary mb-2">&lt;6mo</div>
              <div className="text-gray-600">Payback Period</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Enterprise IT is at a breaking point. With 60% of enterprises struggling to hire skilled IT ops staff
                and admins spending 20-30 hours per week on repetitive tasks, the industry needs a fundamental shift.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We're building AI agents that don't just observe—they act. Our agentic AI platform reduces manual
                operational effort by 70%+ while maintaining enterprise-grade security and compliance.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-gray-700">
                  <Target className="w-5 h-5 text-primary mr-2" />
                  <span>Solve the talent crunch</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <TrendingUp className="w-5 h-5 text-primary mr-2" />
                  <span>Reduce operational costs</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Award className="w-5 h-5 text-primary mr-2" />
                  <span>Improve service reliability</span>
                </div>
              </div>
            </div>
            <div className="relative">
              
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      

      {/* Market Opportunity */}
      

      {/* Footer */}
      <Footer />
      <ScrollToTop />
    </main>
  )
}

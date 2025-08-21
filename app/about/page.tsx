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
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Now?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-gray-900">LLM + RAG Maturity</div>
                      <div className="text-gray-600">Context-aware reasoning is now reliable with guardrails</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-gray-900">Economic Pressure</div>
                      <div className="text-gray-600">20-40% OPEX cuts demanded across IT departments</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-gray-900">Hybrid AI Demand</div>
                      <div className="text-gray-600">Regulated sectors require on-prem AI execution</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-gray-900">Incumbent Gap</div>
                      <div className="text-gray-600">Existing tools only observe, they don't act</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From inception to market validation, we're building the future of IT operations.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20 hidden md:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="flex-1 md:pr-8">
                    <Card
                      className={`${index % 2 === 0 ? "md:ml-auto md:text-right" : "md:mr-auto md:text-left"} max-w-md bg-white shadow-lg`}
                    >
                      <CardContent className="p-6">
                        <div className="text-primary font-bold text-lg mb-2">{milestone.year}</div>
                        <h3 className="font-bold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:block w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>

                  <div className="flex-1 md:pl-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Market Opportunity</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Massive market opportunity with proven unit economics and clear path to scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6 text-center">
                <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-2xl font-bold text-gray-900 mb-2">$30-50B</div>
                <div className="text-gray-600">Expandable TAM</div>
                <div className="text-sm text-gray-500 mt-2">Across databases, Kubernetes, network</div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6 text-center">
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-2xl font-bold text-gray-900 mb-2">$1B</div>
                <div className="text-gray-600">Beachhead SOM</div>
                <div className="text-sm text-gray-500 mt-2">Enterprise customers</div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-2xl font-bold text-gray-900 mb-2">$100K</div>
                <div className="text-gray-600">Annual Contract Value</div>
                <div className="text-sm text-gray-500 mt-2">100-500 VMs per customer</div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-2xl font-bold text-gray-900 mb-2">80%+</div>
                <div className="text-gray-600">Gross Margin</div>
                <div className="text-sm text-gray-500 mt-2">Highly scalable business model</div>
              </CardContent>
            </Card>
          </div>

          {/* Growth Path */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Growth Trajectory</h3>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-xl font-bold text-primary">Year 1</div>
                <div className="text-2xl font-bold text-gray-900">$1M ARR</div>
              </div>
              <div className="hidden md:block">
                <ArrowRight className="w-8 h-8 text-primary" />
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-xl font-bold text-primary">Year 2</div>
                <div className="text-2xl font-bold text-gray-900">$5M ARR</div>
              </div>
              <div className="hidden md:block">
                <ArrowRight className="w-8 h-8 text-primary" />
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-xl font-bold text-primary">Year 3</div>
                <div className="text-2xl font-bold text-gray-900">$15M+ ARR</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      <ScrollToTop />
    </main>
  )
}

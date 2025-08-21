import { Card, CardContent } from "@/components/ui/card"
import { Clock, DollarSign, Shield, TrendingUp, Users, Zap } from "lucide-react"

export default function ValuePropsSection() {
  const benefits = [
    {
      icon: Clock,
      title: "70%+ Effort Reduction",
      description:
        "Automate repetitive IT tasks and reduce manual intervention from 20-30 hours/week to just a few hours.",
      metric: "20-30 hrs → 2-3 hrs/week",
    },
    {
      icon: Zap,
      title: "Sub-30 Minute Resolution",
      description: "From ticket intake to resolution in under 30 minutes with our agentic AI workflow.",
      metric: "4-8 hrs → <30 min MTTR",
    },
    {
      icon: DollarSign,
      title: "$500K+ Annual Savings",
      description: "Reduce operational costs and prevent costly outages that average $843K per incident.",
      metric: "$500K+ savings potential",
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "SOC 2 compliant with zero PII exposure. On-prem deployment for regulated industries.",
      metric: "SOC 2 + Zero PII exposure",
    },
    {
      icon: Users,
      title: "Address Talent Shortage",
      description: "60% of enterprises struggle to hire skilled IT ops staff. Our AI agents fill the gap.",
      metric: "Solve 60% talent crunch",
    },
    {
      icon: TrendingUp,
      title: "Proven ROI",
      description: "6-month payback period with 80%+ gross margins and measurable business impact.",
      metric: "<6 month payback",
    },
  ]

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Enterprise IT Teams Choose <span className="gradient-text">AegisOps</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your IT operations with AI agents that don't just monitor—they act, resolve, and learn.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{benefit.description}</p>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  {benefit.metric}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          
        </div>
      </div>
    </section>
  )
}

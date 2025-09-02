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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Why <span className="gradient-text">AegisOps</span>
          </h2>
          <p className="text-gray-600 mt-3">Tangible outcomes across efficiency, reliability, and security.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => {
            const Icon = b.icon
            return (
              <Card key={i} className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{b.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-3">{b.description}</p>
                  <div className="text-sm text-gray-500">{b.metric}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

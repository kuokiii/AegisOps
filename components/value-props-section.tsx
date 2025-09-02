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
    
  )
}

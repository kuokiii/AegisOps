import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, X, Star, ArrowRight, Calculator, TrendingUp, Clock, Target, Award } from "lucide-react"

export default function PricingPage() {
  const pricingTiers = [
    {
      name: "Pilot Program",
      description: "60-90 days to value with design partner benefits",
      price: "Custom",
      period: "60-90 days",
      popular: false,
      features: [
        "Up to 100 VMs",
        "Core automation agents",
        "Basic integrations (VMware, ServiceNow)",
        "Standard support",
        "Pilot success metrics",
        "Migration planning",
        "Training included",
        "Success guarantee",
      ],
      limitations: ["Limited to pilot scope", "Basic reporting", "Standard SLA"],
      cta: "Start Pilot",
      badge: "Design Partner",
    },
    {
      name: "Enterprise",
      description: "Full-scale deployment for enterprise IT operations",
      price: "$100K",
      period: "per year",
      popular: true,
      features: [
        "100-500 VMs included",
        "Full agent orchestration",
        "All integrations",
        "24/7 premium support",
        "Advanced analytics",
        "Custom playbooks",
        "Dedicated CSM",
        "SOC 2 compliance",
        "On-premises deployment",
        "API access",
        "Advanced reporting",
        "Training & certification",
      ],
      limitations: [],
      cta: "Get Started",
      badge: "Most Popular",
    },
    {
      name: "Enterprise Plus",
      description: "Large-scale deployment with advanced features",
      price: "Custom",
      period: "per year",
      popular: false,
      features: [
        "500+ VMs",
        "Multi-tenant architecture",
        "Custom integrations",
        "White-glove support",
        "Advanced AI models",
        "Custom development",
        "Dedicated infrastructure",
        "Advanced compliance",
        "Multi-region deployment",
        "Priority feature requests",
        "Executive support",
        "Custom SLAs",
      ],
      limitations: [],
      cta: "Contact Sales",
      badge: "Enterprise Scale",
    },
  ]

  const roiMetrics = [
    {
      metric: "Average Annual Savings",
      value: "$500K+",
      description: "Typical cost reduction in first year",
      icon: TrendingUp,
    },
    {
      metric: "Payback Period",
      value: "<6 months",
      description: "Time to recover initial investment",
      icon: Clock,
    },
    {
      metric: "ROI in Year 1",
      value: "5x",
      description: "Return on investment multiplier",
      icon: Target,
    },
    {
      metric: "Gross Margin",
      value: ">80%",
      description: "Highly scalable business model",
      icon: Award,
    },
  ]

  const costSavings = [
    {
      category: "Reduced Downtime",
      before: "$843K per incident",
      after: "90% reduction",
      savings: "$750K+ annually",
    },
    {
      category: "Manual Labor",
      before: "20-30 hrs/week per admin",
      after: "2-3 hrs/week per admin",
      savings: "$150K+ per admin annually",
    },
    {
      category: "Talent Acquisition",
      before: "$120K+ per unfilled position",
      after: "AI agents fill gaps",
      savings: "$240K+ per avoided hire",
    },
    {
      category: "Compliance Costs",
      before: "Manual audit preparation",
      after: "Automated compliance",
      savings: "$100K+ annually",
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
              <Calculator className="w-4 h-4 mr-2" />
              Enterprise Pricing
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Transparent Pricing for <span className="gradient-text">Enterprise Scale</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Predictable, value-based pricing designed for enterprise IT operations. Start with a pilot program and
              scale to full deployment.
            </p>
          </div>

          {/* ROI Metrics */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {roiMetrics.map((metric, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg bg-white text-center hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <metric.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-2xl font-bold text-gray-900 mb-2">{metric.value}</div>
                  <div className="font-semibold text-gray-900 mb-2">{metric.metric}</div>
                  <div className="text-sm text-gray-600">{metric.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Deployment Model</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From pilot programs to enterprise-wide deployments, we have a solution that fits your scale and timeline.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative border-2 ${
                  tier.popular
                    ? "border-primary bg-primary/5 shadow-xl scale-105"
                    : "border-gray-200 bg-white shadow-lg"
                } transition-all duration-300 hover:shadow-xl`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-white px-4 py-1">
                      <Star className="w-4 h-4 mr-1" />
                      {tier.badge}
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-6">
                  {!tier.popular && (
                    <Badge variant="outline" className="w-fit mx-auto mb-4">
                      {tier.badge}
                    </Badge>
                  )}
                  <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                    {tier.period && <span className="text-gray-600 ml-2">{tier.period}</span>}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Included Features:</h4>
                    <div className="space-y-2">
                      {tier.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {tier.limitations.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Limitations:</h4>
                      <div className="space-y-2">
                        {tier.limitations.map((limitation, idx) => (
                          <div key={idx} className="flex items-center">
                            <X className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                            <span className="text-gray-500">{limitation}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Savings Breakdown */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Cost Savings <span className="gradient-text">Breakdown</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See exactly how AegisOps delivers $500K+ in annual savings across key cost centers.
            </p>
          </div>

          <div className="space-y-6">
            {costSavings.map((saving, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-4 gap-6 items-center">
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{saving.category}</h3>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-500 mb-1">Before</div>
                      <div className="font-semibold text-red-600">{saving.before}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-500 mb-1">After</div>
                      <div className="font-semibold text-green-600">{saving.after}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-500 mb-1">Annual Savings</div>
                      <div className="font-bold text-primary text-lg">{saving.savings}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 max-w-md mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Total Annual Savings</h3>
                <div className="text-4xl font-bold text-primary mb-4">$500K+</div>
                <p className="text-gray-600">Typical first-year cost reduction</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about AegisOps pricing and deployment.</p>
          </div>

          <div className="space-y-8">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <h3 className="font-bold text-gray-900 mb-3">What's included in the $100K annual contract?</h3>
                <p className="text-gray-600">
                  The Enterprise tier includes full platform access for 100-500 VMs, all integrations, 24/7 support,
                  dedicated customer success manager, training, and SOC 2 compliance. Additional VMs can be added at
                  $200 per VM annually.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <h3 className="font-bold text-gray-900 mb-3">How does the pilot program work?</h3>
                <p className="text-gray-600">
                  Our 60-90 day pilot program is designed for design partners to validate ROI before full deployment.
                  Pilot costs are credited toward your annual contract if you proceed to full deployment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <h3 className="font-bold text-gray-900 mb-3">What's the typical payback period?</h3>
                <p className="text-gray-600">
                  Most customers see full ROI within 6 months through reduced downtime, automated manual tasks, and
                  avoided hiring costs. Our average customer saves $500K+ annually.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <h3 className="font-bold text-gray-900 mb-3">Do you offer on-premises deployment?</h3>
                <p className="text-gray-600">
                  Yes, we support hybrid deployment with on-premises agents for compliance and cloud control for
                  coordination. This is included in all Enterprise and Enterprise Plus tiers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      

      {/* Footer Component */}
      <Footer />
      <ScrollToTop />
    </main>
  )
}

import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, MessageSquare, GitBranch, Search, CheckCircle, Settings, TrendingUp } from "lucide-react"

export default function HowItWorksSection() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Ticket Intake",
      description: "Via Chat UI or ITSM ticket",
      details: "Seamlessly integrate with your existing ticketing systems",
    },
    {
      icon: GitBranch,
      title: "Agentic Router",
      description: "Sends to Automation or Analysis Engine",
      details: "Intelligent routing based on incident type and complexity",
    },
    {
      icon: Search,
      title: "Analysis",
      description: "Generates analysis, remediation plan, and confidence score",
      details: "AI-powered root cause analysis with actionable insights",
    },
    {
      icon: CheckCircle,
      title: "Approval & Execution",
      description: "Approves if low risk, auto-fixes if high confidence",
      details: "Human-in-the-loop for critical decisions, automation for routine tasks",
    },
    {
      icon: Settings,
      title: "Remediation",
      description: "Executes via secure tool calling/API",
      details: "Safe, auditable actions with full compliance tracking",
    },
    {
      icon: TrendingUp,
      title: "Learn & Improve",
      description: "Logs outcome; fine-tunes model",
      details: "Continuous learning from every interaction and outcome",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It Works: Ticket to Resolution in <span className="gradient-text">&lt;30 Minutes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our agentic AI workflow transforms incident management from hours to minutes with intelligent automation and
            human oversight.
          </p>
        </div>

        {/* Process Flow */}
        <div className="relative">
          {/* Desktop Flow */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-6 gap-4 mb-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="border-2 border-gray-100 hover:border-primary transition-colors duration-300 bg-white">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{step.description}</p>
                      <p className="text-xs text-gray-500">{step.details}</p>
                    </CardContent>
                  </Card>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                      <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                        <ArrowRight className="w-2 h-2 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Flow */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="border-2 border-gray-100 hover:border-primary transition-colors duration-300 bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{step.description}</p>
                        <p className="text-xs text-gray-500">{step.details}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowRight className="w-5 h-5 text-primary rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-purple-50 rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">&lt;30min</div>
            <div className="text-gray-600">Average Resolution Time</div>
          </div>
          <div className="p-6 bg-green-50 rounded-xl">
            <div className="text-3xl font-bold text-green-600">94%</div>
            <div className="text-gray-600">Automation Success Rate</div>
          </div>
          <div className="p-6 bg-blue-50 rounded-xl">
            <div className="text-3xl font-bold text-blue-600">70%+</div>
            <div className="text-gray-600">Manual Effort Reduction</div>
          </div>
        </div>
      </div>
    </section>
  )
}

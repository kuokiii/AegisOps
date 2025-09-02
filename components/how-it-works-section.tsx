import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, GitBranch, Search, CheckCircle, Settings, TrendingUp } from "lucide-react"

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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-gray-600 mt-3">From intake to verified remediation—fully auditable.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <Card key={i} className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-2">{s.description}</p>
                  <div className="text-sm text-gray-500">{s.details}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

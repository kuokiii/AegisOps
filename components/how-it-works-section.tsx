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

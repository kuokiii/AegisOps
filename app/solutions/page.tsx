import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Clock,
  DollarSign,
  Shield,
  AlertTriangle,
  TrendingDown,
  CheckCircle,
  ArrowRight,
  Target,
  Zap,
  FileText,
  Server,
  Database,
  Network,
  Settings,
  Eye,
  Lock,
  Timer,
  TrendingUp,
} from "lucide-react"

export default function SolutionsPage() {
  const painPoints = [
    {
      icon: Users,
      title: "Talent Crunch",
      problem: "60% of enterprises struggle to hire skilled IT ops staff",
      impact: "Critical skills shortage leading to overworked teams and delayed projects",
      cost: "Average $120K+ per unfilled position",
      solution: "AI agents that perform expert-level IT operations",
      outcome: "Eliminate dependency on scarce talent",
    },
    {
      icon: Clock,
      title: "Time Drain",
      problem: "Admins spend 20-30 hours/week on repetitive tasks",
      impact: "75% of IT time wasted on manual, routine operations",
      cost: "$150K+ annual cost per admin in wasted time",
      solution: "70%+ automation of routine IT operations",
      outcome: "Reduce manual effort from 30hrs to 2-3hrs/week",
    },
    {
      icon: DollarSign,
      title: "Cost of Failure",
      problem: "Average outage costs $843K with 4-8 hour MTTR",
      impact: "Downtime destroys revenue and customer trust",
      cost: "$843K average cost per major incident",
      solution: "Sub-30 minute incident resolution",
      outcome: "Reduce MTTR by 90%+ and prevent costly outages",
    },
    {
      icon: Shield,
      title: "Compliance Risk",
      problem: "Manual processes increase audit exposure in regulated sectors",
      impact: "Compliance failures lead to fines and regulatory scrutiny",
      cost: "Average $14.8M per compliance breach",
      solution: "Automated compliance with full audit trails",
      outcome: "100% audit-ready operations with zero manual gaps",
    },
  ]

  const useCases = [
    {
      title: "VMware Infrastructure Management",
      description: "Automated VM provisioning, scaling, and maintenance",
      industry: "Enterprise IT",
      challenges: ["Manual VM management", "Resource optimization", "Performance monitoring"],
      solution: "AI agents automatically manage VM lifecycle, optimize resources, and resolve performance issues",
      results: ["80% reduction in manual VM tasks", "40% better resource utilization", "90% faster issue resolution"],
      icon: Server,
    },
    {
      title: "Database Operations Automation",
      description: "Intelligent database monitoring, optimization, and incident response",
      industry: "Financial Services",
      challenges: ["Database performance issues", "Manual backup management", "Compliance reporting"],
      solution: "Automated database health monitoring, performance tuning, and compliance documentation",
      results: ["95% reduction in database incidents", "60% faster query performance", "100% compliance coverage"],
      icon: Database,
    },
    {
      title: "Network Infrastructure Monitoring",
      description: "Proactive network issue detection and automated remediation",
      industry: "Telecommunications",
      challenges: ["Network latency issues", "Manual troubleshooting", "Service degradation"],
      solution: "AI-powered network analysis with automated issue detection and resolution",
      results: ["70% reduction in network incidents", "50% faster MTTR", "99.9% uptime achievement"],
      icon: Network,
    },
    {
      title: "ITSM Integration & Automation",
      description: "Seamless integration with ServiceNow, Jira, and other ITSM platforms",
      industry: "Manufacturing",
      challenges: ["Manual ticket processing", "Inconsistent resolutions", "Long resolution times"],
      solution: "Automated ticket triage, intelligent routing, and consistent resolution workflows",
      results: ["85% tickets auto-resolved", "60% faster resolution", "95% consistency rate"],
      icon: Settings,
    },
  ]

  const industries = [
    {
      name: "Financial Services",
      challenges: ["Regulatory compliance", "24/7 uptime requirements", "Data security"],
      solutions: ["Automated compliance reporting", "Proactive monitoring", "Zero-trust security"],
      results: "99.99% uptime, 100% audit compliance, 70% cost reduction",
    },
    {
      name: "Healthcare",
      challenges: ["HIPAA compliance", "Critical system availability", "Data privacy"],
      solutions: ["Automated HIPAA workflows", "Predictive maintenance", "Secure data handling"],
      results: "Zero compliance violations, 50% faster incident response, 80% cost savings",
    },
    {
      name: "Manufacturing",
      challenges: ["Production system uptime", "Supply chain integration", "Operational efficiency"],
      solutions: ["Predictive maintenance", "Automated integration", "Performance optimization"],
      results: "95% uptime improvement, 60% faster integration, 40% efficiency gains",
    },
    {
      name: "Technology",
      challenges: ["Rapid scaling", "DevOps automation", "Multi-cloud management"],
      solutions: ["Auto-scaling infrastructure", "CI/CD automation", "Cloud orchestration"],
      results: "10x faster scaling, 80% deployment automation, 50% cloud cost reduction",
    },
  ]

  const beforeAfter = {
    before: {
      title: "Before AegisOps",
      items: [
        { icon: AlertTriangle, text: "4-8 hour MTTR", color: "text-red-600" },
        { icon: Users, text: "60% talent shortage", color: "text-red-600" },
        { icon: Clock, text: "20-30 hrs/week manual work", color: "text-red-600" },
        { icon: DollarSign, text: "$843K average outage cost", color: "text-red-600" },
        { icon: FileText, text: "Manual compliance processes", color: "text-red-600" },
        { icon: TrendingDown, text: "Reactive problem solving", color: "text-red-600" },
      ],
    },
    after: {
      title: "After AegisOps",
      items: [
        { icon: Timer, text: "<30 min MTTR", color: "text-green-600" },
        { icon: CheckCircle, text: "AI agents fill skill gaps", color: "text-green-600" },
        { icon: Zap, text: "2-3 hrs/week manual work", color: "text-green-600" },
        { icon: TrendingUp, text: "$500K+ annual savings", color: "text-green-600" },
        { icon: Lock, text: "Automated compliance", color: "text-green-600" },
        { icon: Eye, text: "Proactive issue prevention", color: "text-green-600" },
      ],
    },
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20">
              <Target className="w-4 h-4 mr-2" />
              Enterprise Solutions
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Solve Critical IT Challenges with <span className="gradient-text">Agentic AI</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Address the four major pain points crushing enterprise IT: talent shortage, time waste, costly failures,
              and compliance risks. Our AI agents deliver measurable solutions.
            </p>
          </div>

          {/* Problem Overview */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {painPoints.map((pain, index) => (
              <Card
                key={index}
                className="border-2 border-red-100 bg-red-50/50 hover:shadow-lg transition-all hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <pain.icon className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">{pain.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{pain.problem}</p>
                  <Badge variant="destructive" className="text-xs">
                    {pain.cost}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before vs After */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Transform Your IT Operations: <span className="gradient-text">Before vs After</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the dramatic transformation AegisOps delivers to enterprise IT operations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Before */}
            <Card className="border-2 border-red-200 bg-red-50/30">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl text-red-700">{beforeAfter.before.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {beforeAfter.before.items.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* After */}
            <Card className="border-2 border-green-200 bg-green-50/30">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl text-green-700">{beforeAfter.after.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {beforeAfter.after.items.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Transformation Stats */}
          <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl">
              <div className="text-3xl font-bold text-primary mb-2">90%</div>
              <div className="text-gray-600">MTTR Reduction</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl">
              <div className="text-3xl font-bold text-primary mb-2">70%</div>
              <div className="text-gray-600">Effort Reduction</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl">
              <div className="text-3xl font-bold text-primary mb-2">$500K+</div>
              <div className="text-gray-600">Annual Savings</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray-600">Compliance Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How AegisOps <span className="gradient-text">Solves Each Challenge</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Targeted solutions for each critical pain point with measurable outcomes.
            </p>
          </div>

          <div className="space-y-12">
            {painPoints.map((pain, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Problem Side */}
                  <div className="p-8 bg-red-50/50 border-r border-gray-100">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                        <pain.icon className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{pain.title}</h3>
                        <p className="text-red-600 font-semibold">The Problem</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{pain.problem}</p>
                    <p className="text-gray-600 mb-4">{pain.impact}</p>
                    <Badge variant="destructive" className="mb-4">
                      {pain.cost}
                    </Badge>
                  </div>

                  {/* Solution Side */}
                  <div className="p-8 bg-green-50/50">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">AegisOps Solution</h3>
                        <p className="text-green-600 font-semibold">The Resolution</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{pain.solution}</p>
                    <p className="text-gray-600 mb-4">Measurable Impact:</p>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200">{pain.outcome}</Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Real-World <span className="gradient-text">Use Cases</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how AegisOps transforms specific IT operations across different enterprise environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <useCase.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{useCase.title}</CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        {useCase.industry}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-gray-600">{useCase.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Challenges:</h4>
                      <div className="space-y-1">
                        {useCase.challenges.map((challenge, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <AlertTriangle className="w-4 h-4 text-red-500 mr-2" />
                            {challenge}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-sm text-gray-600">{useCase.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                      <div className="space-y-1">
                        {useCase.results.map((result, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Industry-Specific <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored approaches for different industries with unique compliance and operational requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{industry.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Challenges:</h4>
                      <div className="space-y-1">
                        {industry.challenges.map((challenge, idx) => (
                          <div key={idx} className="text-sm text-gray-600">
                            • {challenge}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">AegisOps Solutions:</h4>
                      <div className="space-y-1">
                        {industry.solutions.map((solution, idx) => (
                          <div key={idx} className="text-sm text-gray-600">
                            • {solution}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-gray-100">
                      <h4 className="font-semibold text-gray-900 mb-2">Typical Results:</h4>
                      <p className="text-sm text-primary font-medium">{industry.results}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Calculate Your ROI</h2>
          <p className="text-xl text-gray-600 mb-8">
            See how much AegisOps can save your organization in the first year.
          </p>

          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">$500K+</div>
                  <div className="text-gray-600">Average Annual Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">&lt;6mo</div>
                  <div className="text-gray-600">Payback Period</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5x</div>
                  <div className="text-gray-600">ROI in Year 1</div>
                </div>
              </div>

              
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      

      {/* Footer */}
      <Footer />
      <ScrollToTop />
    </main>
  )
}

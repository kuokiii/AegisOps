import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Brain,
  Shield,
  Zap,
  Database,
  GitBranch,
  Settings,
  CheckCircle,
  Search,
  Lock,
  Cloud,
  Server,
  ArrowRight,
  Code,
  Layers,
  Network,
  Eye,
  Target,
  Workflow,
  BarChart3,
  Cpu,
} from "lucide-react"

export default function PlatformPage() {
  const coreComponents = [
    {
      icon: Brain,
      title: "Reasoning LLM",
      description:
        "Advanced language models with system prompts for domain-specific grounding and context-aware decision making.",
      features: ["Domain-specific fine-tuning", "System prompt grounding", "Context-aware reasoning"],
    },
    {
      icon: GitBranch,
      title: "Intelligent Routing",
      description: "Smart routing system with human-in-the-loop feedback capture and continuous learning capabilities.",
      features: ["HITL feedback capture", "Intelligent decision routing", "Continuous learning loops"],
    },
    {
      icon: Shield,
      title: "Guardrails System",
      description: "Comprehensive hallucination detection and safety mechanisms to ensure reliable AI operations.",
      features: ["Hallucination detection", "Safety mechanisms", "Confidence scoring"],
    },
    {
      icon: Database,
      title: "RAG + Vector DB",
      description: "Hybrid search combining keyword and semantic search for optimal recall and precision.",
      features: ["Keyword + semantic search", "Vector embeddings", "Metadata-driven versioning"],
    },
    {
      icon: Code,
      title: "MCP Integration",
      description: "Model Context Protocol for seamless tool integrations and extensible automation capabilities.",
      features: ["Tool calling/API execution", "Extensible integrations", "Secure automation"],
    },
    {
      icon: BarChart3,
      title: "LLM-as-a-Judge",
      description: "Advanced evaluation system with reinforcement learning and self-reflection capabilities.",
      features: ["RLHF integration", "Self-reflection", "Performance evaluation"],
    },
  ]

  const agentWorkflow = [
    {
      icon: Search,
      title: "Triage Agent",
      description: "Classifies incoming requests as Service vs Incident",
      capabilities: ["Request classification", "Priority assessment", "Routing decisions"],
    },
    {
      icon: Workflow,
      title: "Planner Agent",
      description: "Determines optimal workflow pathing and execution strategy",
      capabilities: ["Workflow planning", "Resource allocation", "Execution strategy"],
    },
    {
      icon: Settings,
      title: "Service Agent",
      description: "SOP-driven automation covering 70% of standard incidents",
      capabilities: ["SOP execution", "Standard procedures", "Automated resolution"],
    },
    {
      icon: Zap,
      title: "Executor Agent",
      description: "Executes actions via RAG + MCP with secure tool calling",
      capabilities: ["Action execution", "Tool integration", "Secure operations"],
    },
    {
      icon: CheckCircle,
      title: "Verifier Agent",
      description: "Confirms remediation using SOPs and historical data",
      capabilities: ["Solution verification", "Quality assurance", "Outcome validation"],
    },
  ]

  const securityFeatures = [
    {
      icon: Lock,
      title: "Zero PII Exposure",
      description: "Complete data privacy with no personal information exposure or exfiltration.",
    },
    {
      icon: Shield,
      title: "SOC 2 Compliance",
      description: "Enterprise-grade security standards with ongoing SOC 2 certification process.",
    },
    {
      icon: Eye,
      title: "Audit Trails",
      description: "Comprehensive logging and traceability for all AI actions and decisions.",
    },
    {
      icon: Server,
      title: "Hybrid Deployment",
      description: "On-premises agents for compliance with cloud control for coordination.",
    },
  ]

  const integrations = [
    { name: "VMware vSphere", category: "Infrastructure", status: "Full Support" },
    { name: "Kubernetes", category: "Container Orchestration", status: "Roadmap" },
    { name: "ServiceNow", category: "ITSM", status: "Full Support" },
    { name: "Splunk", category: "Observability", status: "Full Support" },
    { name: "Datadog", category: "Monitoring", status: "Full Support" },
    { name: "PagerDuty", category: "Incident Management", status: "Full Support" },
    { name: "Ansible", category: "Automation", status: "Full Support" },
    { name: "Terraform", category: "Infrastructure as Code", status: "Partial Support" },
    { name: "AWS", category: "Cloud Platform", status: "Roadmap" },
    { name: "Azure", category: "Cloud Platform", status: "Roadmap" },
    { name: "GCP", category: "Cloud Platform", status: "Roadmap" },
    { name: "Database Systems", category: "Data Management", status: "Partial Support" },
  ]

  const roadmapPhases = [
    {
      phase: "Phase 1 (MVP)",
      timeline: "Q0-Q2 2025",
      title: "Foundation & Core Automation",
      features: [
        "Dual-agent system with SOP automation",
        "Logfire and Qdrant integration",
        "Redis caching and context management",
        "VMware and Database support",
      ],
      status: "In Progress",
    },
    {
      phase: "Phase 2",
      timeline: "Q2-Q4 2025",
      title: "Multi-Agent Orchestration",
      features: [
        "Multi-agent orchestration system",
        "Make/Metoro integrations",
        "Enhanced HITL workflows",
        "Pilot program execution",
      ],
      status: "Planned",
    },
    {
      phase: "Phase 3",
      timeline: "Q1-Q2 2026",
      title: "Advanced AI & Compliance",
      features: [
        "Agentic RAG with memory",
        "Compliance frameworks",
        "Advanced evaluation systems",
        "Inference optimizations",
      ],
      status: "Future",
    },
    {
      phase: "Phase 4",
      timeline: "Q3-Q4 2026",
      title: "Enterprise Ecosystem",
      features: [
        "Advanced multi-agent systems",
        "Temporal memory management",
        "Full ecosystem expansion",
        "Marketplace integrations",
      ],
      status: "Future",
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
              <Cpu className="w-4 h-4 mr-2" />
              AegisOps Platform
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              <span className="gradient-text">Enterprise-Grade</span> Agentic AI Platform
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Defensible, enterprise-grade AI technology with proprietary orchestration, domain-specific models, and
              hybrid architecture designed for mission-critical IT operations.
            </p>
          </div>

          {/* Key Platform Stats */}
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover-lift animate-scale-in">
              <div className="text-3xl font-bold text-primary mb-2">70%</div>
              <div className="text-gray-600">SOP Coverage</div>
            </div>
            <div
              className="text-center p-6 bg-white rounded-xl shadow-lg hover-lift animate-scale-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="text-3xl font-bold text-primary mb-2">&lt;30min</div>
              <div className="text-gray-600">Resolution Time</div>
            </div>
            <div
              className="text-center p-6 bg-white rounded-xl shadow-lg hover-lift animate-scale-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-gray-600">Uptime SLA</div>
            </div>
            <div
              className="text-center p-6 bg-white rounded-xl shadow-lg hover-lift animate-scale-in"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="text-3xl font-bold text-primary mb-2">SOC 2</div>
              <div className="text-gray-600">Compliant</div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Architecture */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Platform Architecture: <span className="gradient-text">Built for Enterprise Scale</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proprietary architecture combines advanced AI with enterprise-grade security and compliance.
            </p>
          </div>

          <Tabs defaultValue="components" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="components">Core Components</TabsTrigger>
              <TabsTrigger value="workflow">Agent Workflow</TabsTrigger>
              <TabsTrigger value="security">Security & Compliance</TabsTrigger>
              <TabsTrigger value="integrations">Integrations</TabsTrigger>
            </TabsList>

            <TabsContent value="components" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {coreComponents.map((component, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                    <CardHeader>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                          <component.icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{component.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{component.description}</p>
                      <div className="space-y-2">
                        {component.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-700">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="workflow" className="space-y-8">
              <div className="grid md:grid-cols-5 gap-6">
                {agentWorkflow.map((agent, index) => (
                  <div key={index} className="relative">
                    <Card className="border-2 border-gray-100 hover:border-primary transition-colors duration-300 bg-white h-full">
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <agent.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">{agent.title}</h3>
                        <p className="text-sm text-gray-600 mb-4">{agent.description}</p>
                        <div className="space-y-1">
                          {agent.capabilities.map((capability, idx) => (
                            <div key={idx} className="text-xs text-gray-500">
                              {capability}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Arrow */}
                    {index < agentWorkflow.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                          <ArrowRight className="w-3 h-3 text-white" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Workflow Execution</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">70%</div>
                    <div className="text-gray-600">Incidents Auto-Resolved</div>
                    <div className="text-sm text-gray-500 mt-1">SOP-driven automation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">30%</div>
                    <div className="text-gray-600">Human-in-Loop</div>
                    <div className="text-sm text-gray-500 mt-1">Complex scenarios</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">100%</div>
                    <div className="text-gray-600">Audit Trail</div>
                    <div className="text-sm text-gray-500 mt-1">Full traceability</div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="security" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {securityFeatures.map((feature, index) => (
                  <Card key={index} className="border-0 shadow-lg bg-white">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                          <feature.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                      </div>
                      <p className="text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-12 p-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Hybrid AI Architecture</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Server className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">On-Premises Agents</h4>
                      <p className="text-gray-600">For compliance and data sovereignty in regulated industries</p>
                      <ul className="mt-2 space-y-1 text-sm text-gray-500">
                        <li>• Local data processing</li>
                        <li>• Regulatory compliance</li>
                        <li>• Air-gapped environments</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Cloud className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Cloud Control</h4>
                      <p className="text-gray-600">Centralized coordination and management capabilities</p>
                      <ul className="mt-2 space-y-1 text-sm text-gray-500">
                        <li>• Global orchestration</li>
                        <li>• Model updates</li>
                        <li>• Analytics dashboard</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="integrations" className="space-y-8">
              <div className="grid gap-6">
                {["Infrastructure", "ITSM", "Observability", "Cloud Platform", "Automation", "Data Management"].map(
                  (category) => (
                    <Card key={category} className="border-0 shadow-lg bg-white">
                      <CardHeader>
                        <CardTitle className="text-xl">{category}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                          {integrations
                            .filter((integration) => integration.category === category)
                            .map((integration, index) => (
                              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <span className="font-medium text-gray-900">{integration.name}</span>
                                <Badge
                                  variant={
                                    integration.status === "Full Support"
                                      ? "default"
                                      : integration.status === "Partial Support"
                                        ? "secondary"
                                        : "outline"
                                  }
                                  className={
                                    integration.status === "Full Support"
                                      ? "bg-green-100 text-green-800"
                                      : integration.status === "Partial Support"
                                        ? "bg-yellow-100 text-yellow-800"
                                        : "bg-gray-100 text-gray-600"
                                  }
                                >
                                  {integration.status === "Full Support"
                                    ? "✅"
                                    : integration.status === "Partial Support"
                                      ? "⚠️"
                                      : "📋"}
                                </Badge>
                              </div>
                            ))}
                        </div>
                      </CardContent>
                    </Card>
                  ),
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Platform Differentiators */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Platform Differentiators: <span className="gradient-text">We Act Where Others Only Observe</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't replace monitoring tools—we act on their alerts with enterprise-grade automation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg bg-white text-center">
              <CardContent className="p-8">
                <Network className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Integration</h3>
                <p className="text-gray-600 mb-4">Unified MCP integration layer</p>
                <Badge className="bg-primary/10 text-primary">Plug-and-play extensibility</Badge>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white text-center">
              <CardContent className="p-8">
                <Layers className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Scalability</h3>
                <p className="text-gray-600 mb-4">MVP to full ecosystem</p>
                <Badge className="bg-primary/10 text-primary">Single → Multi-Agent</Badge>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white text-center">
              <CardContent className="p-8">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Enterprise-Ready</h3>
                <p className="text-gray-600 mb-4">RBAC, HITL, audit logs</p>
                <Badge className="bg-primary/10 text-primary">SOC 2 + Compliance</Badge>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white text-center">
              <CardContent className="p-8">
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Balanced Approach</h3>
                <p className="text-gray-600 mb-4">Cost, accuracy, time-to-market</p>
                <Badge className="bg-primary/10 text-primary">Optimized ROI</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Platform Roadmap</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach to building the most comprehensive agentic AI platform for enterprise IT.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roadmapPhases.map((phase, index) => (
              <Card
                key={index}
                className={`border-2 ${phase.status === "In Progress" ? "border-primary bg-primary/5" : "border-gray-200 bg-white"} shadow-lg`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      variant={
                        phase.status === "In Progress"
                          ? "default"
                          : phase.status === "Planned"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {phase.status}
                    </Badge>
                    <span className="text-sm text-gray-500">{phase.timeline}</span>
                  </div>
                  <CardTitle className="text-lg">{phase.phase}</CardTitle>
                  <p className="text-primary font-semibold">{phase.title}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {phase.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      

      {/* Footer Section */}
      <Footer />
      <ScrollToTop />
    </main>
  )
}

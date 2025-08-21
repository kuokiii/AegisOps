import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Zap, Target } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-slow will-change-opacity"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow will-change-opacity"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 hover-glow">
              <Zap className="w-4 h-4 mr-2" />
              Agentic AI Platform
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Agents that <span className="gradient-text">act</span> and not just observe
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Reduce manual IT operational effort by <span className="font-semibold text-primary">70%+</span> through
              domain-specific AI agents that resolve incidents in under 30 minutes.
            </p>

            {/* Key Benefits */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center text-gray-700 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <Shield className="w-5 h-5 text-primary mr-2" />
                <span>Enterprise-Grade Security</span>
              </div>
              <div className="flex items-center text-gray-700 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                <Target className="w-5 h-5 text-primary mr-2" />
                <span>70%+ Effort Reduction</span>
              </div>
              <div className="flex items-center text-gray-700 animate-slide-up" style={{ animationDelay: "0.4s" }}>
                <Zap className="w-5 h-5 text-primary mr-2" />
                <span>&lt;30 Min Resolution</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-slide-up" style={{ animationDelay: "0.5s" }}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg focus-ring hover-glow will-change-transform"
                asChild
              >
                <Link href="/contact">
                  Book a Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>

            {/* Social Proof */}
            <div className="text-sm text-gray-500 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              Trusted by Fortune 500 companies • SOC 2 Compliant • Zero PII Exposure
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 hover-lift">
              {/* Mock Dashboard */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">Incident Resolution Dashboard</h3>
                  <div className="flex items-center text-green-600 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    Active
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-purple-50 p-4 rounded-lg text-center hover-lift">
                    <div className="text-2xl font-bold text-primary">23</div>
                    <div className="text-sm text-gray-600">Auto-Resolved</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg text-center hover-lift">
                    <div className="text-2xl font-bold text-green-600">18min</div>
                    <div className="text-sm text-gray-600">Avg MTTR</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center hover-lift">
                    <div className="text-2xl font-bold text-blue-600">94%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover-lift">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-sm">VM Memory Alert - Resolved</span>
                    </div>
                    <span className="text-xs text-gray-500">2min ago</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover-lift">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3 animate-pulse"></div>
                      <span className="text-sm">Database Connection - Analyzing</span>
                    </div>
                    <span className="text-xs text-gray-500">Processing...</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover-lift">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-sm">Network Latency - Optimized</span>
                    </div>
                    <span className="text-xs text-gray-500">5min ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, MapPin, ArrowRight, Shield, Award, Globe } from "lucide-react"

export default function Footer() {
  const navigation = {
    product: [
      { name: "Platform", href: "/platform" },
      { name: "Solutions", href: "/solutions" },
    ],
    company: [
      { name: "About", href: "/about" },
      { name: "Team", href: "/about#team" },
    ],
    support: [{ name: "Contact", href: "/contact" }],
  }

  const certifications = [
    { name: "SOC 2", icon: Shield },
    { name: "ISO 27001", icon: Award },
    { name: "GDPR", icon: Globe },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-400">Get the latest insights on agentic AI and IT operations automation.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 flex-1"
              />
              <Button className="bg-primary hover:bg-primary-dark">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center p-1">
                <Image src="/aegisops-logo.png" alt="AegisOps Logo" width={28} height={28} className="w-7 h-7" />
              </div>
              <span className="text-xl font-bold">AegisOps</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming enterprise IT operations with agentic AI that acts, not just observes. Reduce manual effort
              by 70%+ and resolve incidents in under 30 minutes.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-3" />
                <span>info@aegisops.ai</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-3" />
                <span>Hyderabad, Telangana</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {navigation.product.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-3 mb-6">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Certifications */}
            <div>
              <h4 className="font-semibold mb-3 text-sm">Certifications</h4>
              <div className="space-y-2">
                {certifications.map((cert) => (
                  <div key={cert.name} className="flex items-center text-gray-400 text-sm">
                    <cert.icon className="w-4 h-4 mr-2" />
                    <span>{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">© 2025 AegisOps. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

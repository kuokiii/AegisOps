"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Image src="/aegisops-logo.png" alt="AegisOps Logo" width={40} height={40} className="w-10 h-10" />
            <span className="text-xl font-bold text-gray-900">AegisOps</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary transition-colors focus-ring rounded px-2 py-1">
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-primary transition-colors focus-ring rounded px-2 py-1"
            >
              About
            </Link>
            <Link
              href="/platform"
              className="text-gray-700 hover:text-primary transition-colors focus-ring rounded px-2 py-1"
            >
              Platform
            </Link>
            <Link
              href="/solutions"
              className="text-gray-700 hover:text-primary transition-colors focus-ring rounded px-2 py-1"
            >
              Solutions
            </Link>

            <Link
              href="/contact"
              className="text-gray-700 hover:text-primary transition-colors focus-ring rounded px-2 py-1"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-primary hover:bg-primary-dark focus-ring hover-glow">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary focus-ring"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-primary transition-colors focus-ring rounded px-2 py-1"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-primary transition-colors focus-ring rounded px-2 py-1"
              >
                About
              </Link>
              <Link
                href="/platform"
                className="text-gray-700 hover:text-primary transition-colors focus-ring rounded px-2 py-1"
              >
                Platform
              </Link>
              <Link
                href="/solutions"
                className="text-gray-700 hover:text-primary transition-colors focus-ring rounded px-2 py-1"
              >
                Solutions
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-primary transition-colors focus-ring rounded px-2 py-1"
              >
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent focus-ring"
                >
                  Request Demo
                </Button>
                <Button className="bg-primary hover:bg-primary-dark focus-ring">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

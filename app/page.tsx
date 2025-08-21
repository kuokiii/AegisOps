import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import ValuePropsSection from "@/components/value-props-section"
import HowItWorksSection from "@/components/how-it-works-section"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ValuePropsSection />
      <HowItWorksSection />
      <Footer />
      <ScrollToTop />
    </main>
  )
}

import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <div className="text-center space-y-6">
          <h1 className="text-6xl font-bold text-purple-600">404</h1>
          <h2 className="text-2xl font-semibold text-gray-900">Page Not Found</h2>
          <p className="text-gray-600 max-w-md">The page you're looking for doesn't exist or has been moved.</p>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  )
}


import { type NextPage } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const NotFound: NextPage = () => {
  return (
    <div className="min-h-screen bg-navy-950 text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold mb-6">404 - Page Not Found</h1>
        <p className="mb-8">The page you are looking for does not exist.</p>
        <Link href="/" className="text-blue-400 hover:text-blue-300">
          Return to Home
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default NotFound

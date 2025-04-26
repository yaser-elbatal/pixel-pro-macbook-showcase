
import { type NextPage } from 'next'
import MacBookShowcase from '@/components/MacBookShowcase'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import LatestNews from '@/components/LatestNews'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-navy-950 text-white">
      <Navbar />
      <MacBookShowcase />
      <Features />
      <HowItWorks />
      <LatestNews />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home

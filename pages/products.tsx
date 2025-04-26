
import { type NextPage } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const Products: NextPage = () => {
  return (
    <div className="min-h-screen bg-navy-950 text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-6">Our Products</h1>
        {/* Add your products page content here */}
      </div>
      <Footer />
    </div>
  )
}

export default Products

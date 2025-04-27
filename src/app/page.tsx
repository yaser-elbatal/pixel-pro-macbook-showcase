
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import LatestNews from '@/components/LatestNews'
import Newsletter from '@/components/Newsletter'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { fetchMetadata } from '@/store/slices/metadataSlice'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  try {
    // In a real app, this would be a server-side fetch
    // Here we're simulating a fetch by using the same mock data from our metadataSlice
    await new Promise(resolve => setTimeout(resolve, 200)); // Simulate network delay
    
    const metadata = {
      title: "AHLN - Revolutionary Smart Delivery System",
      description: "Experience the future of package delivery with AHLN Box. Our smart delivery system ensures secure, efficient, and accessible package management.",
      openGraph: {
        title: "AHLN - Smart Package Delivery System",
        description: "Revolutionary smart delivery system for secure and efficient package delivery",
        images: ['/lovable-uploads/953b6699-2d3b-4296-bc93-5f17a7b2d2fe.png'],
      },
      twitter: {
        title: "AHLN - Smart Package Delivery",
        description: "Revolutionizing package delivery with smart, secure technology",
        images: ['/lovable-uploads/953b6699-2d3b-4296-bc93-5f17a7b2d2fe.png'],
      },
      keywords: "AHLN, smart delivery, package security, delivery system, IoT delivery, secure package",
    };
    
    return metadata;
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return {
      title: "AHLN Box - Smart Delivery",
      description: "Experience the future of package delivery",
    };
  }
}

export default function Home() {
  return (
    <>
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold">
                WELCOME TO <span className="text-blue-400">AHLN</span>
              </h1>
              <p className="text-lg text-gray-300">
                AHLN Box provides a revolutionary smart delivery system that ensures your
                packages are secure, accessible, and delivered efficiently.
              </p>
              <div className="flex gap-4 mt-8">
                <Button className="bg-blue-500 hover:bg-blue-600 px-8">
                  Try Order
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 -m-8 rounded-full bg-gradient-radial from-blue-500/30 via-blue-800/10 to-transparent blur-xl"></div>
                <Image
                  src="/lovable-uploads/953b6699-2d3b-4296-bc93-5f17a7b2d2fe.png"
                  alt="AHLN Smart Delivery Box"
                  width={500}
                  height={500}
                  className="w-auto max-h-[500px] mx-auto object-contain relative z-10"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Features />
      <HowItWorks />
      <LatestNews />
      <Newsletter />
    </>
  )
}

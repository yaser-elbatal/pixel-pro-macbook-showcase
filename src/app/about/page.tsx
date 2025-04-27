
import { type Metadata } from 'next'
import { Button } from "@/components/ui/button"
import { File } from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "About Us - AHLN Smart Delivery System",
  description: "Learn about AHLN's mission to revolutionize package delivery with smart, secure solutions.",
}

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "/placeholder.svg",
    description: "Pioneering smart delivery solutions since 2020."
  },
  {
    name: "David Chen",
    role: "CTO",
    image: "/placeholder.svg",
    description: "Leading our technological innovations."
  },
  {
    name: "Maria Rodriguez",
    role: "Head of Operations",
    image: "/placeholder.svg",
    description: "Ensuring seamless delivery experiences."
  }
]

export default function About() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Mission
          </h1>
          <p className="text-xl text-gray-300">
            Revolutionizing package delivery with smart, secure, and efficient solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name}
              className="bg-navy-800/50 rounded-lg p-6 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Image 
                src={member.image} 
                alt={member.name} 
                width={128}
                height={128}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-center mb-2">{member.name}</h3>
              <p className="text-blue-400 text-center mb-3">{member.role}</p>
              <p className="text-gray-400 text-center">{member.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="text-gray-300">
              Founded in 2020, AHLN emerged from a simple observation: the world needed a better way to handle package deliveries. Our team of innovators and problem-solvers came together to create a revolutionary smart delivery system that ensures security, accessibility, and efficiency.
            </p>
            <Button className="bg-blue-500 hover:bg-blue-600 flex items-center gap-2">
              <File size={16} />
              Download Company Profile
            </Button>
          </div>
          <div className="relative animate-fade-in delay-100">
            <Image
              src="/placeholder.svg"
              alt="AHLN Office"
              width={600}
              height={400}
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

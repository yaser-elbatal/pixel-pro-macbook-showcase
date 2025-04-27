import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  try {
    // In a real app, this would fetch from an API endpoint for about page metadata
    await new Promise(resolve => setTimeout(resolve, 200)); // Simulate network delay
    
    return {
      title: "About Us - AHLN Smart Delivery System",
      description: "Learn more about AHLN Box and our mission to revolutionize package delivery",
      openGraph: {
        title: "About AHLN - Smart Delivery Solutions",
        description: "Discover the story behind AHLN's innovative delivery technology",
      },
    };
  } catch (error) {
    return {
      title: "About - AHLN Box",
      description: "Learn about our company",
    };
  }
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-6">About AHLN</h1>
      <p className="text-xl mb-8">
        We're revolutionizing package delivery with smart, secure technology.
      </p>
      {/* Add more content here */}
    </div>
  )
}

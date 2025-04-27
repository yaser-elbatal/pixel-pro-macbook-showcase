import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  try {
    // In a real app, this would fetch from an API endpoint for products page metadata
    await new Promise(resolve => setTimeout(resolve, 200)); // Simulate network delay
    
    return {
      title: "Our Products - AHLN Smart Delivery System",
      description: "Explore the innovative smart delivery solutions from AHLN",
      openGraph: {
        title: "AHLN Products - Smart Delivery Solutions",
        description: "Discover our range of smart delivery boxes and solutions",
      },
    };
  } catch (error) {
    return {
      title: "Products - AHLN Box",
      description: "Our product lineup",
    };
  }
}

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-6">Our Products</h1>
      <p className="text-xl mb-8">
        Explore our range of smart delivery solutions.
      </p>
      {/* Add product listings here */}
    </div>
  )
}


import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-6xl font-bold mb-6">404</h1>
      <p className="text-xl mb-8">Page not found</p>
      <Link href="/" className="text-blue-400 hover:text-blue-300 underline">
        Return to Home
      </Link>
    </div>
  )
}

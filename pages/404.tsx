
import { type NextPage } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Custom 404 page
const NotFound: NextPage = () => {
  return (
    <div className="min-h-screen bg-navy-950 text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-6xl font-bold mb-6">404</h1>
        <p className="text-xl mb-8">Page not found</p>
        <Link href="/" className="text-blue-400 hover:text-blue-300 underline">
          Return to Home
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;

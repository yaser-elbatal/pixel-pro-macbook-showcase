
import type { Metadata } from 'next'
import { Poppins, Playfair_Display } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Providers } from './providers'
import '@/styles/globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'AHLN - Revolutionary Smart Delivery System',
  description: 'Experience the future of package delivery with AHLN Box',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-navy-950 text-white">
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster />
          <Sonner />
        </Providers>
      </body>
    </html>
  )
}

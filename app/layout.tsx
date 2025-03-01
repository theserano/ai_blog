import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import LearnConnect from './home/LearnConnect'
import CustomCursor from '@/components/utilities/CustomCursor'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Future Tech',
  description: 'Explore the Frontiers of Artificial Intelligence',
  icons: {
    icon: './logo.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-[1920px] mx-auto mt-[130px]`}
      >
        <CustomCursor />
        <Navbar />
        {children}
        <LearnConnect />
        <Footer />
      </body>
    </html>
  )
}

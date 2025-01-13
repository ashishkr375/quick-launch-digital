import './globals.css'
import { Inter } from 'next/font/google'
import ContactButton from '@/components/ContactButton'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'QuickLaunch Digital - Transform Your Business Online in Just 2 Days',
  description: 'Simple, fast, and affordable websites & apps for small businesses. No tech skills required.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
        <ContactButton />
        <Toaster />
      </body>
    </html>
  )
}


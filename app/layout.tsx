import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ashtavakrah Technologies - STEM Education & Scientific Learning",
  description:
    "Leading STEM education provider launching in New Delhi, offering microcontroller workshops, AI/ML training, quantum computing, robotics, and scientific DIY kits for school students.",
  keywords:
    "STEM education, microcontroller workshops, AI ML training, quantum computing, robotics, scientific kits, New Delhi, school students",
  icons: {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7JaqAqUtEBvw8i2QQxLiYKmYwYZcT1.png",
    shortcut: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7JaqAqUtEBvw8i2QQxLiYKmYwYZcT1.png",
    apple: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7JaqAqUtEBvw8i2QQxLiYKmYwYZcT1.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7JaqAqUtEBvw8i2QQxLiYKmYwYZcT1.png"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7JaqAqUtEBvw8i2QQxLiYKmYwYZcT1.png"
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}

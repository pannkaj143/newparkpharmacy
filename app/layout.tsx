import { AuthProvider } from "@/lib/auth-context"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "New Park Pharmacy - Your Local Healthcare Partner",
  description: "Professional pharmacy services and healthcare advice in your community",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen bg-background flex flex-col")}>
        <AuthProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}


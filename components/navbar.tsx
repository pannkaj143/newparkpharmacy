"use client"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Menu, Phone, PillIcon as Prescription, UserCircle, X } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/newpark%20pharmacy%20logo-XngnKt05Ct6dxaxq4G0guauTue0GY1.png"
              alt="New Park Pharmacy Logo"
              width={150}
              height={40}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-blue-50 data-[state=open]:bg-blue-50">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] grid-cols-2 p-4 gap-4">
                      <div className="space-y-4">
                        <NavigationMenuLink asChild>
                          <a
                            href="/services/nhs"
                            className="block space-y-2 rounded-lg p-4 bg-gradient-to-br from-blue-500 to-blue-600 group hover:from-blue-600 hover:to-blue-700 transition-all"
                          >
                            <div className="text-lg font-medium text-white">NHS Services</div>
                            <p className="text-sm text-blue-100">
                              Access our comprehensive NHS pharmacy services
                            </p>
                            <ul className="space-y-1 text-sm text-white/90 list-disc list-inside pt-2 border-t border-white/20">
                              <li>Pharmacy First Services</li>
                              <li>Flu Vaccination</li>
                              <li>NHS Prescriptions</li>
                              <li>Stop Smoking Service</li>
                            </ul>
                          </a>
                        </NavigationMenuLink>
                      </div>
                      <div className="space-y-4">
                        <NavigationMenuLink asChild>
                          <a
                            href="/services/private"
                            className="block space-y-2 rounded-lg p-4 bg-gradient-to-br from-blue-500 to-blue-600 group hover:from-blue-600 hover:to-blue-700 transition-all"
                          >
                            <div className="text-lg font-medium text-white">Private Services</div>
                            <p className="text-sm text-blue-100">
                              Additional healthcare services tailored to you
                            </p>
                            <ul className="space-y-1 text-sm text-white/90 list-disc list-inside pt-2 border-t border-white/20">
                              <li>Travel Clinic</li>
                              <li>Health Checks</li>
                              <li>Private Prescriptions</li>
                              <li>Medication Review</li>
                            </ul>
                          </a>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/order-prescription" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Order Prescription
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/advice" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Health Advice
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-4">
              <Link href="/signin">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-blue-600 hover:bg-blue-700">Sign Up</Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="flex flex-col p-4 space-y-2">
            <Link
              href="/services/nhs"
              className="px-4 py-2 text-sm hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              NHS Services
            </Link>
            <Link
              href="/services/private"
              className="px-4 py-2 text-sm hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Private Services
            </Link>
            <Link
              href="/order-prescription"
              className="px-4 py-2 text-sm hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Order Prescription
            </Link>
            <Link
              href="/advice"
              className="px-4 py-2 text-sm hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Health Advice
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 text-sm hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <hr className="my-2" />
            <div className="flex gap-2">
              <Button variant="outline" className="flex-1" asChild>
                <Link href="/signin">Sign In</Link>
              </Button>
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}


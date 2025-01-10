import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/newpark%20pharmacy%20logo-XngnKt05Ct6dxaxq4G0guauTue0GY1.png"
              alt="New Park Pharmacy Logo"
              width={200}
              height={50}
              className="mb-4"
            />
            <p className="text-sm">
              Your trusted local pharmacy providing comprehensive healthcare services to our community.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/nhs" className="hover:text-blue-400 transition-colors">
                  NHS Services
                </Link>
              </li>
              <li>
                <Link href="/services/private" className="hover:text-blue-400 transition-colors">
                  Private Services
                </Link>
              </li>
              <li>
                <Link href="/order-prescription" className="hover:text-blue-400 transition-colors">
                  Order Prescription
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                020 1234 5678
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                info@newparkpharmacy.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                123 Pharmacy Street, London
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Mon - Fri: 9am - 6pm
              </li>
              <li className="pl-6">Sat: 9am - 1pm</li>
              <li className="pl-6">Sun: Closed</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} New Park Pharmacy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


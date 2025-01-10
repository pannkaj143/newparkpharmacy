import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Input placeholder="First Name" required />
              <Input placeholder="Last Name" required />
            </div>
            <Input type="email" placeholder="Email Address" required />
            <Input type="tel" placeholder="Phone Number" />
            <Textarea placeholder="Your Message" required />
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          <Card>
            <CardContent className="p-6 space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <CardTitle className="text-lg mb-1">Address</CardTitle>
                  <p className="text-gray-600">123 Pharmacy Street, London, UK, SW1A 1AA</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <CardTitle className="text-lg mb-1">Phone</CardTitle>
                  <p className="text-gray-600">+44 20 1234 5678</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <CardTitle className="text-lg mb-1">Email</CardTitle>
                  <p className="text-gray-600">info@newparkpharmacy.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <CardTitle className="text-lg mb-1">Opening Hours</CardTitle>
                  <p className="text-gray-600">Monday - Friday: 9am - 6pm</p>
                  <p className="text-gray-600">Saturday: 9am - 1pm</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}


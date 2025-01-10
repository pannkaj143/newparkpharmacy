import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plane, Shield, Clock, MapPin, Syringe } from 'lucide-react'
import Image from "next/image"

export default function TravelClinicPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Travel Clinic</h1>
      
      <section className="mb-12">
        <p className="text-lg mb-6">
          If you are travelling abroad, you may need to be vaccinated against infectious diseases. Our Travel Vaccination Service can help you. Tell us about your itinerary - where you are going, what type of accommodation you will be staying in and how long you will be there - and we'll do the rest. We'll tell you which vaccinations are recommended for your trip, when you need to have each one and then make your bespoke appointment schedule for you to receive your vaccinations.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-blue-600" />
                Travel with Confidence
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Protect yourself before your journey with our expert travel health services.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-6 h-6 text-blue-600" />
                Same Day Travel Vaccine
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Without a doubt, there is something very relaxing when there is one less appointment to remember.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <Syringe className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Yellow Fever Clinic</h3>
              <p>We are a certified Yellow Fever vaccination center. Yellow fever is a vaccine-preventable viral infection transmitted by certain species of day-biting mosquitoes.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <Plane className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Malaria Tablets</h3>
              <p>Malaria is a potentially serious parasitic infection transmitted through the bite of an infected mosquito. We provide antimalarial medication and advice.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <MapPin className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Travel Guidance</h3>
              <p>Our travel experts can provide professional advice and information for your selected travel destination to keep you safe on your holiday.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Comprehensive Protection</h3>
              <p>We offer a wide range of travel vaccines to ensure you're protected against various infectious diseases you might encounter during your travels.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Vaccine Prices and Requirements</h2>
        <p className="mb-4">We are committed to providing the best health advice and services. Please note that all our travel vaccines are subject to availability and prices may change at any time.</p>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Vaccine</TableHead>
              <TableHead>Price Per Dose</TableHead>
              <TableHead>Doses Required**</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {vaccineData.map((vaccine, index) => (
              <TableRow key={index}>
                <TableCell>{vaccine.name}</TableCell>
                <TableCell>£{vaccine.price}</TableCell>
                <TableCell>{vaccine.doses}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-sm mt-2">** Subject to prior vaccinations, full courses may not be required</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Malaria Tablets & Prices</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Malaria Tablets</TableHead>
              <TableHead>Price Per Tablet</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {malariaTabs.map((tab, index) => (
              <TableRow key={index}>
                <TableCell>{tab.name}</TableCell>
                <TableCell>£{tab.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>

      <div className="mt-12 text-center">
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
          Book Your Travel Consultation
        </Button>
      </div>
    </div>
  )
}

const vaccineData = [
  { name: "Yellow Fever + Certificate", price: 65, doses: "1" },
  { name: "Hepatitis A", price: 45, doses: "2" },
  { name: "Hepatitis B", price: 35, doses: "3" },
  { name: "Typhoid", price: 30, doses: "1" },
  { name: "Typhoid (Oral Capsule)", price: 30, doses: "1" },
  { name: "Diphtheria, Tetanus & Polio (DTP)", price: 30, doses: "1" },
  { name: "Rabies", price: 70, doses: "3" },
  { name: "Meningitis ACWY + Certificate", price: 50, doses: "1" },
  { name: "Cholera", price: 30, doses: "2" },
  { name: "Japanese Encephalitis", price: 90, doses: "2" },
  { name: "Tick Bourne Encephalitis", price: 60, doses: "3" },
  { name: "MMR Vaccine", price: 35, doses: "2" },
  { name: "Hepatitis A & B Combo", price: 65, doses: "3" },
  { name: "Meningitis B", price: 105, doses: "2" },
]

const malariaTabs = [
  { name: "Malarone", price: "3.00" },
  { name: "Atovaquone 250mg/Proguanil 100mg", price: "2.10" },
  { name: "Malarone Paediatric", price: "1.10" },
  { name: "Doxycycline", price: "0.29" },
  { name: "Lariam", price: "3.50" },
]


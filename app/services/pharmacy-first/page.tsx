import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Stethoscope, Clock, CheckCircle } from 'lucide-react'
import Link from "next/link"

export default function PharmacyFirstPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Pharmacy First</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-lg mb-6">
            The Pharmacy First service builds on the NHS Community Pharmacist Consultation Service, enabling community pharmacies to complete episodes of care for 7 common conditions following defined clinical pathways.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Benefits of Pharmacy First</h2>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Frees up GP appointments for patients who need them most</li>
            <li>Provides quicker and more convenient access to safe, high-quality healthcare</li>
            <li>Allows direct access to certain prescription medications without a GP appointment</li>
            <li>Addresses health issues before they worsen</li>
          </ul>
          <p className="mb-6">
            Launched on January 31, 2024, this service aims to improve access to primary care and make better use of community pharmacists' skills.
          </p>
          <Link href="/contact">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Contact Us for More Information
            </Button>
          </Link>
        </div>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Conditions We Can Treat</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Clinical Pathway</TableHead>
                    <TableHead>Age Range</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {conditions.map((condition, index) => (
                    <TableRow key={index}>
                      <TableCell>{condition.pathway}</TableCell>
                      <TableCell>{condition.ageRange}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-semibold">Quick Access to Treatment</h3>
              </div>
              <p>Get the care you need without waiting for a GP appointment. Our pharmacists are trained to assess and treat common conditions efficiently.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Stethoscope className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-semibold">Professional Care</h3>
              </div>
              <p>Our experienced pharmacists provide high-quality healthcare advice and treatments, ensuring you receive the right care at the right time.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

const conditions = [
  { pathway: "Acute otitis media", ageRange: "1 to 17 years" },
  { pathway: "Impetigo", ageRange: "1 year and over" },
  { pathway: "Infected insect bites", ageRange: "1 year and over" },
  { pathway: "Shingles", ageRange: "18 years and over" },
  { pathway: "Sinusitis", ageRange: "12 years and over" },
  { pathway: "Sore throat", ageRange: "5 years and over" },
  { pathway: "Uncomplicated urinary tract infections", ageRange: "Women 16-64 years" },
]


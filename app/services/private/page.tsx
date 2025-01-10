import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plane, Stethoscope, Clipboard, Tablets, HeartPulse, Activity } from 'lucide-react'

export default function PrivateServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Private Services</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {privateServices.map((service, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center space-x-4 pb-2">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <service.icon className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle>{service.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

const privateServices = [
  {
    name: "Travel Clinic",
    description: "Comprehensive travel health services including vaccinations and personalized advice.",
    icon: Plane,
  },
  {
    name: "Health Checks",
    description: "In-depth health assessments including blood pressure, cholesterol, and diabetes screening.",
    icon: Stethoscope,
  },
  {
    name: "Medication Review",
    description: "Thorough review of your medications to ensure they're working effectively for you.",
    icon: Clipboard,
  },
  {
    name: "Private Prescriptions",
    description: "Quick and discreet private prescription service for non-NHS medications.",
    icon: Tablets,
  },
  {
    name: "Weight Management",
    description: "Personalized advice and support to help you achieve and maintain a healthy weight.",
    icon: HeartPulse,
  },
  {
    name: "Allergy Testing",
    description: "Comprehensive allergy testing and advice on managing allergies.",
    icon: Activity,
  },
]


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tablets, Syringe, Stethoscope, Clipboard, TreesIcon as Lungs, HeartPulse } from 'lucide-react'

export default function NHSServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">NHS Services</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {nhsServices.map((service, index) => (
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

const nhsServices = [
  {
    name: "Pharmacy First Services",
    description: "Get advice and treatment for common conditions without seeing a GP.",
    icon: Stethoscope,
  },
  {
    name: "Flu Vaccination",
    description: "Free NHS flu jabs for eligible patients to protect against seasonal flu.",
    icon: Syringe,
  },
  {
    name: "NHS Prescriptions",
    description: "Dispense NHS prescriptions and offer advice on medications.",
    icon: Tablets,
  },
  {
    name: "New Medicine Service",
    description: "Support for patients starting a new medication for a long-term condition.",
    icon: Clipboard,
  },
  {
    name: "Stop Smoking",
    description: "Advice and support to help you quit smoking, including nicotine replacement therapy.",
    icon: Lungs,
  },
  {
    name: "Emergency Contraception Service",
    description: "Confidential advice and supply of emergency contraception when needed.",
    icon: HeartPulse,
  },
]


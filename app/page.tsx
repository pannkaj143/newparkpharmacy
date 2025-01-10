import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tablets, Clock, Phone, Truck, Syringe, Stethoscope, ShieldCheck, HeartPulse, Plane } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/90 z-10" />
        <Image
          src="/placeholder.svg?height=600&width=1200"
          alt="Pharmacy Background"
          width={1200}
          height={600}
          className="absolute inset-0 object-cover w-full h-full"
          priority
        />
        <div className="relative z-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 min-h-[600px] items-center py-16">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
                    Your Health, Our Priority
                  </h1>
                  <p className="text-xl text-blue-100 max-w-lg">
                    Experience personalized healthcare with our expert pharmacy services. From NHS prescriptions to specialized health advice, we're here for you.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link href="/order-prescription">
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                      Order Prescription
                    </Button>
                  </Link>
                  <Link href="/services/nhs">
                    <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
                      Our Services
                    </Button>
                  </Link>
                </div>
                <div className="grid sm:grid-cols-3 gap-4 pt-4">
                  <Link href="/services/pharmacy-first" className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white hover:bg-white/20 transition-colors">
                    <Stethoscope className="w-6 h-6 mb-2" />
                    <h3 className="font-medium">Pharmacy First</h3>
                    <p className="text-sm text-blue-100">Quick access to treatment</p>
                  </Link>
                  <Link href="/services/nhs-prescriptions" className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white hover:bg-white/20 transition-colors">
                    <Tablets className="w-6 h-6 mb-2" />
                    <h3 className="font-medium">NHS Prescriptions</h3>
                    <p className="text-sm text-blue-100">Easy prescription service</p>
                  </Link>
                  <Link href="/services/travel-clinic" className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white hover:bg-white/20 transition-colors">
                    <Plane className="w-6 h-6 mb-2" />
                    <h3 className="font-medium">Travel Clinic</h3>
                    <p className="text-sm text-blue-100">Travel health services</p>
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-600 rounded-full opacity-20 blur-3xl" />
                  <Image
                    src="/placeholder.svg?height=500&width=500"
                    alt="Pharmacy Services"
                    width={500}
                    height={500}
                    className="relative rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-white shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <Tablets className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">NHS Prescriptions</h3>
                  <p className="text-gray-600">Quick and easy prescription service</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Opening Hours</h3>
                  <p className="text-gray-600">Mon - Sat: 9:00 - 18:00</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <Truck className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Free Delivery</h3>
                  <p className="text-gray-600">Local prescription delivery</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Pharmacy Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of pharmacy services to support your health and wellbeing.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-6 p-4 bg-blue-50 rounded-xl w-fit">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link 
                    href={service.link} 
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Learn More →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Health Advice Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Expert Health Advice</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team of qualified pharmacists is here to provide professional advice and support.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {healthAdvice.map((advice, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <Image
                    src={advice.image}
                    alt={advice.title}
                    width={400}
                    height={300}
                    className="rounded-lg mb-4 w-full object-cover aspect-video"
                  />
                  <h3 className="font-semibold text-lg mb-2">{advice.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{advice.description}</p>
                  <Button variant="outline" className="w-full">Read More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const services = [
  {
    name: "NHS Services",
    description: "Access our range of NHS pharmacy services including prescriptions, vaccinations, and more.",
    icon: Stethoscope,
    link: "/services/nhs",
  },
  {
    name: "Private Services",
    description: "Explore our additional healthcare services, including travel clinics and health checks.",
    icon: ShieldCheck,
    link: "/services/private",
  },
  {
    name: "Prescriptions",
    description: "Quick and easy prescription services with electronic prescription options.",
    icon: Tablets,
    link: "/services/prescriptions",
  },
  {
    name: "Health Advice",
    description: "Expert health advice from our qualified pharmacists on various topics.",
    icon: HeartPulse,
    link: "/advice",
  },
  {
    name: "Travel Clinic",
    description: "Comprehensive travel health services including vaccinations and advice.",
    icon: Plane,
    link: "/services/travel-clinic",
  },
  {
    name: "Home Delivery",
    description: "Free prescription delivery service for local residents.",
    icon: Truck,
    link: "/services/delivery",
  },
]

const healthAdvice = [
  {
    title: "Winter Health Tips",
    description: "Stay healthy during the cold season with our expert advice on preventing winter illnesses.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Managing Allergies",
    description: "Learn about different types of allergies and how to manage them effectively.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Medication Safety",
    description: "Important information about medication storage and safe usage guidelines.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Healthy Living",
    description: "Tips and advice for maintaining a healthy lifestyle and preventing common health issues.",
    image: "/placeholder.svg?height=300&width=400",
  },
]


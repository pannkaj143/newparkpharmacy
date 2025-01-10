"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AppointmentForm } from "@/components/appointment-form"
import { PatientDetailsForm } from "@/components/patient-details-form"
import { VaccinationSelectionForm } from "@/components/vaccination-selection-form"

export default function BookAppointmentPage() {
  const [step, setStep] = useState(1)
  const [appointmentData, setAppointmentData] = useState({})

  const handleAppointmentSubmit = (data) => {
    setAppointmentData({ ...appointmentData, ...data })
    setStep(2)
  }

  const handlePatientDetailsSubmit = (data) => {
    setAppointmentData({ ...appointmentData, ...data })
    if (appointmentData.service === "Travel Clinic") {
      setStep(3)
    } else {
      // Submit appointment
      console.log("Appointment booked:", { ...appointmentData, ...data })
      // Here you would typically send this data to your backend
    }
  }

  const handleVaccinationSubmit = (data) => {
    setAppointmentData({ ...appointmentData, ...data })
    // Submit appointment
    console.log("Appointment booked:", { ...appointmentData, ...data })
    // Here you would typically send this data to your backend
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Book an Appointment</h1>
      <Card>
        <CardHeader>
          <CardTitle>Step {step} of {appointmentData.service === "Travel Clinic" ? "3" : "2"}</CardTitle>
        </CardHeader>
        <CardContent>
          {step === 1 && <AppointmentForm onSubmit={handleAppointmentSubmit} />}
          {step === 2 && <PatientDetailsForm onSubmit={handlePatientDetailsSubmit} />}
          {step === 3 && <VaccinationSelectionForm onSubmit={handleVaccinationSubmit} />}
        </CardContent>
      </Card>
    </div>
  )
}


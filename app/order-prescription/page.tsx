"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function OrderPrescriptionPage() {
  const [medications, setMedications] = useState([{ name: "", dosage: "", frequency: "" }])

  const addMedication = () => {
    setMedications([...medications, { name: "", dosage: "", frequency: "" }])
  }

  const updateMedication = (index: number, field: string, value: string) => {
    const updatedMedications = medications.map((med, i) => {
      if (i === index) {
        return { ...med, [field]: value }
      }
      return med
    })
    setMedications(updatedMedications)
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Order Prescription</h1>
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Prescription Request Form</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Patient Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="First Name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Last Name" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Date of Birth</Label>
                <Input id="dateOfBirth" type="date" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Textarea id="address" placeholder="Your Address" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="Phone Number" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Email Address" required />
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold">GP Details</h2>
              <div className="space-y-2">
                <Label htmlFor="gpName">GP Name</Label>
                <Input id="gpName" placeholder="GP Name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gpSurgery">GP Surgery</Label>
                <Input id="gpSurgery" placeholder="GP Surgery" required />
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Medication Details</h2>
              {medications.map((medication, index) => (
                <div key={index} className="space-y-2 p-4 border rounded-md">
                  <div className="space-y-2">
                    <Label htmlFor={`medicationName${index}`}>Medication Name</Label>
                    <Input 
                      id={`medicationName${index}`} 
                      placeholder="Medication Name" 
                      value={medication.name}
                      onChange={(e) => updateMedication(index, "name", e.target.value)}
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`medicationDosage${index}`}>Dosage</Label>
                    <Input 
                      id={`medicationDosage${index}`} 
                      placeholder="Dosage" 
                      value={medication.dosage}
                      onChange={(e) => updateMedication(index, "dosage", e.target.value)}
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`medicationFrequency${index}`}>Frequency</Label>
                    <Select 
                      onValueChange={(value) => updateMedication(index, "frequency", value)}
                      value={medication.frequency}
                    >
                      <SelectTrigger id={`medicationFrequency${index}`}>
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="once_daily">Once Daily</SelectItem>
                        <SelectItem value="twice_daily">Twice Daily</SelectItem>
                        <SelectItem value="three_times_daily">Three Times Daily</SelectItem>
                        <SelectItem value="four_times_daily">Four Times Daily</SelectItem>
                        <SelectItem value="as_needed">As Needed</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              ))}
              <Button type="button" variant="outline" onClick={addMedication}>
                Add Another Medication
              </Button>
            </div>

            <div className="space-y-2">
              <Label htmlFor="additionalNotes">Additional Notes</Label>
              <Textarea id="additionalNotes" placeholder="Any additional information or special requests" />
            </div>

            <Button type="submit" className="w-full">Submit Prescription Request</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}


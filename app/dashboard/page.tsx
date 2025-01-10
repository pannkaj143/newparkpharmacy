"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useRouter } from "next/navigation"

// Mock appointment data
const mockAppointments = [
  { id: 1, patientName: "John Doe", service: "NHS Service", date: "2023-06-15", time: "10:00", status: "Pending" },
  { id: 2, patientName: "Jane Smith", service: "Travel Clinic", date: "2023-06-16", time: "14:00", status: "Approved" },
  { id: 3, patientName: "Bob Johnson", service: "Pharmacy Consultation", date: "2023-06-17", time: "11:00", status: "Rejected" },
]

export default function DashboardPage() {
  const { user, logout } = useAuth()
  const router = useRouter()
  const [appointments, setAppointments] = useState(mockAppointments)

  useEffect(() => {
    if (!user || (user.role !== 'staff' && user.role !== 'admin')) {
      router.push('/login')
    }
  }, [user, router])

  const handleStatusChange = (id: number, newStatus: string) => {
    setAppointments(appointments.map(app => 
      app.id === id ? { ...app, status: newStatus } : app
    ))
  }

  if (!user) return null

  return (
    <div className="container mx-auto px-4 py-16">
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            Staff Dashboard
            <Button onClick={logout}>Logout</Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient Name</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {appointments.map((appointment) => (
                <TableRow key={appointment.id}>
                  <TableCell>{appointment.patientName}</TableCell>
                  <TableCell>{appointment.service}</TableCell>
                  <TableCell>{appointment.date}</TableCell>
                  <TableCell>{appointment.time}</TableCell>
                  <TableCell>{appointment.status}</TableCell>
                  <TableCell>
                    <Button
                      onClick={() => handleStatusChange(appointment.id, "Approved")}
                      className="mr-2"
                      disabled={appointment.status === "Approved"}
                    >
                      Approve
                    </Button>
                    <Button
                      onClick={() => handleStatusChange(appointment.id, "Rejected")}
                      variant="destructive"
                      disabled={appointment.status === "Rejected"}
                    >
                      Reject
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}


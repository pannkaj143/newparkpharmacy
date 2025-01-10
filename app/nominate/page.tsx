import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function NominatePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Nominate Us</h1>
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Patient Nomination Form</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
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
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="Email Address" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="Phone Number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Textarea id="address" placeholder="Your Address" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nhsNumber">NHS Number (if known)</Label>
              <Input id="nhsNumber" placeholder="NHS Number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="gpName">GP Name</Label>
              <Input id="gpName" placeholder="GP Name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="gpSurgery">GP Surgery</Label>
              <Input id="gpSurgery" placeholder="GP Surgery" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="reason">Reason for Nomination</Label>
              <Textarea id="reason" placeholder="Why are you nominating us?" required />
            </div>
            <Button type="submit" className="w-full">Submit Nomination</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}


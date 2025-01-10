"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const formSchema = z.object({
  vaccines: z.array(z.string()).min(1, {
    message: "You must select at least one vaccine.",
  }),
})

const vaccines = [
  { id: "yellow-fever", name: "Yellow Fever" },
  { id: "hepatitis-a", name: "Hepatitis A" },
  { id: "hepatitis-b", name: "Hepatitis B" },
  { id: "typhoid", name: "Typhoid" },
  { id: "meningitis", name: "Meningitis ACWY" },
  { id: "rabies", name: "Rabies" },
  { id: "japanese-encephalitis", name: "Japanese Encephalitis" },
  { id: "tick-borne-encephalitis", name: "Tick-Borne Encephalitis" },
]

export function VaccinationSelectionForm({ onSubmit }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      vaccines: [],
    },
  })

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    onSubmit(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="vaccines"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Select Vaccines</FormLabel>
              </div>
              {vaccines.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="vaccines"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.name}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Book Appointment</Button>
      </form>
    </Form>
  )
}


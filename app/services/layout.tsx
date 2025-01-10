export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-white">Our Services</h1>
          <p className="mt-2 text-blue-100">
            Comprehensive healthcare services for our community
          </p>
        </div>
      </div>
      {children}
    </div>
  )
}


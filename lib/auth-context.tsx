"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

type User = {
  id: string
  name: string
  role: 'patient' | 'staff' | 'admin'
} | null

type AuthContextType = {
  user: User
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null)

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const login = async (email: string, password: string) => {
    // This is a mock login. In a real app, you'd validate against your backend
    if (email === 'staff@example.com' && password === 'password') {
      const user = { id: '1', name: 'Staff User', role: 'staff' as const }
      setUser(user)
      localStorage.setItem('user', JSON.stringify(user))
    } else if (email === 'admin@example.com' && password === 'adminpass') {
      const user = { id: '2', name: 'Admin User', role: 'admin' as const }
      setUser(user)
      localStorage.setItem('user', JSON.stringify(user))
    } else {
      throw new Error('Invalid credentials')
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}


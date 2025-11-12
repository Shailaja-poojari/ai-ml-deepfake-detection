"use client"

import { useState, useEffect, useCallback } from "react"

interface User {
  name: string
  email: string
  id: string
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Initialize auth state from localStorage
  useEffect(() => {
    const userStr = localStorage.getItem("user")
    if (userStr) {
      try {
        const userData = JSON.parse(userStr)
        setUser(userData)
        setIsLoggedIn(true)
      } catch {
        localStorage.removeItem("user")
        setIsLoggedIn(false)
      }
    }
    setIsLoading(false)
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem("user")
    setUser(null)
    setIsLoggedIn(false)
  }, [])

  const login = useCallback((userData: User) => {
    localStorage.setItem("user", JSON.stringify(userData))
    setUser(userData)
    setIsLoggedIn(true)
  }, [])

  return {
    user,
    isLoading,
    isLoggedIn,
    logout,
    login,
  }
}

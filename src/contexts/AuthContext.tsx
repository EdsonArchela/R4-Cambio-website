import React, { createContext, useEffect, useState } from 'react'
import { setCookie, parseCookies } from 'nookies'
import Router from 'next/router'

import { api } from '../services/api'

type SignInData = {
  documment: string
  password: string
}

type AuthContextType = {
  isAuthenticated: boolean
  user: string | null
  signIn: (data: SignInData) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: { children: any }) {
  const [user, setUser] = useState<string | null>(null)

  const isAuthenticated = !!user

  useEffect(() => {
    const { 'r4cambio.userauth.token': token } = parseCookies()

    if (token) {
      api.get('clients').then((response) => {
        const { documment } = response.data as { documment: string }
        setUser(documment)
      })
    }
  }, [])

  async function signIn({ documment, password }: SignInData) {
    const response = await api.post('clients/authenticate', { documment, password })

    setCookie(undefined, 'r4cambio.userauth.token', response.data.token, {
      maxAge: 60 * 60 * 1, // 1 hour
    })

    api.defaults.headers.Authorization = `Bearer ${response.data.token}`

    setUser(response.data.enterprise)

    Router.push('/dashboard')
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}

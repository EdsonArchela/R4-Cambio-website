import React, { createContext, useEffect, useState } from 'react'
import { setCookie, parseCookies } from 'nookies'
import Router from 'next/router'

import { recoverUserInformation, signInRequest } from '../services/auth'
import { api } from '../services/api'

export type User = {
  name: string
  email: string
  documment: string
}

type SignInData = {
  documment: string
  password: string
}

type AuthContextType = {
  isAuthenticated: boolean
  user: User | null
  signIn: (data: SignInData) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: { children: any }) {
  const [user, setUser] = useState<User | null>(null)

  const isAuthenticated = !!user

  useEffect(() => {
    const { 'r4cambio.userauth.token': token } = parseCookies()

    if (token) {
      recoverUserInformation().then((response) => {
        setUser(response.user)
      })
    }
  }, [])

  async function signIn({ documment, password }: SignInData) {
    const signInResponse = await signInRequest({
      documment,
      password,
    })

    setCookie(undefined, 'r4cambio.userauth.token', signInResponse.token, {
      maxAge: 60 * 60 * 1, // 1 hour
    })

    api.defaults.headers.Authorization = `Bearer ${signInResponse.token}`

    setUser(signInResponse.user)

    Router.push('/dashboard')
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}

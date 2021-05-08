/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

const api = axios.create({ baseURL: 'https://api.demo.frentecorretora.com.br/v1' })

export const correspondentLogin = async (response: NextApiResponse) => {
  const rep = await api.post('/auth/user_correspondents/sign_in', {
    email: 'edsonarchela@r4cambio.com.br',
    password: '4cambio123*',
  })
  const token: string = rep.data
  return response.json({ token })
}

export const validate = async (request: NextApiRequest, response: NextApiResponse) => {
  const { token } = request.body

  const rep = await api.post('/auth/user_correspondents/validate', {
    headers: { Authorization: `Bearer ${token}` },
  })

  return response.status(200).json({ correspondentId: rep.data.correspondent_id })
}

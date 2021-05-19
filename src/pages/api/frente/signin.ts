import type { NextApiRequest, NextApiResponse } from 'next'
import apiFrente from '../services'

type Data = {
  token: string
  // eslint-disable-next-line camelcase
  expires_at: number
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const rep = await apiFrente.post('/auth/user_correspondents/sign_in', {
    email: 'edsonarchela@r4cambio.com.br',
    password: process.env.FRENTE_CORRESPONDENT_PSW,
  })
  const token = rep.data
  return res.json(token)
}

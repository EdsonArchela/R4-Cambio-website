import type { NextApiRequest, NextApiResponse } from 'next'
import apiFrente from '../services'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { token, cpf } = req.body

  const rep = await apiFrente.post(
    '/auth/user_clients/show',
    {
      cpf,
    },
    {
      headers: { Authorization: `Bearer ${token}`, correspondent_id: 26 },
    }
  )

  const client = rep.data
  return res.json(client)
}

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import type { NextApiRequest, NextApiResponse } from 'next'
import apiFrente from '../services'

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const { token } = request.body
  await apiFrente.post(
    '/auth/user_correspondents/validate',
    {},
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  )

  return response.status(201)
}

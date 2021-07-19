/* eslint-disable import/prefer-default-export */
import axios from 'axios'
import { parseCookies } from 'nookies'

export function getAPIClient(ctx?: any) {
  const { 'r4cambio.userauth.token': token } = parseCookies(ctx)

  const api = axios.create({
    baseURL: 'http://localhost:3335',
  })

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`
  }

  return api
}

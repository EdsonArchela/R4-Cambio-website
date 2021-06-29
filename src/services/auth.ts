import { api } from './api'

type SignInRequestData = {
  documment: string
  password: string
}

const delay = (amount = 750) => new Promise((resolve) => setTimeout(resolve, amount))

export async function signInRequest(data: SignInRequestData) {
  const response = await api.post('clients/authenticate', data)

  return {
    token: response.data.token,
    user: response.data.enterprise,
  }
}

export async function recoverUserInformation() {
  await delay()

  return {
    user: {
      name: 'Diego Fernandes',
      email: 'diego@rocketseat.com.br',
      documment: '051.896.999-19',
    },
  }
}

import { useRouter } from 'next/dist/client/router'
import React, { useCallback, useEffect, useState } from 'react'
import { useSession } from 'next-auth/client'
import axios from 'axios'
// import { SimulationInputs } from '../components/FrenteSimul/FrenteSimul'

interface SignedUser {
  name?: string | null | undefined
  email?: string | null | undefined
  image?: string | null | undefined
}

const api = axios.create({ baseURL: '/api/' })

const Transaction = ({ user }: { user: SignedUser | undefined }): JSX.Element => {
  const router = useRouter()
  const inputs = router.query
  const [cpfInput, setCpfInput] = useState('')
  const [sessions] = useSession()

  useEffect(() => {
    const t = localStorage.getItem('@r4cambio-web:frente-token')
    if (t)
      api
        .post('/frente/validate', {
          token: t,
        })
        .then(() => {
          console.log('logedIn')
        })
        .catch(() => {
          api.post('/frente/signin').then((res) => {
            localStorage.setItem('@r4cambio-web:frente-token', res.data.token)
          })
        })
    else {
      api.post('/frente/signin').then((res) => {
        localStorage.setItem('@r4cambio-web:frente-token', res.data.token)
      })
    }
  }, [])

  const handleCPFSearch = useCallback(async () => {
    console.log('HANDLECPF', cpfInput)
    const token = localStorage.getItem('@r4cambio-web:frente-token')
    const { data: client }: { data: Record<string, unknown> } = await api.post('/frente/checkCpf', {
      token,
      cpf: cpfInput,
    })

    if (client) api.post('auth/updateCpf', { user: sessions?.user, cpf: cpfInput, key: client.key })

    console.log(client)
  }, [cpfInput, sessions?.user])
  console.log(user)

  console.log(inputs)
  return (
    <div className="content">
      <h1>Bem vindo {sessions?.user?.name}</h1>
      <p>
        Para realizar sua transação é necessário criar um cadastro junto à R4 Câmbio e Frente
        Corretora
      </p>

      <p>Informe seu CPF</p>
      <input
        name="cpf"
        placeholder="000.000.000-00"
        value={cpfInput}
        onChange={(event) => {
          setCpfInput(event.currentTarget.value)
        }}
      />
      <button type="button" onClick={handleCPFSearch}>
        Buscar
      </button>
    </div>
  )
}

export default Transaction

// export async function getServerSideProps(ctx) {
//   const session = await getSession(ctx)
//   if (!session) {
//     ctx.res.writeHead(302, { Location: '/api/auth/signin' })
//     ctx.res.end()
//     return {}
//   }

//   return {
//     props: {
//       user: session.user,
//     },
//   }
// }

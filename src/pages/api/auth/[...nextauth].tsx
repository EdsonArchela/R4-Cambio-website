import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Credentials({
      credentials: {
        username: { label: 'E-mail', type: 'email' },
        cpf: { label: 'CPF', type: 'text', placeholder: '000.000.000-00' },
        password: { label: 'Senha', type: 'password' },
      },
    }),
  ],

  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
})

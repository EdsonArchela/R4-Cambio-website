import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'

export default async (
  request: NextApiRequest,
  response: NextApiResponse
): Promise<NextApiResponse> => {
  sgMail.setApiKey(process.env.SENDGRIDKEY || 'undefined')

  const msg = {
    to: 'contato@r4cambio.com.br',
    from: 'edsonarchela@r4cambio.com.br',
    subject: `Mensagem de ${request.body.name} - WEBSITE`,
    text: request.body.message,
    cc: request.body.email,
    html: `<div>
    <h1>Mensagem enviada da página de Contatos</h1>
    <p>Nome: ${request.body.name}</p>
    <p>E-mail: ${request.body.email}</p>
    <p>Telefone: ${request.body.phone}</p>
    <p>Mensagem: ${request.body.message}</p>
    </div>`,
  }
  // ES6
  await sgMail.send(msg).then(
    () => {
      return response.status(200)
    },
    (error) => {
      console.error(error)

      if (error.response) {
        console.error(error.response.body)
      }
    }
  )
  return response.status(404)
}

import type { NextApiRequest, NextApiResponse } from 'next'
import { createTransport } from 'nodemailer'

export default function contact(
  request: NextApiRequest,
  response: NextApiResponse
): NextApiResponse {
  const transport = createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true,
    auth: {
      user: 'edsonarchela@r4cambio.com.br',
      pass: process.env.ZOHO_PWS,
    },
  })

  const mailData = {
    from: 'edsonarchela@r4cambio.com.br',
    to: 'edi.eeq@gmail.com',
    subject: `Mensagem de ${request.body.name}`,
    text: request.body.message,
    html: `<div>
    <p>Nome: ${request.body.name}</p>
    <p>E-mail: ${request.body.email}</p>
    <p>Telefone: ${request.body.phone}</p>
    <p>Mensagem: ${request.body.message}</p>
    </div>`,
  }

  transport.sendMail(mailData, (err) => {
    console.log(err)
  })
  return response.status(200)
}

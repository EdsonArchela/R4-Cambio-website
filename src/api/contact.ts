import type { NextApiRequest, NextApiResponse } from 'next'
import {createTransport} from 'nodemailer'

export default function (request:NextApiRequest, response:NextApiResponse) {
  const transport = createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: {
      user: 'bot@r4cambio.com.br',
      pass: process.env.ZOHO_PWS,
    },
  })

  const mailData = {
    from:'edsonarchela@r4cambio.com.br',
    to:'contato@r4cambio.com.br',
    subject:`Mensagem de ${request.body.name}`,
    text:request.body.message,
    html:`<div>
    <p>${request.body.name}</p>
    <p>${request.body.email}</p>
    <p>${request.body.phone}</p>
    <p>${request.body.message}</p>
    </div>`
  }

  transport.sendMail(mailData, (err)=>{
    console.log(err)
  })
  return response.status(200)
}

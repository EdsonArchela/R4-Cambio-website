import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const Whats = styled.a`
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  /* background-color: #25d366; */
  /* padding: 5px; */
  color: #fff;
  border-radius: 50px;
  border: none;
  text-align: center;
  font-size: 1rem;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`
const FloatingWhatsapp = () => (
  <Whats
    href="https://api.whatsapp.com/send?phone=+554331421032&text=Ol%C3%A1%2C+preciso+de+atendimento+para+uma+opera%C3%A7%C3%A3o+de+c%C3%A2mbio."
    target="_blank"
  >
    <Image src="/assets/WhatsApp.svg" alt="Whatspp" width={60} height={60} />
    {/* <strong>Entre em contato</strong> */}
  </Whats>
)

export default FloatingWhatsapp

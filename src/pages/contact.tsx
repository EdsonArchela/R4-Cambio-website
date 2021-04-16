/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Head from 'next/head'
import styled from 'styled-components'
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  TextareaAutosize,
} from '@material-ui/core'
import { useForm } from 'react-hook-form'
import Image from 'next/image'
import React from 'react'
import Header from '../components/pattern/Header'
import Footer from '../components/pattern/Footer'

const Container = styled.div`
  width: 100%;

  .contact {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    & > * {
      flex: 1;
    }

    form {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      h1 {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`

const Contact = () => {
  const { register, handleSubmit, errors, reset } = useForm()

  const onSubmitForm = (values: any) => {
    console.log(values)
    const config = {
      method: 'post',
      url: '',
    }
  }

  return (
    <Container>
      <Head>
        <title>R4 Câmbio - Artigos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="contact">
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <h1>Fale com um Assessor</h1>
          <FormControl>
            <InputLabel htmlFor="name">Nome</InputLabel>
            <Input
              {...register('name', {
                required: {
                  value: true,
                  message: 'Este campo é obrigatório',
                },
              })}
              id="name"
              aria-describedby="name-helper"
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="enterprise">Empresa</InputLabel>
            <Input
              {...register('enterprise')}
              id="enterprise"
              aria-describedby="enterprise-helper"
            />
            <FormHelperText id="enterprise-helper">*Campo Opcional</FormHelperText>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="email">E-mail</InputLabel>
            <Input
              {...register('email', {
                required: {
                  value: true,
                  message: 'Este campo é obrigatório',
                },
              })}
              id="email"
              aria-describedby="email-helper"
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="phone">Telefone</InputLabel>
            <Input
              {...register('phone', {
                required: {
                  value: true,
                  message: 'Este campo é obrigatório',
                },
              })}
              id="phone"
              aria-describedby="phone-helper"
            />
            <FormHelperText id="phone-helper">+55 (xxx) xxxx-xxxx</FormHelperText>
          </FormControl>
          <FormControl>
            <TextareaAutosize
              {...register('message', {
                required: {
                  value: true,
                  message: 'Este campo é obrigatório',
                },
              })}
              aria-label="minimum height"
              rowsMin={3}
              placeholder="Digite sua mensagem"
            />
          </FormControl>
          <Button type="submit">Enviar</Button>
        </form>
        <Image src="/assets/contact.png" alt="" width={783} height={556} />
      </div>
      <Footer />
    </Container>
  )
}

export default Contact

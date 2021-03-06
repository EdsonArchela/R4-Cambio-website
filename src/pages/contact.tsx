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
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core'
import { useForm } from 'react-hook-form'
import Image from 'next/image'
import React, { useState } from 'react'

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
  .contact {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: row;
    height: 100%;
    form {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin: auto;
      flex: 1;
      h1 {
        color: ${({ theme }) => theme.colors.primary};
      }
      .MuiFormControl-root {
        width: 80%;
        max-width: 550px;
        margin: 0.5rem;
      }
    }

    img {
      display: flex;
      align-self: flex-end;
      @media (max-width: 1024px) {
        max-width: 512px !important;
      }
    }
  }
  @media (max-width: 480px) {
    .contact {
      flex-direction: column;
      h1 {
        text-align: center;
      }
    }
    img {
      display: none !important;
    }
  }
`

const formTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#055556',
      light: '#a35c00',
    },
  },
})

const Contact = () => {
  const { register, handleSubmit, reset } = useForm()
  const [sending, setSending] = useState(false)

  const onSubmitForm = async (values: {
    name: string
    enterprise?: string
    email: string
    phone: string
    message: string
  }) => {
    setSending(true)
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })
      .then(() => {
        reset()
      })
      .finally(() => {
        setSending(false)
      })
  }

  return (
    <Container>
      <Head>
        <title>R4 C??mbio - Contato</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="contact">
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <ThemeProvider theme={formTheme}>
            <h1>Fale com um Assessor</h1>
            <FormControl color="primary">
              <InputLabel htmlFor="name" color="primary">
                Nome
              </InputLabel>
              <Input
                {...register('name', {
                  required: {
                    value: true,
                    message: 'Este campo ?? obrigat??rio',
                  },
                })}
                id="name"
                aria-describedby="name-helper"
                color="primary"
              />
            </FormControl>
            <FormControl color="primary">
              <InputLabel color="primary" htmlFor="enterprise">
                Empresa
              </InputLabel>
              <Input
                color="primary"
                {...register('enterprise')}
                id="enterprise"
                aria-describedby="enterprise-helper"
              />
              <FormHelperText id="enterprise-helper">*Campo Opcional</FormHelperText>
            </FormControl>
            <FormControl color="primary">
              <InputLabel color="primary" htmlFor="email">
                E-mail
              </InputLabel>
              <Input
                {...register('email', {
                  required: {
                    value: true,
                    message: 'Este campo ?? obrigat??rio',
                  },
                })}
                color="primary"
                id="email"
                aria-describedby="email-helper"
              />
            </FormControl>
            <FormControl color="primary">
              <InputLabel color="primary" htmlFor="phone">
                Telefone
              </InputLabel>
              <Input
                {...register('phone', {
                  required: {
                    value: true,
                    message: 'Este campo ?? obrigat??rio',
                  },
                })}
                color="primary"
                id="phone"
                aria-describedby="phone-helper"
              />
              <FormHelperText id="phone-helper">(DDD) xxxx-xxxx</FormHelperText>
            </FormControl>
            <FormControl color="primary">
              <TextareaAutosize
                {...register('message', {
                  required: {
                    value: true,
                    message: 'Este campo ?? obrigat??rio',
                  },
                })}
                aria-label="minimum height"
                rowsMin={5}
                placeholder="Digite sua mensagem"
              />
            </FormControl>
            <Button variant="contained" color="primary" type="submit">
              {sending ? <Image src="/assets/spinner.png" width={18} height={18} /> : 'Enviar'}
            </Button>
          </ThemeProvider>
        </form>
        <Image src="/assets/contact.png" alt="" width={783} height={556} />
      </div>
    </Container>
  )
}

export default Contact

// export default Contact

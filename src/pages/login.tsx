/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import MaskedInput from 'react-text-mask'

import Image from 'next/image'
import styled from 'styled-components'
import Link from 'next/link'
import { TextField, withStyles, Button, Theme } from '@material-ui/core'
import { AuthContext } from '../contexts/AuthContext'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  margin: 1rem;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem;
    & > * {
      margin: 0.5rem;
    }
    button {
      width: 95%;
    }
  }
  a {
    font-weight: bold;
    color: #055556;
  }
`

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#055556',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#055556',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'rgba(77, 77, 77, 0.333)',
      },
      '&:hover fieldset': {
        borderColor: '#055556',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#055556',
      },
    },
  },
})(TextField)

const ColorButton = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.getContrastText('#286f70'),
    backgroundColor: '#286f70',
    '&:hover': {
      backgroundColor: '#055556',
    },
  },
}))(Button)

interface TextMaskCustomProps {
  inputRef: (ref: HTMLInputElement | null) => void
}

function TextMaskCustom(props: TextMaskCustomProps) {
  const { inputRef, ...other } = props

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null)
      }}
      mask={[
        /\d/,
        /\d/,
        '.',
        /\d/,
        /\d/,
        /\d/,
        '.',
        /\d/,
        /\d/,
        /\d/,
        '/',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
      ]}
    />
  )
}

export default function LogIn() {
  const { register, handleSubmit } = useForm()
  const { signIn } = useContext(AuthContext)
  const [values, setValues] = React.useState<string>('')

  async function handleSignIn(data: { documment: string; password: string }) {
    console.log(data)
    await signIn({ documment: values, password: data.password })
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues(event.target.value)
  }

  return (
    <Container>
      <Image width="200px" height="100px" src="/assets/logo-green.svg" />
      <form onSubmit={handleSubmit(handleSignIn)}>
        <CssTextField
          {...register('documment')}
          label="CNPJ"
          type="text"
          helperText="00.000.000/0000-00"
          variant="outlined"
          onChange={handleChange}
          value={values}
          name="textmask"
          InputProps={{ inputComponent: TextMaskCustom as any }}
        />

        <CssTextField
          {...register('password')}
          id="outlined-password"
          label="Senha"
          type="password"
          variant="outlined"
        />

        <ColorButton type="submit" variant="contained" color="primary">
          Entrar
        </ColorButton>
      </form>
      <Link href="/cadastro">Cadestre-se aqui</Link>
    </Container>
  )
}

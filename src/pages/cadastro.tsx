/* eslint-disable react/jsx-props-no-spreading */
import { withStyles, TextField, Theme, Button } from '@material-ui/core'
import React from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import MaskedInput from 'react-text-mask'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { api } from '../services/api'

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

export default function Cadastro() {
  const { register, handleSubmit } = useForm()
  const [values, setValues] = React.useState<string>('')

  const router = useRouter()

  async function handleCadastro(data: { documment: string; email: string; password: string }) {
    await api.post('clients', data)

    router.push('/')
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues(event.target.value)
  }

  return (
    <Container>
      <Image width="200px" height="100px" src="/assets/logo-green.svg" />
      <form onSubmit={handleSubmit(handleCadastro)}>
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

        <CssTextField {...register('email')} label="E-mail" type="email" variant="outlined" />

        <CssTextField
          {...register('password')}
          id="outlined-password"
          label="Senha"
          type="password"
          variant="outlined"
        />
        {/*
        <Button variant="contained" component="label">
          Upload File
          <input type="file" hidden />
        </Button> */}

        <ColorButton type="submit" variant="contained" color="primary">
          Cadastrar
        </ColorButton>
      </form>
    </Container>
  )
}

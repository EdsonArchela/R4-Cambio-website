/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-spreading */
import { Button } from '@material-ui/core'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import React, { useCallback, useContext, useState } from 'react'

import styled from 'styled-components'
import { AuthContext } from '../contexts/AuthContext'
import { api } from '../services/api'
import { getAPIClient } from '../services/axios'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  margin: 1rem;
`

type FileType = {
  patrimonialBalance?: string
}

export default function FileUpload() {
  const { user } = useContext(AuthContext)

  const [enterprise, setEnterprise] = useState<FileType>()

  const handleFileUpload = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>, varName: string) => {
      const formData = new FormData()
      if (!event.target.files) return
      const { files } = event.target
      for (let i = 0; i < files.length; i += 1) {
        formData.append(varName, files[i])
      }

      if (!user) return
      formData.append('documment', user)
      api
        .patch('/clients/update', formData)
        .then((response) => {
          console.log(response.data)
          setEnterprise(response.data)
        })
        .catch((err) => {
          console.log(err)
          // addToast({
          //   type: 'error',
          //   title: 'Erro no upload de seu documento',
          //   description: err.message,
          // })
        })
    },
    [user]
  )

  return (
    <Container>
      {enterprise?.patrimonialBalance ? (
        <h1>enterprise.patrimonialBalance</h1>
      ) : (
        <Button variant="contained" component="label">
          Carregar Balanço Patrimonial
          <input
            type="file"
            hidden
            onChange={(event) => handleFileUpload(event, 'patrimonialBalance')}
          />
        </Button>
      )}
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getAPIClient(ctx)
  const { 'r4cambio.userauth.token': token } = parseCookies(ctx)

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  try {
    await apiClient.get('clients')
  } catch {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}

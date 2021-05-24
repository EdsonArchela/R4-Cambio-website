/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react'
import Head from 'next/head'
import type { AppProps /* , AppContext */ } from 'next/app'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Provider as AuthProvider } from 'next-auth/client'
import { useRouter } from 'next/router'
import Header from '../components/pattern/Header'
import Footer from '../components/pattern/Footer'
import FloatingWhatsapp from '../components/FloatingWhatsapp'
import * as gtag from '../../lib/gtag'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-text-size-adjust: none;
    a {
        text-decoration: none;
      }
    ul {
          list-style-type: none;
       }
    font-family: 'Raleway', sans-serif;

    button.rec-dot:hover {
      box-shadow: 0 0 1px 3px rgba(5, 85, 86, 0.5);
    }

    button.rec-dot:active,
    button.rec-dot_active,
    button.rec-dot:focus {
      background-color: rgb(5, 85, 86);
      box-shadow: 0 0 1px 3px rgba(5, 85, 86, 0.5);
    }

    .primary-button{
      max-width: 270px;
      background: linear-gradient(
        #055556,
        #2E7E80
      );
      border: none;
      border-radius: 5px;
      cursor:pointer;
      padding: 0.5rem;
      font-family: inherit;
      font-weight: bold;
      color: inherit;
      font-size: 28px;
      transition: background 0.3s ease-in-out;
      &:active {
        background: linear-gradient(
          #2E7E80,
          #055556
        );
      }
    }
  }
`

const theme = {
  colors: {
    background: 'white',
    primary: '#055556',
    secondary: '#2E7E80',
    ternary: '#308082',
    quaternary: '#10B1C0',
    txtPrimary: '#FFFCFC',
  },
  textSizes: {
    normal: '1rem',
    large: '1.5rem',
    extra: '2rem',
  },
}

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            maxWidth: '100vw',
            overflow: 'hidden',
          }}
        >
          <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;700&family=Roboto:wght@400;700&display=swap"
              rel="stylesheet"
            />
            <link rel="shortcut icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <title>R4 Câmbio</title>
            <meta
              name="keywords"
              content="cambio, câmbio, importação, exportação, FINIMP, ACC, ACE, viajem, Londrina, remessa, comex, comercio exterior, SWIFT, R4 Câmbio, Invoice, BL, bl"
            />
            <meta
              name="description"
              content="Uma plataforma aberta de câmbio focada em fornecer os melhores produtos e condições à seus clientes. Além de trazer uma visão atualizada de mercado."
            />
            <meta name="subject" content="Operações de câmbio" />
            <meta name="copyright" content="R4 Câmbio" />
            <meta name="language" content="pt-BR" />
            <meta name="robots" content="index,follow" />
            <meta name="topic" content="cambio" />
            <meta
              name="summary"
              content="Uma plataforma aberta de câmbio focada em fornecer os melhores produtos e condições à seus clientes. Além de trazer uma visão atualizada de mercado."
            />
            <meta name="Classification" content="Business" />
            <meta name="author" content="Edson Archela, edsonarchela@r4cambio.com.br" />
            <meta name="reply-to" content="contato@r4cambio.com.br" />
            <meta name="url" content="http://www.r4cambio.com.br" />
            <meta name="identifier-URL" content="http://www.r4cambio.com.br" />
            <meta name="coverage" content="Worldwide" />
            <meta name="distribution" content="Global" />
            <meta name="rating" content="General" />

            <meta name="og:title" content="R4 Câmbio" />
            <meta name="og:type" content="website" />
            <meta name="og:url" content="http://www.r4cambio.com.br" />
            <meta name="og:image" content="/assets/logoR4cambio-verde.jpg" />
            <meta name="og:site_name" content="R4 Câmbio" />
            <meta
              name="og:description"
              content="Uma plataforma aberta de câmbio focada em fornecer os melhores produtos e condições à seus clientes. Além de trazer uma visão atualizada de mercado."
            />

            <meta name="og:email" content="contato@r4cambio.com.br" />
            <meta name="og:phone_number" content="554333411032" />
          </Head>
          <Header />
          <Component {...pageProps} />
          <div style={{ flex: 1 }} />
          <FloatingWhatsapp />
          <Footer />
        </div>
        <GlobalStyle />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default MyApp

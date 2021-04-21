/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import Header from '../components/pattern/Header'
import Footer from '../components/pattern/Footer'

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

export default class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
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
          </Head>
          <Header />
          <Component {...pageProps} />
          <div style={{ flex: 1 }} />
          <Footer />
        </div>
        <GlobalStyle />
      </ThemeProvider>
    )
  }
}

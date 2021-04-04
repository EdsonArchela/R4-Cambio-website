/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    a {
        text-decoration: none;
      }
    ul {
          list-style-type: none;
       }
    font-family: 'Raleway', sans-serif;

    .primary-button{
      max-width: 270px;
      background: linear-gradient(
        ${({ theme }) => theme.colors.primary},
        ${({ theme }) => theme.colors.secondary}
      );
      border: none;
      border-radius: 5px;
      padding: 0.5rem;
      font-family: inherit;
      font-weight: bold;
      color: inherit;
      font-size: 28px;
      transition: background 0.3s ease-in-out;
      &:active {
        background: linear-gradient(
          ${({ theme }) => theme.colors.secondary},
          ${({ theme }) => theme.colors.primary}
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
}

export default class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;700&family=Roboto:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    )
  }
}

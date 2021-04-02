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
  }
`

const theme = {
  colors: {
    background: 'white',
    primary: '#055556',
    secondary: '#2E7E80',
    ternary: '#308082',
    txtPrimary: '#FFFCFC',
  },
}

export default class MyApp extends App {
  render() {
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

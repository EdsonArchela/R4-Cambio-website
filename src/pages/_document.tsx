/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import Document, { DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { GA_TRACKING_ID } from '../lib/gtag'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<{
    styles: JSX.Element
    html: string
    head?: JSX.Element[]
  }> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
        head: [
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
            <script
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `,
              }}
            />
          </>,
        ],
      }
    } finally {
      sheet.seal()
    }
  }
}

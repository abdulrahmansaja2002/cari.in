import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <meta name="description" content="A search engine for programmers."></meta>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

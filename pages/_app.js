import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head >
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="A search engine for programmers." />
        <meta name="keywords" content="search engine, programmers, programming, coding, computer science, computer, science, physics, math, gaming, articles, blogs, tutorials, videos, books, courses, programming language, programming languages, programming language, programming languages, program " />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

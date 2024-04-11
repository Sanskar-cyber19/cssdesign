import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import '@/styles/globals.css'
import Head from 'next/head'
import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>CSS TOOLS</title>
      <link rel="icon" href="/favicon.png" />
    </Head>
    <Nav/>
    <Component {...pageProps} />
    <Footer/>
  </>
  )
}

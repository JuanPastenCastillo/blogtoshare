import Head from "next/head"
import { Fragment } from "react"
import { Layout } from "../../components/Layout"
import { GlobalStyle } from "../styles/GlobalStyle"

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Blog - JUAN PASTÉN CASTILLO</title>
      </Head>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  )
}


/* 

!FH-1

Android Text to Speech
https://youtu.be/Ka5AdeLt43o

iPhone:
https://youtu.be/DC6jjLOpaJ0

https://apps.apple.com/us/app/text-to-speech/id322329515
*/
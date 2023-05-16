import Head from "next/head"
import { Fragment } from "react"
import { Layout } from "../../components/Layout"
import { HeightNavbarContext_Provider } from "../../context/HeightNavbarContext"
import { UserView_Provider } from "../../context/UserViewContext"
import { GlobalStyle } from "../styles/GlobalStyle"

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Blog - JUAN PASTÉN CASTILLO</title>
      </Head>
      <GlobalStyle />

      <HeightNavbarContext_Provider>
        <UserView_Provider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </UserView_Provider>
      </HeightNavbarContext_Provider>
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

import { Welcome } from '../../components/Welcome.js'
import { ThreeParts } from '../../components/ThreeParts.js'
import { Fragment } from 'react'
import Head from 'next/head.js'


export default function Home() {
  return (
    <Fragment>
      <main >
        <Welcome/>
        <ThreeParts/>
      </main>
    </Fragment>
  )
}

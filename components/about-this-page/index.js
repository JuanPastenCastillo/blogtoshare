import Link from 'next/link.js'
import { AboutThisPageWrapper } from './styles/AboutThisPageWrapper.js'

export const AboutThisPage = () => {
  return (
    <AboutThisPageWrapper>
      <h1>Blog of <span>JUAN PASTÉN CASTILLO</span></h1>
      <p><Link href="/all">Visit</Link> all the excited topics I like to share about</p>
    </AboutThisPageWrapper>
  )
}
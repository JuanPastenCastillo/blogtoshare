import Link from 'next/link.js'
import { ContactMeSVG, GitHubIconSVG, LinkedinIconSVG } from '../../../assets/icons/index.js'
import { MAIN_ContactWrapper } from './styles/MAIN_ContactWrapper.js'

export const MAIN_Contact = () => {
  return (
    <MAIN_ContactWrapper>
      <div>
        <h1>Let&apos;s Talk!</h1>
        <ContactMeSVG />
      </div>

      <div>
        <Link href="https://github.com/JuanPastenCastillo" target="blank" rel="noreferrer">
          <GitHubIconSVG />
        </Link>
        <Link href="https://www.linkedin.com/in/juanpastencastillo/" target="blank" rel="noreferrer">
          <LinkedinIconSVG />
        </Link>
      </div>

    </MAIN_ContactWrapper>
  )
}
import Link from "next/link"
import { useRouter } from "next/router.js"
import { Fragment } from "react"
import { BackComponent } from "../../../../../components/back/BackComponent.js"
import { DATA_TO_DISPLAY } from "../../../../../components/howto-founder/content/DATA_TO_DISPLAY.JS"
import HowToFounder_ContentWrapper from "./styles/HowToFounder_ContentWrapper.js"

const HowToFounder_Content = () => {
  const router = useRouter()
  const { asPath } = router

  return (
    <HowToFounder_ContentWrapper>
      <BackComponent />
      <h2>Content</h2>
      <p>Click or touch on some of the titles to go to the content</p>

      <ul>
        {DATA_TO_DISPLAY.map((x, i) => {
          const indexToUse = i + 1
          return (
            <Fragment key={`${x.title}_${x.source.title}_${x.source.url}`}>
              <li>
                <Link
                  href={{
                    pathname: `content/${i}`
                  }}
                  as={`${asPath}/${i}`}>
                  <h3>
                    {i}) {x.title}
                  </h3>
                </Link>
              </li>
            </Fragment>
          )
        })}
      </ul>
    </HowToFounder_ContentWrapper>
  )
}
export default HowToFounder_Content

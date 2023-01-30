import Link from "next/link"
import HowToFounder_ContentWrapper from "./styles/HowToFounder_ContentWrapper.js"
import { Fragment } from "react"
import { useRouter } from "next/router.js"
import { BackComponent } from "../../../../../components/back/BackComponent.js"
import { DATA_TO_DISPLAY } from "../../../../../components/howto-founder/content/DATA_TO_DISPLAY.JS"

const HowToFounder_Content = (parameters) => {
  const router = useRouter()
  const { asPath } = router

  return (
    <HowToFounder_ContentWrapper>
      <BackComponent />
      <h2>Content</h2>
      <p>Click or touch on some of the titles to go to the content</p>

      <ul>
        {DATA_TO_DISPLAY.map((x, i) => {
          // console.log("x:", x)
          const indexToUse = i + 1
          const dataToPass = JSON.stringify(x.theData)
          // console.log('dataToShow:', dataToShow)

          return (
            <Fragment key={`${x.title}_${x.source.title}_${x.source.url}`}>
              <li>
                <Link
                  href={{
                    pathname: `content/${indexToUse}`,
                    query: {
                      post: indexToUse,
                      title: x.title,
                      originalTitle: x.source.originalTitle,
                      source: x.source.sourceUrl,
                      dataToShow:dataToPass
                    }
                  }}
                  as={`${asPath}/${indexToUse}`}>
                  <h3>
                    {indexToUse}) {x.title}
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

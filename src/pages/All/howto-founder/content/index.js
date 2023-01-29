import Link from "next/link"
import  HowToFounder_ContentWrapper  from "./styles/HowToFounder_ContentWrapper.js"
import { DATA_TO_DISPLAY } from "../../../../../components/howto-founder/content/DATA_TO_DISPLAY.JS"
import { Fragment } from "react"
import { useRouter } from "next/router.js"

const HowToFounder_Content = (parameters) => {
  const router = useRouter()
  const { asPath } = router

  return (
    <HowToFounder_ContentWrapper>
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
                    pathname: `content/${indexToUse}`,
                    query: { post: indexToUse, title: x.title, originalTitle: x.source.title, source: x.source.url }
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

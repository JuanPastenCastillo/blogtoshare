import { useRouter } from "next/router"
import { Fragment, useEffect, useState } from "react"
import { BackComponent } from "../../../../../components/back/BackComponent"
import { DynamicFunction } from "../../../../../utils/GetDynamicImport.js"
import DinamycWrapper from "./styles/DinamycWrapper"

const Dinamyc = () => {
  const router = useRouter()
  const [dataToShow, setdataToShow] = useState()

  useEffect(() => {
    if (router.query.content !== undefined && router.query.content >= 0 && router.query.content <= 19) {
      DynamicFunction({ moduleName: router.query.content, functionName: router.query.content }).then(
        (dynamicDataImported) => {
          setdataToShow(dynamicDataImported)
        }
      )
    } else {
      setdataToShow()
    }
  }, [router.query.content])

  const [formattedData, setFormattedData] = useState({ formatAuthor: "", formatMonth: "", formatURL: "" })

  useEffect(() => {
    if (dataToShow !== undefined && Object.prototype.toString.call(dataToShow.source) === "[object Object]") {
      let toAuthor = dataToShow.source.author[0].toUpperCase() + dataToShow.source.author.slice(1)
      let toMonth = dataToShow.source.month[0].toUpperCase() + dataToShow.source.month.slice(1)
      let toURL = new Intl.ListFormat("en-US").format(dataToShow.source.sourceUrl)

      setFormattedData((prevState) => ({
        ...prevState,
        formatAuthor: toAuthor,
        formatMonth: toMonth,
        formatURL: toURL
      }))
    }
  }, [dataToShow])

  if (dataToShow === undefined) {
    return (
      <>
        <p>Nothing to show</p>
      </>
    )
  }

  return (
    <>
      <DinamycWrapper>
        <BackComponent />
        <h1>{dataToShow.title}</h1>
        <p>Post number: {router.query.content}</p>
        <div>
          {dataToShow.theData.length === 0 ? (
            <p>Work in progress</p>
          ) : (
            <>
              {dataToShow.theData.map((x, i) => {
                if (x[0].toLowerCase() === "introduction" || x[0].toLowerCase() === "content") {
                  if (Array.isArray(x[1])) {
                    return (
                      <Fragment key={`${x[0]}_${i}`}>
                        {x[1].map((xNested) => {
                          const shouldIndent = /^[1-9][0-9]?\)|Q:|A:/.test(xNested.substring(0, 2))
                          if (shouldIndent) {
                            return (
                              <p
                                className={`shouldIndent`}
                                key={xNested}>
                                {xNested}
                              </p>
                            )
                          } else {
                            return <p key={xNested}>{xNested}</p>
                          }
                        })}
                      </Fragment>
                    )
                  }
                  return (
                    <Fragment key={`${x[0]}_${i}`}>
                      <p key={x[1]}>{x[1]}</p>
                    </Fragment>
                  )
                }

                if (x[0].toLowerCase() === "indent2") {
                  if (Array.isArray(x[1])) {
                    return (
                      <Fragment key={`${x[0]}_${i}`}>
                        {x[1].map((xNested) => {
                          return (
                            <p
                              className={`shouldIndent2`}
                              key={xNested}>
                              {xNested}
                            </p>
                          )
                        })}
                      </Fragment>
                    )
                  }
                  return (
                    <Fragment key={`${x[0]}_${i}`}>
                      <p className={"shouldIndent2"}>{x[1]}</p>
                    </Fragment>
                  )
                }

                if (x[0].toLowerCase() === "indent3") {
                  if (Array.isArray(x[1])) {
                    return (
                      <Fragment key={`${x[0]}_${i}`}>
                        {x[1].map((xNested) => {
                          return (
                            <p
                              className={`shouldIndent3`}
                              key={xNested}>
                              {xNested}
                            </p>
                          )
                        })}
                      </Fragment>
                    )
                  }
                  return (
                    <Fragment key={`${x[0]}_${i}`}>
                      <p className={"shouldIndent3"}>{x[1]}</p>
                    </Fragment>
                  )
                }

                if (x[0].toLowerCase() === "title2") {
                  return <h2 key={`${x[0]}_${i}`}>{x[1]}</h2>
                }
                if (x[0].toLowerCase() === "title3") {
                  return <h3 key={`${x[0]}_${i}`}>{x[1]}</h3>
                }
                if (x[0].toLowerCase() === "title4") {
                  return <h4 key={`${x[0]}_${i}`}>{x[1]}</h4>
                }
                if (x[0].toLowerCase() === "title5") {
                  return <h5 key={`${x[0]}_${i}`}>{x[1]}</h5>
                }
                return (
                  <div key={`${i}`}>
                    <p>Something go wrong!❌</p>
                  </div>
                )
              })}
            </>
          )}
        </div>
        <div>
          {dataToShow !== undefined && Object.prototype.toString.call(dataToShow.source) === "[object Object]" ? (
            <>
              <h2>Reference</h2>
              <pre>
                {formattedData.formatAuthor}. ({dataToShow.source.day}, {formattedData.formatMonth},{" "}
                {dataToShow.source.year}). {dataToShow.source.originalTitle}.{" "}
                <div>
                  Source:
                  {dataToShow.source.sourceUrl.map((x, i) => {
                    if (i === dataToShow.source.sourceUrl.length - 2) {
                      return (
                        <Fragment key={`${x}_${i}`}>
                          <a
                            href={x}
                            target="_blank"
                            rel="noreferrer">
                            {x}
                          </a>
                          <span>and</span>
                        </Fragment>
                      )
                    }
                    if (i === dataToShow.source.sourceUrl.length - 1) {
                      return (
                        <Fragment key={`${x}_${i}`}>
                          <a
                            href={x}
                            target="_blank"
                            rel="noreferrer">
                            {x}
                          </a>
                        </Fragment>
                      )
                    }
                    return (
                      <Fragment key={`${x}_${i}`}>
                        <a
                          href={x}
                          target="_blank"
                          rel="noreferrer">
                          {x},
                        </a>
                      </Fragment>
                    )
                  })}
                </div>
              </pre>
            </>
          ) : (
            <>
              <h2>Reference</h2>

              <pre>
                <ol>
                  {dataToShow.source.map((x, i) => {
                    return (
                      <li key={i}>
                        {x.author} ({x.year}). {x.title}. Recovery from:{" "}
                        <a
                          href={x.url}
                          target="_blank"
                          rel="noreferrer">
                          {x.url}
                        </a>
                      </li>
                    )
                  })}
                </ol>
              </pre>
            </>
          )}
        </div>
      </DinamycWrapper>
    </>
  )
}
export default Dinamyc

/* 

!FH0

✅- Check if there is any repeated key
✅- Add zero entry in content
✅- Add multiple references on entry content
- Add introduction
- Check the button of return it back
- When the user return from the dynamic page to the previous one, the page should not go to top automatically, should maintain the scroll position
- Clean console console logs

- Follow with stress:
  * Make the text
  * Share the text

- Add accessibility features:
 * Font-size
 * Letter spacing
 * Line height
 * Font style
 * Margin lef and right
 * Zoom in and zoom out
 * Color: light, dark, sepia

 
 
- Make improvements in the UI
- Share the webpage on Twitter, adding the handle of every person who participated there with the @ symbol. Specially, give them the thanks for it.


*/

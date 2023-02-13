import { useRouter } from "next/router"
import { Fragment, useEffect, useState } from "react"
import { BackComponent } from "../../../../../components/back/BackComponent"
import { DynamicFunction } from "../../../../../utils/GetDynamicImport.js"
import DinamycWrapper from "./styles/DinamycWrapper"

const Dinamyc = () => {

  const router = useRouter()

  const [dataToShow, setdataToShow] = useState()

  useEffect(() => {
    if (router.query.content !== undefined && router.query.content >= 1 && router.query.content <= 18) {
      DynamicFunction({ moduleName: router.query.content, functionName: router.query.content }).then(
        (dynamicDataImported) => {
          setdataToShow(dynamicDataImported)
        }
      )
    } else {
      setdataToShow()
    }
  }, [router.query.content])

  const [formattedData, setFormattedData] = useState({ formatAuthor: "", formatMonth: "" })

  useEffect(() => {
    if (dataToShow !== undefined) {
      let toAuthor = dataToShow.source.author[0].toUpperCase() + dataToShow.source.author.slice(1)
      let toMonth = dataToShow.source.month[0].toUpperCase() + dataToShow.source.month.slice(1)

      setFormattedData((prevState) => ({
        ...prevState,
        formatAuthor: toAuthor,
        formatMonth: toMonth
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
                      <Fragment key={i}>
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
                    <Fragment key={i}>
                      <p key={x[1]}>{x[1]}</p>
                    </Fragment>
                  )
                }
                if (x[0].toLowerCase() === "title2") {
                  return <h2 key={`${x[0]}${i}`}>{x[1]}</h2>
                }
                if (x[0].toLowerCase() === "title3") {
                  return <h3 key={`${x[0]}${i}`}>{x[1]}</h3>
                }
                if (x[0].toLowerCase() === "title4") {
                  return <h4 key={`${x[0]}${i}`}>{x[1]}</h4>
                }
                if (x[0].toLowerCase() === "title5") {
                  return <h5 key={`${x[0]}${i}`}>{x[1]}</h5>
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
          {dataToShow !== undefined ? (
            <>
              <h2>Reference</h2>
              <pre>
                {formattedData.formatAuthor}. ({dataToShow.source.day}, {formattedData.formatMonth},{" "}
                {dataToShow.source.year}). {dataToShow.source.originalTitle}. Source:
                <a
                  href={dataToShow.source.sourceUrl}
                  target="_blank"
                  rel="noreferrer">
                  {dataToShow.source.sourceUrl}
                </a>{" "}
              </pre>
            </>
          ) : null}
        </div>
      </DinamycWrapper>
    </>
  )
}
export default Dinamyc


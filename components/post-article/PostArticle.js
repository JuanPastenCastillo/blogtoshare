import { Fragment } from "react"
import { BackComponent } from "../back/BackComponent.js"
import { PostArticleWrapper } from './styles/PostArticleWrapper.js'



export const PostArticle = ({ dataToShow, numberPost = "" }) => {
  return (
    <PostArticleWrapper>
      <BackComponent />
        <h1>{dataToShow.title}</h1>
        {numberPost ? (
          <>
            <p>Post number: {numberPost}</p>
          </>
        ) : null}
        
        
        
        
      
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

        if (x[0].toLowerCase() === "quote") {
          if (Array.isArray(x[1])) {
            return (
              <Fragment key={`${x[0]}_${i}`}>
                <p>
                  <q>{x[1][0]}</q>
                  {x[1][1]}
                </p>
              </Fragment>
            )
          }
          return (
            <Fragment key={`${x[0]}_${i}`}>
              <p>Something go wrong, check it out </p>
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
      
      <div></div>
    </PostArticleWrapper>
  )
}

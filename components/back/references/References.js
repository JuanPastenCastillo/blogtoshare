import { Fragment } from "react"
import { ReferencesWrapper } from "./styles/ReferencesWrapper"

export const References = ({ referencesData }) => {
  console.log('referencesData:', referencesData)
  const isOnlyOneReference = Object.prototype.toString.call(referencesData) === "[object Object]"

  if (isOnlyOneReference) {
    return (
      <ReferencesWrapper>
        <h2>Reference:</h2>

        <pre>
          {referencesData.author}. ({referencesData.day}, {referencesData.month}, {referencesData.year}).{" "}
          {referencesData.originalTitle}.{" "}
          <div>
            Recovery from:{" "}
            {referencesData.sourceUrl.map((x, i) => {
              if (i === referencesData.sourceUrl.length - 2) {
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
              if (i === referencesData.sourceUrl.length - 1) {
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
      </ReferencesWrapper>
    )
  }

  if (isOnlyOneReference === false) {
    return (
      <ReferencesWrapper>
        <h2>References:</h2>
        <pre>
          <ol>
            {referencesData.map((x, i) => {
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
      </ReferencesWrapper>
    )
  }
}

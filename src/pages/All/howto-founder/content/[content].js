import { Fragment } from "react"
import { BackComponent } from "../../../../../components/back/BackComponent"

const Dinamyc = (props) => {
  const { post, originalTitle, source, title, dataToShow = "[]" } = props.query

  const formatDataToShow = JSON.parse(dataToShow)

  return (
    <div>
      <BackComponent />

      <h2>{title}</h2>
      <p>Post number: {post}</p>

      <div>
        {formatDataToShow.length === 0 ? (
          <p>Work in progress</p>
        ) : (
          <>
            {formatDataToShow.map((x, i) => {

              if (x[0] === "introduction" || x[0] === "content") {
                return (
                  <Fragment key={i}>
                    {x[1].map((xNested) => (
                      <p key={xNested}>{xNested}</p>
                    ))}
                  </Fragment>
                )
              }
              if (x[0] === "title2") {
                return <h2 key={x[0]}>{x[1]}</h2>
              }
              if (x[0] === "title3") {
                return <h3 key={x[0]}>{x[1]}</h3>
              }
              if (x[0] === "title4") {
                return <h4 key={x[0]}>{x[1]}</h4>
              }
              if (x[0] === "title5") {
                return <h5 key={x[0]}>{x[1]}</h5>
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

      <p>
        Source:{" "}
        <a
          href={source}
          target="_blank"
          rel="noreferrer">
          «{originalTitle}»{" "}
        </a>{" "}
      </p>
    </div>
  )
}
export default Dinamyc

export const getServerSideProps = (context) => {
  const { query } = context
  return {
    props: {
      query: query
    }
  }
}

/* 
!FH
Add a button or arrow or something to back to previous page




*/

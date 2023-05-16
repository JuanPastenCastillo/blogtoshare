import { useRouter } from "next/router.js"
import { Fragment } from "react"
import { PermaLinkSVG } from "../../assets/icons/index.js"
import { useHeightNavbar_Ctx } from "../../context/HeightNavbarContext.js"
import { formatIdTitle } from "../../utils/formatIdTitle.js"
import { BackComponent } from "../back/BackComponent.js"
import { PostArticleWrapper } from "./styles/PostArticleWrapper.js"

export const PostArticle = ({ dataToShow, numberPost = "" }) => {
  const router = useRouter()

  const { heightNavbar } = useHeightNavbar_Ctx()

  const handleSectionClick = (id) => {
    const element = document.getElementById(id)
    const toMoveHere = element.getBoundingClientRect().top + window.pageYOffset - heightNavbar
    window.scrollTo({ top: toMoveHere, behavior: "smooth" })
  }

  const handlePermaLink = (id) => {
    router.push(`#${id}`)
  }

  return (
    <PostArticleWrapper heightNavbar={heightNavbar}>
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
                  const shouldIndent = /^[0-9][0-9]?|Q:|A:|^[A-Z]\)/.test(xNested.substring(0, 2))
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

        if (x[0].toLowerCase() === "likepoem") {
          if (Array.isArray(x[1])) {
            return (
              <div
                key={`${x[0]}_${i}`}
                className="LikePoem">
                {x[1].map((xNested) => {
                  return <p key={xNested}>{xNested}</p>
                })}
              </div>
            )
          }
        }

        const titleToId = formatIdTitle(x[1])

        if (x[0].toLowerCase() === "title2") {
          return (
            <h2
              onClick={() => handleSectionClick(titleToId)}
              id={titleToId}
              key={`${x[0]}_${i}`}>
              {x[1]}
              <span onClick={() => handlePermaLink(titleToId)}>
                <PermaLinkSVG />
              </span>
            </h2>
          )
        }
        if (x[0].toLowerCase() === "title3") {
          return (
            <h3
              onClick={() => handleSectionClick(titleToId)}
              id={titleToId}
              key={`${x[0]}_${i}`}>
              {x[1]}
              <span onClick={() => handlePermaLink(titleToId)}>
                <PermaLinkSVG />
              </span>
            </h3>
          )
        }
        if (x[0].toLowerCase() === "title4") {
          return (
            <h4
              onClick={() => handleSectionClick(titleToId)}
              id={titleToId}
              key={`${x[0]}_${i}`}>
              {x[1]}
              <span onClick={() => handlePermaLink(titleToId)}>
                <PermaLinkSVG />
              </span>
            </h4>
          )
        }
        if (x[0].toLowerCase() === "title5") {
          return (
            <h5
              onClick={() => handleSectionClick(titleToId)}
              id={titleToId}
              key={`${x[0]}_${i}`}>
              {x[1]}
              <span onClick={() => handlePermaLink(titleToId)}>
                <PermaLinkSVG />
              </span>
            </h5>
          )
        }
        if (x[0].toLowerCase() === "title6") {
          return (
            <h6
              onClick={() => handleSectionClick(titleToId)}
              id={titleToId}
              key={`${x[0]}_${i}`}>
              {x[1]}
              <span onClick={() => handlePermaLink(titleToId)}>
                <PermaLinkSVG />
              </span>
            </h6>
          )
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

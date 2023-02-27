import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { References } from "../../../../../components/back/references/References"
import { PostArticle } from "../../../../../components/post-article/PostArticle"
import { DynamicFunction } from "../../../../../utils/GetDynamicImport.js"

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
      <PostArticle
        dataToShow={dataToShow}
        numberPost={router.query.content}
      />

      <References referencesData={dataToShow.source} />
    </>
  )
}
export default Dinamyc

import { DATA_CREATED_0 } from "../../../components/howto-founder/content/DATA_0/DATA_CREATED_0.js"
import { References } from "../../back/references/References.js"
import { PostArticle } from "../../post-article/PostArticle.js"

export const MAIN_Leadership = () => {
  return (
    <>
      <PostArticle dataToShow={DATA_CREATED_0} />

      <References referencesData={DATA_CREATED_0.source} />
    </>
  )
}

import { References } from "../../back/references/References"
import { PostArticle } from "../../post-article/PostArticle"
import { DATA_CREATED } from "./data/DATA_CREATED"
import { IntroductionWrapper } from "./styles/IntroductionWrapper.js"

export const IntroductionContent = () => {
  return (
    <IntroductionWrapper>

      <PostArticle dataToShow={DATA_CREATED} />
      
      <References referencesData={DATA_CREATED.source} />
      
      
    </IntroductionWrapper>
  )
}

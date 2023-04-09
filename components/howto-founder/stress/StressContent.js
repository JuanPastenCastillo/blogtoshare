import { References } from '../../back/references/References.js'
import { PostArticle } from '../../post-article/PostArticle.js'
import { DATA_CREATED } from './data/DATA_CREATED.js'
import { StressContentWrapper } from './styles/StressContentWrapper.js'



export const StressContent = () => {
  return (
    <StressContentWrapper>
      <PostArticle dataToShow={DATA_CREATED} />
      <References referencesData={DATA_CREATED.source}  />
    </StressContentWrapper>
  )
}
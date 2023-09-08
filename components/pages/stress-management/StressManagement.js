import { References } from '../../back/references/References.js'
import { PostArticle } from '../../post-article/PostArticle.js'
import { DATA_CREATED } from './data/DATA_CREATED.js'
import { StressManagementWrapper } from './styles/StressManagementWrapper.js'

export const StressManagement = () => {
  return (
    <StressManagementWrapper>
      <PostArticle dataToShow={DATA_CREATED} />
      <References referencesData={DATA_CREATED.source} />
    </StressManagementWrapper>
  )
}
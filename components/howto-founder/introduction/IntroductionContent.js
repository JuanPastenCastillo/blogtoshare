import { DATA_CREATED } from "./data/DATA_CREATED"
import { IntroductionWrapper } from './styles/IntroductionWrapper.js'

console.log('DATA_CREATED:', DATA_CREATED)



export const IntroductionContent = () => {
  return (
    <IntroductionWrapper>
      <h1>{ DATA_CREATED.title}</h1>
    </IntroductionWrapper>
  )
}
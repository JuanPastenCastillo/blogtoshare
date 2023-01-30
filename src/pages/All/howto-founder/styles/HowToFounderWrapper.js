import styled from "styled-components"
import { PRIMARY, SECONDARY } from "../../../../../assets/Colors"

const HowToFounderWrapper = styled.div`
  & > :nth-child(2) {
    margin-bottom: 18px;
  }

  & > * + * {
    margin-bottom: 8px;
  }
  & > p > a {
    text-decoration: underline;
  }

  
`

export default HowToFounderWrapper

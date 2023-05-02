import styled from "styled-components"

const HowToFounder_ContentWrapper = styled.div`
  & > :nth-child(1) {
    position: sticky;
    top: 0;
    z-index: 2;
    & > svg {
      background-color: black;
    }
  }

  & > ul > li {
    display: flex;
    justify-content: center;
    margin-bottom: 32px;
  }
`

export default HowToFounder_ContentWrapper

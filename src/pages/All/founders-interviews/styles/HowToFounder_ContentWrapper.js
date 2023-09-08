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

  & > *:not(:first-child) {
    padding-inline: 24px;
  }

  & > ul {
    & > li {
      display: flex;
      padding: 24px;

      & > a {
        &:hover {
          color: cornflowerblue;
        }
      }
    }
  }
`

export default HowToFounder_ContentWrapper

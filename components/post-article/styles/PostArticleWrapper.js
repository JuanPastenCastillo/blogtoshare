import styled from "styled-components"

export const PostArticleWrapper = styled.div`
  padding: 2rem;
  
  & > :nth-child(1) {
    position: sticky;
    top: 0;
    z-index: 1;
    margin-left: -2rem;

    & > svg {
      background-color: black;
    }
  }

  .shouldIndent {
    margin-left: 24px;
  }

  .shouldIndent2 {
    margin-left: 32px;
  }
  .shouldIndent3 {
    margin-left: 38px;
  }

  & > :last-child {
    margin-top: 32px;

    position: relative;
    height: 5px;
    background-color: white;

    &::before {
      content: "";
      position: absolute;
      top: -10px;
      left: 50%;
      transform: translate(-50%, 0);
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: white;
    }
  }
`

import styled from "styled-components"

export const PostArticleWrapper = styled.div`
  padding: 2rem;

  color: #fff;

  h2,
  h3,
  h4,
  h5,
  h6 {
    position: relative;
    display: flex;
    /* border: 2px solid crimson; */

    /* align-items: center; */
    /* justify-content: center; */
  }

  h2:hover,
  h3:hover,
  h4:hover,
  h5:hover,
  h6:hover {
    text-decoration: solid underline white 4px;
    cursor: pointer;
  }
  h2 > :nth-child(1),
  h3 > :nth-child(1),
  h4 > :nth-child(1),
  h5 > :nth-child(1),
  h6 > :nth-child(1) {
    visibility: hidden;
    margin-left: 8px;
  }

  h2:hover > :nth-child(1),
  h3:hover > :nth-child(1),
  h4:hover > :nth-child(1),
  h5:hover > :nth-child(1),
  h6:hover > :nth-child(1) {
    visibility: visible;
  }

  h2 > :nth-child(1):hover,
  h3 > :nth-child(1):hover,
  h4 > :nth-child(1):hover,
  h5 > :nth-child(1):hover,
  h6 > :nth-child(1):hover {
    path {
      fill: cornflowerblue;
    }
  }

  & > :nth-child(1) {
    position: sticky;
    top: 0;
    z-index: 2;
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

  .LikePoem {
    padding-inline: auto;
    display: grid;
    justify-items: center;
    margin-bottom: 2rem;
    & > * {
      margin-bottom: 0;
    }
  }

  @media (max-width: 382px) {
    .LikePoem {
      justify-items: start;
    }
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

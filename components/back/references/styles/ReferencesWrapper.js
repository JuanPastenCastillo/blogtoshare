import styled from "styled-components"

export const ReferencesWrapper = styled.div`
  padding-inline: 2rem;
  margin-bottom: 36px;

  &.linkRecoveryFrom:visited {
    color: cornflowerblue;
  }

  & > pre {
    padding-top: 8px;
    white-space: pre-wrap;
  }

  & > pre > ol > li {
    margin-bottom: 24px;
  }

  & > pre > ol > li > a,
  & > pre > div > a {
    margin-left: 2px;
    font-weight: bolder;
    text-decoration: underline;
    white-space: normal;
    word-break: break-word;

    &:hover {
      color: cornflowerblue;
    }
  }

  & > pre > div > :not(:first-child) {
    margin-left: 8px;
  }
`

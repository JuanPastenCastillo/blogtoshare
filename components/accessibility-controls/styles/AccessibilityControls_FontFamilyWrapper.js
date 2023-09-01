import styled from "styled-components"

export const AccessibilityControls_FontFamilyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5vw;

  & > * {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;

    border: 4px solid transparent;

    padding: 8px;

    &.activeFont {
      border: 4px solid hsl(193.4, 48%, 64.7%);
      background-color: hsl(193.4, 48%, 34.7%);
    }

    &:not(.activeFont):hover {
      border: 4px solid hsl(193.4, 48%, 64.7%);
      background-color: hsl(193.4, 48%, 24.7%);
    }

    & > * {
      margin: 0;
    }

    &.sans-serif {
      & > * {
        font-family: sans-serif;
      }
    }

    &.serif {
      & > * {
        font-family: serif;
      }
    }

    & > :nth-child(2) {
      font-size: 40px !important;
    }
  }
`

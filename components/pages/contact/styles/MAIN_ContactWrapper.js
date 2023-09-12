import styled from "styled-components"
import { PRIMARY, SECONDARY } from "../../../../assets/Colors"

export const MAIN_ContactWrapper = styled.div`
  display: grid;
  place-self: center;
  gap: 24px;

  & > :nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 24px;

    & > :nth-child(2) {
      fill: ${PRIMARY.PRIMARY_LIGHT};
      width: 50px;
      height: 50px;
    }
  }

  & > :nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: center;

    & > a {
      & > * {
        width: clamp(2rem, calc(49vw), 20rem);
        height: clamp(2rem, calc(49vw), 20rem);

        fill: ${SECONDARY.SECONDARY_LIGHT};

        cursor: pointer;

        &:hover {
          fill: ${PRIMARY.PRIMARY_LIGHT};
        }
      }
    }
  }
`

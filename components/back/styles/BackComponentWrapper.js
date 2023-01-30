import styled from "styled-components"
import { PRIMARY, SECONDARY } from "../../../assets/Colors"

export const BackComponentWrapper = styled.div`
  & > :nth-child(1) {
    width: 33px;
    height: 33px;
    border-radius: 8px;

    &:hover {
      background-color: ${PRIMARY.PRIMARY_DARK};
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    & >  :nth-child(1) {
      &:hover {
        background-color: ${SECONDARY.SECONDARY_DARK};
      }
    }
  }
`

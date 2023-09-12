import styled from "styled-components"
import { PRIMARY } from "../../../../assets/Colors"

const AllContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(200px, 1fr));

  gap: 1rem;
  overflow-x: hidden;

  padding: 24px;

  & > ul {
    & > li {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
      position: relative;

      & > a {
        padding: 1.2rem;
      }
      
      &::before {
        background-color: ${PRIMARY.PRIMARY};
        content: "";
        inset: 0;
        position: absolute;
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.5s ease-out;
        z-index: -1;
      }

      &:hover::before,
      &:focus-within::before {
        transform: scaleX(1);
        transform-origin: left;
      }

      
    }
  }
`

export default AllContentWrapper

import styled from "styled-components"

export const AccessibilityControlsWrapper = styled.div`
  border: 2px solid white;

  position: fixed;
  z-index:2;
  bottom: 0px;
  right: ${({ show, widthParent }) => (show && widthParent ? `0` : `-${widthParent}px`)};

  visibility: ${({ show }) => (show ? `visible` : `hidden`)};

  background-image: linear-gradient(hsl(220.9, 39.3%, 11%), hsl(215, 13.8%, 14.1%));

  width: 91vw;
  aspect-ratio: 3/1;
  

  * {
    font-size: 22px !important;
    letter-spacing: normal !important;
    word-spacing: normal !important;
    line-height: normal !important;
  }

  & > :last-child {
    cursor: pointer;
    visibility: visible;
    position: absolute;

    left: ${({ widthElementToShowAndHide, show }) =>
    show ? `-${widthElementToShowAndHide}px` : `-${widthElementToShowAndHide}px`};

    border: none;
    padding: 4px;

    fill: ${({ show }) => (show ? `#00ddff` : ``)};
    background-color: ${({ show }) => show && `hsl(240, 5.7%, 17.8%)`};
    border-radius: 8px;

    bottom: ${({ show }) => (show ? `0px` : `-5px`)};

    &:hover {
      filter: brightness(95%);
    }

    & > :nth-child(1) {
      /* border: 2px solid green; */

      /* display: flex; */
      /* align-items: center; */
      /* justify-content: center; */
    }

    /* z-index: -1; */
    /* border:none; */
  }
`

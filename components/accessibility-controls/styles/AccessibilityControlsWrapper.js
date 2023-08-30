import styled from "styled-components"

export const AccessibilityControlsWrapper = styled.div`
  position: fixed;
  z-index: 2;
  bottom: 0px;
  right: ${({ show, widthParent }) => (show && widthParent ? `0` : `-${widthParent}px`)};

  visibility: ${({ show }) => (show ? `visible` : `hidden`)};

  background-image: linear-gradient(hsl(220.9, 39.3%, 11%), hsl(215, 13.8%, 14.1%));

  width: 91vw;
  aspect-ratio: 3/1;

  font-size: 22px !important;
  letter-spacing: normal !important;
  word-spacing: normal !important;
  line-height: normal !important;

  border-top-left-radius: 28px;
  /* border-bottom-left-radius:28px; */

  box-shadow: -1px -1px 1.2px hsla(0, 0%, 100%, 0.2),
    -1.6px -1.6px 1.9px -1.1px hsla(0, 0%, 100%, 0.3);
  
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

    left: ${({ widthElementToShowAndHide, show }) => (show ? `-${widthElementToShowAndHide}px` : `-${widthElementToShowAndHide}px`)};

    border: none;
    padding: 4px;

    fill: ${({ show }) => (show ? `#00ddff` : ``)};
    background-color: ${({ show }) => show && `hsl(240, 5.7%, 17.8%)`};
    border-radius: 8px;

    bottom: ${({ show }) => (show ? `0px` : `-5px`)};

    &:hover {
      filter: brightness(95%);
    }
  }
`

import styled from "styled-components"

export const AccessibilityControlsWrapper = styled.div`
  position: fixed;
  z-index: 2;
  bottom: 0px;
  right: ${({ show, widthParent }) => (show && widthParent ? `0` : `-${widthParent}px`)};

  visibility: ${({ show }) => (show ? `visible` : `hidden`)};

  background-image: linear-gradient(hsla(220.9, 39.3%, 11%, 0.7), hsla(215, 13.8%, 14.1%, 0.7));
  backdrop-filter: blur(3.9px);
  
  width: ${({ widthElementToShowAndHide, show }) => (show ? `calc(100vw - ${widthElementToShowAndHide}px)` : "")};
  aspect-ratio: 3/1;

  font-size: 22px !important;
  letter-spacing: normal !important;
  word-spacing: normal !important;
  line-height: normal !important;

  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  border: 2px solid white;

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

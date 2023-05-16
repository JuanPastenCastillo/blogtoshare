import styled from "styled-components"

export const AccessibilityControlsWrapper = styled.div`
  border: 2px solid white;

  position: fixed;
  bottom: 0;
  right: ${({ show, width }) => (show && width ? `0` : `-${width}px`)};

  visibility: ${({ show }) => (show ? `visible` : `hidden`)};

  background-image: linear-gradient(hsl(220.9, 39.3%, 11%), hsl(215, 13.8%, 14.1%));

  /* z-index:3; */

  & > :nth-child(1){
    display: flex;
    /* align-items: center; */
    justify-content: center;
    flex-direction:column;
    
  }
  
  
  & > button {
    cursor: pointer;
    visibility: visible;
    position: absolute;
    left: ${({ accessibilityIconWidth, show }) =>
    show ? `-${accessibilityIconWidth + 10}px` : `-${accessibilityIconWidth}px`};

    bottom: ${({ show }) => (show ? `0px` : `-5px`)};

    /* z-index: -1; */
    /* border:none; */
  }
`

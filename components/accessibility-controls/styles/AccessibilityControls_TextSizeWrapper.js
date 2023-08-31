import styled from "styled-components"

export const AccessibilityControls_TextSizeWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  & > :nth-child(1){
    fill: transparent;
    stroke:white;
    stroke-width: 3px;
  }
  
  
  & > :nth-child(1),
  & > :nth-child(3) {
    place-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 55px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    
  }

  & > :nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    
    & > * {
      width: 55px;
      aspect-ratio: 1/1;
      border-radius: 50%;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    & > :nth-child(1),
    & > :nth-child(3) {
      cursor: pointer;
      fill: cornflowerblue;

      &:hover {
        filter: sepia(70%);
        background-color: red;
        fill: white;
      }
    }
    
    & > :nth-child(2){
      font-family: sans-serif !important;
    }
  }

  & > :nth-child(3) {
    place-self: center;
    width: 55px;
    aspect-ratio: 1/1;
    border-radius: 50%;

    justify-self: start;
    cursor: pointer;

    fill: cornflowerblue;

    &:hover {
      filter: sepia(70%);
      background-color: red;
      fill: white;
    }
  }
`

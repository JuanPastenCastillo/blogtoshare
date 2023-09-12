import styled from "styled-components"
import { PRIMARY } from "../../../assets/Colors"

export const AboutThisPageWrapper = styled.div`
  display: grid;
  justify-items: center;
  
  grid-template-columns: repeat(1, minmax(200px, 1fr));
  
  gap:2rem;
  
  margin-inline: 24px;
  

  h1 {
    text-align: center;
    background: linear-gradient(to right, ${PRIMARY.PRIMARY_LIGHT} 20%, hsl(258.8, 68.1%, 58.2%) 50%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    font-size: clamp(3.5rem, 10vw, 4.8rem);
    span {
      font-size: inherit;
      display: block;
    }
  }
  
  p{
    font-size: 3rem;
    
    & > a{
      font-size: inherit;
      text-decoration: underline;
      text-decoration-color: cornflowerblue;
      
      &:hover{
        text-decoration-color: hsl(218.5, 79.2%, 56.1%);
      }
      
    }
  }
  
`

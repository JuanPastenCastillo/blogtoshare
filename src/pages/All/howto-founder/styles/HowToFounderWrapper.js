import styled from "styled-components";


const HowToFounderWrapper = styled.div`
  /* border: 2px solid crimson; */
  
  &> :nth-child(1){
    margin-bottom: 18px;
  }
  
  & > * + * {
    /* border: 2px solid crimson; */
    margin-bottom: 8px;
    
  }
  
  
  & > :not(:last-child){
    /* border: 2px solid crimson; */
    /* margin-bottom: 18px; */
    
  }
  
  & > p > a{
    text-decoration: underline;
    
  }
  
`

export default HowToFounderWrapper
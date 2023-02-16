import styled from "styled-components"

const DinamycWrapper = styled.div`
  padding: 2rem;
  
  & > :nth-child(1){
    position: sticky;
    top: 0;
    z-index:1;
    margin-left: -2rem;
    
    
    & > svg{
      background-color: black;  
    }
  }
  
  .shouldIndent{
    margin-left: 24px;
  }

  & > :last-child {
    margin-top: 32px;
    margin-bottom: 120px;
    position: relative;
    height: 5px;
    background-color: white;
    
    & > h2 {
      padding-top: 8px;
      margin-bottom: 8px;
    }
    
    & > pre{
      padding-top: 8px;
      white-space: pre-wrap;
    }
    
    & > pre > div > a{
      margin-left: 2px;
      font-weight: bolder;
      text-decoration: underline;
      white-space: normal;
      
    }
    
    & > pre > div >:not(:first-child){
      margin-left: 8px;
    }

    &::before {
      content: "";
      position: absolute;
      top: -10px;
      left: 50%;
      transform: translate(-50%, 0);
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: white;
    }

    /* &::before,
    &::after {
      content: "";
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: green;
    }
    
    &::before{
      left: -10px;
    }
    &::after{
      right: -10px;
    } */
  }
`

export default DinamycWrapper

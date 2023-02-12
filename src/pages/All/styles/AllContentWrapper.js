import styled from "styled-components";

const AllContentWrapper = styled.div`
  display: grid;
  gap:1rem;
  overflow-x: hidden;
  
  & > ul{
    border: 2px solid green;
    
    & > li{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    }
    
    & > li > a{
      padding: 1.2rem;
    }
    & > li > a:hover{
      background-color: cornflowerblue;
    }
    
    
    
  }
  
`

export default AllContentWrapper
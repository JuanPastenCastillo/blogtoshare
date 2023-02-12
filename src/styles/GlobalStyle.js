import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  font-family: 'Space Grotesk', sans-serif;
  color-scheme: dark;
  
}

h1,h2,h3,h4,h5{
   margin-bottom: 2rem ;
  }
  
p{
  margin-bottom:1rem ;
}

  

a {
  color: inherit;
  text-decoration: none;
}


`

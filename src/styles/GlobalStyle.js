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

h2{
  margin-top: 2rem;
  margin-bottom: 0.4rem;
}

h3,h4, h5, h6{
  margin-bottom: 0.3rem;
}


h4,h5,h6{
  margin-left: 48px;
}



h1,h2,h3,h4,h5,h6{
   font-weight: 800;
}

h4, h5, h6{
  font-size: 19px;
  font-style: italic;
}


h5, h6{
  text-decoration: underline;
  
}

h6{
  font-weight: 400;
}


  
p{
  margin-bottom:1rem ;
}

  

a {
  color: inherit;
  text-decoration: none;
}


`

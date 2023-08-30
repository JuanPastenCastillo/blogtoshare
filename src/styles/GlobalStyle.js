import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
  
  
   word-spacing: ${({ wordSpacing }) => wordSpacing};
   
   /* Add here the word-spacing */
   /* word-spacing: 0.5em; */
   
   /* Add here the line-height */
   /* line-height: 2.6em; */
  
   /* Add here the color-scheme */
  color-scheme: dark; 
  
  /* Add here the font-family */
  font-family: 'Space Grotesk'; 
  
  
  
}

html,
body {
  max-width: 100vw;
   /* Add here the margin-inline */
   /* margin-inline: 200px; */
}

h1{
  font-size:${({ fontSize }) => fontSize && `${fontSize.h1}`};
}

h2{
  margin-top: 2rem;
  margin-bottom: 0.4rem;
  font-size:${({ fontSize }) => fontSize && `${fontSize.h2}`};
}

h3,h4,h5,h6{
  margin-bottom: 0.3rem;
  font-size:${({ fontSize }) => fontSize && `${fontSize.h3h4h5h6}`};
}

*:not(h1):not(h2):not(h3):not(h4):not(h5):not(h6){
  font-size:${({ fontSize }) => `${fontSize.p}`};
}

h4,h5,h6{
  margin-left: 48px;
}

h1,h2,h3,h4,h5,h6{
   font-weight: 800;
}

h4, h5, h6{
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

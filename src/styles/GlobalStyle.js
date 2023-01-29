import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  transition: all 0.3s;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
  
}

/* body {
  padding: 0 1.2rem 1.2rem 1.2rem;
} */

a {
  color: inherit;
  text-decoration: none;
}

@media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
    /* background-color: cornflowerblue; */
  }
}



`



/* 

!FH0
Make the build and push the proyect to internet


!FH
Add fonts

https://fonts.google.com/specimen/Miriam+Libre?query=sahar


Evaluate this:

1) Magdelin
2) Articulat
3) Sahar
4) Sofia Pro
5) Aristotelica Pro
6) Gilmer
7) Aurora Grotesk
8) Pontiac 
9) Quatera
10) TT Norms Pro
11) Maine
12) Meddle


*/
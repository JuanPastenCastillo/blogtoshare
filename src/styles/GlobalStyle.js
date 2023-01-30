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
  overflow-x: hidden;
  font-family: 'Space Grotesk', sans-serif;
  color-scheme: dark;
}


a {
  color: inherit;
  text-decoration: none;
}


`

import styled from "styled-components"

export const NavbarWrapper = styled.nav`
  margin-bottom: 32px;
  margin-top: 16px;
  padding-bottom: 2px;

  box-shadow: 0.3px 0.5px 0.7px hsl(218.5, 79.2%, 66.1%, 0.6), 0.5px 0.9px 1.2px -1.2px hsl(218.5, 79.2%, 66.1%, 0.6),
    1.2px 2.4px 3px -2.5px hsl(218.5, 79.2%, 66.1%, 0.6);

  & > :nth-child(1) {
    display: none;
    width: 70px;
    height: 70px;
    & > path {
      fill: white;
    }
  }

  & > :nth-child(2) {
    display: flex;
    margin-inline: 32px;
    justify-content: center;
    gap: 16px;

    & > a {
      display: flex;
      justify-content: center;
      align-items: center;

      flex-grow: 1;

      text-transform: capitalize;
      list-style: none;

      border: 2px solid transparent;
      cursor: pointer;
      transition: all 0.1s;

      border-bottom: 2px solid hsl(218.5, 79.2%, 66.1%, 0.6);
      height: 55px;

      &:hover,
      &:active {
        border: 2px solid hsl(218.5, 79.2%, 66.1%, 0.9);
      }
    }
  }

  @media (max-width: 768px) {
    box-shadow: 0.3px 0.5px 0.7px hsl(180, 100%, 35%), 0.5px 0.9px 1.2px -1.2px hsl(180, 100%, 35%),
    1.2px 2.4px 3px -2.5px hsl(180, 100%, 35%);
    
    padding-bottom: 0px;
    
    & > :nth-child(1) {
      display: block;
      cursor: pointer;
      margin-left: auto;

      position: relative;
      z-index: 1;

      &:hover > path {
        fill: hsl(180, 100%, 35%);
      }

      & > path {
        fill: ${(x) => (x.navExpanded ? "hsl(180, 100%, 35%)" : "white")};
        
      }
    }

    & > :nth-child(2) {
      gap: 0px;
      margin-inline: 0px;
      display: ${(x) => (x.navExpanded ? "flex" : "none")};
      flex-direction: column;

      background-color: hsl(180, 100%, 15%);


      & > a {
        border: 2px solid transparent;
      }
      & > a:hover,
      & > a:active {
        background-color: hsl(180, 100%, 25%);
        border: 2px solid transparent;
        border-radius: 0px;
      }
    }
  }
`


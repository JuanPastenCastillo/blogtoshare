import styled, { keyframes } from "styled-components"
import { PRIMARY, SECONDARY } from "../../assets/Colors.js"

const milliseconsToUse = `0.2s`

const mustHideKeyframes = keyframes`
  from {
    transform:translateY(0px);
  }

  to {
    transform:translateY(-100px);
    opacity:0;
  }
`
const mustShowKeyframes = keyframes`
  from {
    transform:translateY(-100px);
    opacity: 0;
  }

  to {
    transform:translateY(0);
    opacity: 1;
  }
`

export const NavbarWrapper = styled.nav`
  margin-bottom: 32px;
  margin-top: 16px;
  padding-bottom: 2px;

  box-shadow: 0.3px 0.5px 0.7px hsl(218.5, 79.2%, 66.1%, 0.6), 0.5px 0.9px 1.2px -1.2px hsl(218.5, 79.2%, 66.1%, 0.6),
    1.2px 2.4px 3px -2.5px hsl(218.5, 79.2%, 66.1%, 0.6);

    background-color: hsl(248.6, 11.5%, 12%);
    

  &.mustShow {
    animation: ${mustShowKeyframes} ${milliseconsToUse} linear;
    position: sticky;
    top: 0;
    z-index: 2;
  }
  &.mustHide {
    animation: ${mustHideKeyframes} ${milliseconsToUse} linear forwards;
    position: sticky;
    top: 0;
    z-index: 2;

    /* opacity:0; */
  }

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

    & > li {
      display: flex;
      justify-content: center;
      align-items: center;

      flex-grow: 1;

      text-transform: capitalize;
      list-style: none;

      border: 2px solid transparent;
      cursor: pointer;
      transition: all 0.1s;

      border-bottom: 2px solid ${PRIMARY.PRIMARY_DARK};
      height: 55px;

      &:hover,
      &:active {
        border: 2px solid ${PRIMARY.PRIMARY_LIGHT};
      }

      & > a {
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .active {
      color: ${PRIMARY.PRIMARY_LIGHT};
      border: 2px solid ${PRIMARY.PRIMARY_LIGHT};
    }
  }

  @media (max-width: 768px) {
    box-shadow: 0.3px 0.5px 0.7px ${SECONDARY.SECONDARY}, 0.5px 0.9px 1.2px -1.2px ${SECONDARY.SECONDARY},
      1.2px 2.4px 3px -2.5px ${SECONDARY.SECONDARY};

    padding-bottom: 0px;

    & > :nth-child(1) {
      display: block;
      cursor: pointer;
      margin-left: auto;

      position: relative;
      z-index: 1;

      &:hover > path {
        fill: ${SECONDARY.SECONDARY};
      }

      & > path {
        fill: ${(x) => (x.navExpanded ? `${SECONDARY.SECONDARY_LIGHT}` : "white")};
      }
    }

    & > :nth-child(2) {
      gap: 0px;
      margin-inline: 0px;
      display: ${(x) => (x.navExpanded ? "flex" : "none")};
      flex-direction: column;

      background-color: ${SECONDARY.SECONDARY_DARK};

      & > a {
        border: 2px solid transparent;
      }
      & > a:hover,
      & > a:active {
        background-color: ${SECONDARY.SECONDARY_DARK};
        border: 2px solid transparent;
        border-radius: 0px;
      }

      .active {
        background-color: ${SECONDARY.SECONDARY_LIGHT};
        color: black;
        border: 2px solid transparent;
      }
    }
  }
`

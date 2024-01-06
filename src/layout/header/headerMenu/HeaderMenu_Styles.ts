import styled, { css } from "styled-components";
import { theme } from "styles/Theme";
import { Link } from "react-scroll"

// Menu

const MenuItem = styled.li``

const NavLink = styled( Link )`
  color: ${ theme.colors.primaryFont };
  font-family: "Be Vietnam", sans-serif;
  font-size: 18px;
  font-weight: 400;

  position: relative;
  overflow: hidden;

  svg {
    position: absolute;
    left: -32px;
    transform: scale(0);
    transition: .4s;
  }

  &:hover,
  &.active {
    overflow: visible;
    color: ${ theme.colors.accent };

    svg {
      transform: scale(1);
    }
  }
`

// Desktop Menu

const DesktopMenu = styled.nav`
  ul {
    display: flex;
    gap: 82px;
  }
`

// Mobile Menu

const MobileMenu = styled.nav<{ isOpen: boolean }>`
  width: 100%;
  position: relative;

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    gap: 20px;
    width: 100%;
  }
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
  width: 32px;
  height: 38px;
  padding: 6px 0;

  position: fixed;
  top: 20px;
  left: 32px;

  span {
    display: block;
    background-color: ${ theme.colors.accent };
    height: 3px;
    width: 32px;
    border-radius: 1.5px;
    position: relative;

    ${ props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: transparent;
    ` }
    &::before {
      content: "";
      background-color: ${ theme.colors.accent };
      height: 3px;
      width: 32px;
      border-radius: 1.5px;
      position: absolute;
      left: 0;
      transform: translateY(-8px);

      ${ props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0px);
      ` }
    }

    &::after {
      content: "";
      background-color: ${ theme.colors.accent };
      height: 3px;
      width: 32px;
      border-radius: 1.5px;
      position: absolute;
      left: 0;
      transform: translateY(8px);

      ${ props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0px);
      ` }
    }
  }
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  max-width: 200px;
  position: absolute;
  right: 10px;
  transform: ${ props => props.isOpen ? "translateY(0)" : "translateY(-100%)" };
  opacity: ${ props => props.isOpen ? "1" : "0" };
  transition: 0.5s ease-in-out;
`

export const S = {
  MenuItem,
  Link: NavLink,
  DesktopMenu,
  MobileMenu,
  BurgerButton,
  MobileMenuPopup,
}

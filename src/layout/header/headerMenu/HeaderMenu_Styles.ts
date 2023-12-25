import styled, { css, keyframes } from "styled-components";
import { theme } from "styles/Theme";

// Menu

const MenuItem = styled.li`
  position: relative;
  overflow: hidden;

  svg {
    color: ${ theme.colors.accent };
    margin-right: 8px;

    position: absolute;
    left: -100%;
  }

  &:hover {
    overflow: visible;

    svg {
      left: -32px;
    }
  }
`

const Link = styled.a`
  color: ${ theme.colors.primaryFont };
  font-family: "Be Vietnam", sans-serif;
  font-size: 18px;
  font-weight: 400;

  &:hover {
    color: ${ theme.colors.accent }
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

const slideIn = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  transform-origin: top;
  animation: ${ slideIn } 0.5s ease-in-out;
  display: ${ props => (props.isOpen ? 'block' : 'none') };
`

export const S = {
  MenuItem,
  Link,
  DesktopMenu,
  MobileMenu,
  BurgerButton,
  MobileMenuPopup,
}

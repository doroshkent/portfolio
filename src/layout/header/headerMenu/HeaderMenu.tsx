import React from 'react';
import styled from "styled-components";
import { theme } from "styles/Theme";
import gears from "assets/img/gears.svg"

export const HeaderMenu = (props: {menuItems: Array<string>}) => {
  return (
    <StyledHeaderMenu>
      <ul role="menu">
        {props.menuItems.map((item, index) => {
          return <ListItem key={index} role="menuitem">
            <Link href="">{ item }</Link>
          </ListItem>
        })}
      </ul>
    </StyledHeaderMenu>
  );
};

const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    gap: 50px;
  }
`

const ListItem = styled.li`
  position: relative; 

  &::before {
    content: url("${gears}");
    position: absolute;
    top: 0; 
    left: -30px; 
    height: 100%;
    visibility: hidden;
  }

  &:hover {
    &::before {
      visibility: visible;
    }
  }
`

const Link = styled.a`
  color: ${theme.colors.primaryFont};
  font-family: "Be Vietnam", sans-serif;
  font-size: 18px;
  font-weight: 400;
  
  &:hover {
    color: ${theme.colors.accent}
  }
`

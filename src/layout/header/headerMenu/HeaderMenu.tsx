import React from 'react';
import styled from "styled-components";
import { theme } from "styles/Theme";
import { Icon } from "components/icon/Icon";


export const HeaderMenu = (props: {menuItems: Array<string>}) => {
  return (
    <StyledHeaderMenu>
      <ul role="menu">
        {props.menuItems.map((item, index) => {
          return <ListItem key={index} role="menuitem">
            <Icon iconId={"gears"} width="25" height="23" viewBox="0 0 25 23"/>
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
  overflow: hidden;

  svg {
    color: ${theme.colors.accent};
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
  color: ${theme.colors.primaryFont};
  font-family: "Be Vietnam", sans-serif;
  font-size: 18px;
  font-weight: 400;
  
  &:hover {
    color: ${theme.colors.accent}
  }
`

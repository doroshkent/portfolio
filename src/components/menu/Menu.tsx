import React from 'react';
import styled from "styled-components";

export const Menu = (props: {menuItems: Array<string>}) => {
  return (
    <StyledMenu>
      <ul role="menu">
        {props.menuItems.map((item, index) => {
          return <li key={index} role="menuitem">
            <a href="">{ item }</a>
          </li>
        })}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
  }
`

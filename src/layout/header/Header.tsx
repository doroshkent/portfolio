import React from 'react';
import { Logo } from "components/logo/Logo";
import { Menu } from "components/menu/Menu";
import styled from "styled-components";

const items = ['Skills', 'Projects', 'Contact me']

export const Header = () => {
  return (
    <StyledHeader>
      <Logo/>
      <Menu menuItems={items}/>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #87d76c;
  display: flex;
  justify-content: space-between;
`

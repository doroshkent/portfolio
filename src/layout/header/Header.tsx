import React from 'react';
import { Logo } from "components/logo/Logo";
import styled from "styled-components";
import { Container } from "components/Container";
import { FlexWrapper } from 'components/FlexWrapper';
import { HeaderMenu } from "layout/header/headerMenu/HeaderMenu";

const items = ['Skills', 'Projects', 'Contact me']

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify={"space-between"} align={"center"}>
          <Logo/>
          <HeaderMenu menuItems={items}/>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #FCFCFC;
  padding: 12px 0;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.20), 0 2px 1px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.14);
  
  position: fixed;
  top: 0;
  left: 0; 
  right: 0;
  z-index: 9999;
`

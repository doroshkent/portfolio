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
  position: fixed;
  top: 0;
  left: 0; 
  right: 0;
  z-index: 9999;
`

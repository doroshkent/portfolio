import React from 'react';
import logo from "assets/img/logo.png";
import styled from "styled-components";
import { theme } from "styles/Theme";

export const Logo = () => {
  return (
    <LogoLink href="#">
      <LogoIcon src={logo} alt="logo"/>
    </LogoLink>
  );
};

const LogoIcon = styled.img`
  height: 75px;
`

const LogoLink = styled.a`
  @media ${theme.media.mobile} {
    display: none;
  }
`

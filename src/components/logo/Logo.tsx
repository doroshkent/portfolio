import React from 'react';
import logo from "assets/img/logo.png";
import styled from "styled-components";

export const Logo = () => {
  return (
    <a href="">
      <StyledLogo src={logo} alt="logo"/>
    </a>
  );
};

const StyledLogo = styled.img`
  width: 90px;
`

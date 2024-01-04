import React, { useEffect, useState } from 'react';
import { Logo } from "components/logo/Logo";
import { S } from "./Header_Styles";
import { Container } from "components/Container";
import { FlexWrapper } from 'components/FlexWrapper';
import { DesktopMenu } from "layout/header/headerMenu/desktopMenu/DesktopMenu";
import { MobileMenu } from "layout/header/headerMenu/mobileMenu/MobileMenu";

export const Header: React.FC = () => {
  const [ width, setWidth ] = useState(window.innerWidth);
  const breakpoint = 576;

  const [ mobileMenuIsOpen, setMobileMenuIsOpen ] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <S.Header isOpen={mobileMenuIsOpen}>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Logo/>
          { width < breakpoint ? <MobileMenu isOpen={mobileMenuIsOpen} setIsOpen={setMobileMenuIsOpen}/> : <DesktopMenu /> }
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};

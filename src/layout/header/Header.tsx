import React, { useEffect, useState } from 'react';
import { Logo } from "components/logo/Logo";
import { S } from "./Header_Styles";
import { Container } from "components/Container";
import { FlexWrapper } from 'components/FlexWrapper';
import { DesktopMenu } from "layout/header/headerMenu/desktopMenu/DesktopMenu";
import { MobileMenu } from "layout/header/headerMenu/mobileMenu/MobileMenu";

const items = [ 'Skills', 'Projects', 'Contact me' ];

export const Header: React.FC = () => {
  const [ width, setWidth ] = useState(window.innerWidth);
  const breakpoint = 576;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <S.Header>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Logo/>
          { width < breakpoint ? <MobileMenu menuItems={ items }/> : <DesktopMenu menuItems={ items }/> }
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};

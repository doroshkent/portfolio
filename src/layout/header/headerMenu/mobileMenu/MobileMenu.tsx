import React, { useState } from 'react';
import { S } from "./../HeaderMenu_Styles"
import { Menu } from "layout/header/headerMenu/menu/Menu";


export const MobileMenu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
  const [ isOpen, setIsOpen ] = useState(false);

  const onBurgerButtonTouchHandler = () => {
    setIsOpen(!isOpen);
  }

  return (
    <S.MobileMenu isOpen={ isOpen }>
      <S.BurgerButton onTouchStart={ onBurgerButtonTouchHandler } isOpen={ isOpen }>
        <span></span>
      </S.BurgerButton>

      <S.MobileMenuPopup isOpen={ isOpen }>
        <Menu menuItems={ props.menuItems }/>
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};

import React from 'react';
import { S } from "./../HeaderMenu_Styles"
import { Menu } from "layout/header/headerMenu/menu/Menu";

type MobileMenuPropsType = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const MobileMenu: React.FC<MobileMenuPropsType> = ({ isOpen, setIsOpen }) => {
  const onBurgerButtonTouchHandler = () => {
    setIsOpen( !isOpen );
  }

  return (
    <S.MobileMenu isOpen={ isOpen }>
      <S.BurgerButton onTouchStart={ onBurgerButtonTouchHandler } isOpen={ isOpen }>
        <span></span>
      </S.BurgerButton>

      <S.MobileMenuPopup isOpen={ isOpen }>
        <Menu />
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};

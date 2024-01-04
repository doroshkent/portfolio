import React from 'react';
import { S } from "./../HeaderMenu_Styles";
import { Menu } from "layout/header/headerMenu/menu/Menu";


export const DesktopMenu: React.FC = () => {
  return (
    <S.DesktopMenu>
      <Menu />
    </S.DesktopMenu>
  );
};

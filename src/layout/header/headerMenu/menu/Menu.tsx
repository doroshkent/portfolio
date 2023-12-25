import React from 'react';
import { Icon } from "components/icon/Icon";
import { S } from "./../HeaderMenu_Styles";

export const Menu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
  return (
    <ul role="menu">
      { props.menuItems.map((item, index) => {
        return <S.MenuItem key={ index } role="menuitem">
          <Icon iconId="gears" width="25" height="23" viewBox="0 0 25 23"/>
          <S.Link href="#">{ item }</S.Link>
        </S.MenuItem>
      }) }
    </ul>
  );
};

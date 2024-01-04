import React from 'react';
import { Icon } from "components/icon/Icon";
import { S } from "./../HeaderMenu_Styles";

const menuItems = [
  {
    title: 'Skills',
    href: 'skills'
  },
  {
    title: 'Projects',
    href: 'projects'
  },
  {
    title: 'Contact me',
    href: 'contact'
  },
];

export const Menu: React.FC = () => {
  return (
    <ul role="menu">
      { menuItems.map((item, index) => {
        return <S.MenuItem key={ index } role="menuitem">
          <S.Link activeClass="active"
                  to={item.href}
                  spy={true}
                  smooth={true}
                  offset={-70}
          >
            <Icon iconId="gears" width="25" height="23" viewBox="0 0 25 23"/>
            { item.title }
          </S.Link>
        </S.MenuItem>
      }) }
    </ul>
  );
};

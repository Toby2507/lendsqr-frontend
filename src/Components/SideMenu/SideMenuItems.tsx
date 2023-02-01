import { useState } from 'react';
import data from '../../Data/submenuData.json';
import defaultMenu from '../../Data/defaultMenus.json';
import { menuItemInterface, sidemenuInterface } from '../../Utils/interfaces';
import SingleMenuItem from './SingleMenuItem';

const SideMenuItems = () => {
  const [activeMenu, setActiveMenu] = useState<string>("Users");
  const menudata: sidemenuInterface = data;
  const menuHeadings = Object.keys(menudata);
  const defaults: menuItemInterface[] = defaultMenu;

  const activate = (val: string) => {
    setActiveMenu(val);
  };
  return (
    <section className="sidemenu-items">
      {defaults.map((item, i) => {
        return <SingleMenuItem key={i} activate={activate} isActive={activeMenu === item.menuTitle} {...item} />;
      })}
      {menuHeadings.map((heading, i) => {
        const headingItems: menuItemInterface[] = menudata[heading as keyof sidemenuInterface];
        return (
          <div key={i}>
            <h2 className="sidemenu-items__heading">{heading}</h2>
            {headingItems.map((item, i) => {
              return <SingleMenuItem key={i} activate={activate} isActive={activeMenu === item.menuTitle} {...item} />;
            })}
          </div>
        );
      })}
    </section>
  );
};

export default SideMenuItems;
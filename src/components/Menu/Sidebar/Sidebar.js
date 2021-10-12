import { useSelector } from "react-redux";

import Menu from "../Menu";
import MenuItem from "../MenuItem";
import SidebarItem from "./SidebarItem";

import './sidebar.scss';

function Sidebar() {
  const userID = useSelector(store => store.auth.user.id);
  const menu = [
    {
      link: `/id${userID}`,
      text: 'Моя страница'
    },
    {
      link: '/feed',
      text: 'Новости'
    },
    {
      link: '/',
      text: 'Друзья'
    }
  ];

  return (
    <aside>
      <Menu className="sidebar">
        {menu.map(item => {
          return (
            <MenuItem key={item.text}>
              <SidebarItem link={item.link} text={item.text} />
            </MenuItem>
          );
        })}
      </Menu>
    </aside>
  );
}

export default Sidebar;
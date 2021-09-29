import Menu from "../Menu";
import MenuItem from "../MenuItem";
import SidebarItem from "./SidebarItem";

function Sidebar() {
  const menu = [
    {
      link: '/',
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
    <Menu className="sidebar">
      {menu.map(item => {
        <MenuItem>
          <SidebarItem link={item.link} text={item.text} />
        </MenuItem>
      })}
    </Menu>
  );
}

export default Sidebar;
import Dropdown from "../Dropdown/Dropdown";
import ProfileButton from "./ProfileButton";
import Menu from "../../Menu/Menu";
import MenuItem from "../../Menu/MenuItem";
import useActions from "../../../hooks/useActions";

import './profile.scss';

function Profile() {
  const classes = {
    menu: 'profile-menu__dropbox',
    item: 'profile-menu__item',
    separator: 'profile-menu__separator'
  }  

  const button = (<ProfileButton/>);
  const {logout} = useActions();

  return (
    <Dropdown dropdownButton={button}>
      <Menu className={classes.menu}>
        <MenuItem>
          <div className={classes.separator}></div>
        </MenuItem>

        <MenuItem>
          <button className={classes.item} onClick={logout}>
            Выйти
          </button>
        </MenuItem>
      </Menu>
    </Dropdown>
  );
}

export default Profile;
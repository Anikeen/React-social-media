import { useLocation } from "react-router";
import UserAvatar from "../../components/User/Avatar/Avatar";
import UserInfo from "../../components/User/Info/Info";

import './user.scss';

function User() {
  const id = useLocation().pathname.slice(3);
  
  return (
    <div className="user-content">
      <div className="narrow-column">
        <UserAvatar />
      </div>

      <div className="wide-column">
        <UserInfo id={id} />
      </div>
    </div>
  );
}

export default User;
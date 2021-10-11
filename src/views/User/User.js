import UserAvatar from "../../components/User/Avatar/Avatar";
import UserInfo from "../../components/User/Info/Info";

import './user.scss';

function User() {
  return (
    <div className="user-content">
      <div className="narrow-column">
        <UserAvatar />
      </div>

      <div className="wide-column">
        <UserInfo/>
      </div>
    </div>
  );
}

export default User;
import { useLocation } from "react-router";
import { useSelector } from "react-redux";

import Spinner from "../../components/UI/Spinner/Spinner";
import UserAvatar from "../../components/User/Avatar/Avatar";
import UserInfo from "../../components/User/Info/Info";

import './user.scss';

function User() {
  const id = useLocation().pathname.slice(3);
  const isLoading = useSelector(store => store.user.isLoading);
  
  return (
    <div className="user-content">
      <div className="narrow-column">
        <UserAvatar />
      </div>

      <div className="wide-column">
        <UserInfo id={id} />
        
        {isLoading && <Spinner customStyles="user-info-spinner" />}
      </div>
    </div>
  );
}

export default User;
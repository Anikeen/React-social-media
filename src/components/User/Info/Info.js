import { useEffect } from "react";
import { useSelector } from "react-redux";
import useActions from "../../../hooks/useActions";

import UserInfoBody from "./InfoBody";
import UserInfoHeader from "./InfoHeader";

function UserInfo() {
  const {getUserInfo} = useActions();
  const info = useSelector(store => store.user.user);

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className="user-info block">
      {info && <UserInfoHeader info={info.user} />}
      {info && <UserInfoBody info={info} />}
    </div>
  );
}

export default UserInfo;
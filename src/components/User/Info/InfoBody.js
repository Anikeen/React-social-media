import { useState } from "react";
import UserInfoAdditional from "./infoAdditional";
import UserInfoBasic from "./infoBasic";

function UserInfoBody(props) {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className="user-info-body">
      <UserInfoBasic info={props.info.basic} />
      
      <button className="user-info-body__toggle" onClick={() => setIsHidden(!isHidden)}>
        {isHidden && <span>Показать подробную информацию</span>}
        {!isHidden && <span>Скрыть подробную информацию</span>}
      </button>
      
      {!isHidden && <UserInfoAdditional info={props.info.additional} />}
    </div>
  );
}

export default UserInfoBody;
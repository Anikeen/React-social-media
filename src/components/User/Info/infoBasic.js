import UserInfoItem from "./InfoItem";

function UserInfoBasic(props) {
  const info = props.info;

  return (
    <div className="user-info-basic">
      {
        info
        ?
          <div className="user-info-basic__items">
            {info.birthday && <UserInfoItem label="День рождения: " text={info.birthday} /> }
            {info.city     && <UserInfoItem label="Город: " text={info.city} /> }
          </div>
        :
          <div className="user-info-missing">
            Информация отсутствует
          </div>
      }
    </div>
  );
}

export default UserInfoBasic;
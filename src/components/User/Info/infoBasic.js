import UserInfoItem from "./InfoItem";

function UserInfoBasic(props) {
  const info = props.info;

  return (
    <div className="user-info-basic">
      {
        info
        ?
          <div className="user-info-basic__items">
            {info.birthday && <UserInfoItem title="День рождения: " text={info.birthday} /> }
            {info.city     && <UserInfoItem title="Город: " text={info.city} /> }
          </div>
        :
          <div className="user-info-body__missing">
            Информация отсутствует
          </div>
      }
    </div>
  );
}

export default UserInfoBasic;
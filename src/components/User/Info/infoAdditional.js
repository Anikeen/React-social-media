
function UserInfoAdditional(props) {
  const info = props.info;

  return (
    <div className="user-info-additional">
      {
        info
        ?
          <div className="user-info-additional__items">
            
          </div>
        :
          <div className="user-info-missing">
            Информация отсутствует
          </div>
      }
    </div>
  );
}

export default UserInfoAdditional;
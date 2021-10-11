
function UserInfoHeader(props) {
  return (
    <div className="user-info-header">
      <h1 className="user-info-header__username">{props.info.name + ' ' + props.info.secondName}</h1>
      <div className="user-info-header__online grey-text-13">{props.info.online}</div>
      <div className="user-info-header__status grey-text-13">{props.info.status}</div>
    </div>
  );
}

export default UserInfoHeader;
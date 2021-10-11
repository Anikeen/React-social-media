
function UserInfoHeader(props) {
  return (
    <div className="user-info-header">
      <h1 className="user-info-header__username">{props.info.name + ' ' + props.info.secondName}</h1>
      <div className="user-info-header__online">{props.info.online}</div>
      <div className="user-info-header__status">{props.info.status}</div>
    </div>
  );
}

export default UserInfoHeader;
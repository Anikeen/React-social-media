
function UserInfoItem(props) {
  return (
    <div className="user-info-item">
      <div className="user-info-item__label">
        {props.label}
      </div>
      
      <div className="user-info-item__text">
        {props.text}
      </div>
    </div>
  );
}

export default UserInfoItem;
import UserInfoItem from "./InfoItem";

function UserInfoBlock(props) {
  return (
    <div className="user-info-block">
      <div className="user-info-block__title">
        {props.title}
      </div>

      {props.items.map(item => <UserInfoItem />)}
    </div>
  );
}

export default UserInfoBlock;
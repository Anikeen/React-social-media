import noImg from '../../../assets/img/user.png';

function UserAvatar() {

  return (
    <div className="block">
      <div className="user-avatar">
        <img className="user-avatar__img" src={noImg} alt="" />
      </div>
    </div>
  );
}

export default UserAvatar;
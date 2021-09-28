import { useSelector } from "react-redux";
import ArrowBottom from '../Icon/ArrowBottom';
import noImg from '../../../assets/img/user.png';

function ProfileButton() {
  const classes = {
    menu: 'profile-menu',
    username: 'profile-menu__username',
    img: 'profile-menu__img',
    arrow: 'profile-menu__arrow'
  }

  const {name, image} = useSelector(store => store.auth.user);
  
  return (
    <div className={classes.menu}>
      <div className={classes.username}>{name}</div>

      <img className={classes.img} src={image ? image : noImg} alt="user image" />

      <span className={classes.arrow}>
        <ArrowBottom height={8} width={12} fill={'#555'}/>
      </span>
    </div>
  );
}

export default ProfileButton;
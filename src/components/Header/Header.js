import './Header.scss';
import Logo from '../UI/Logo/Logo'
import Profile from '../UI/Profile/Profile';
import { useSelector } from 'react-redux';

function Header() {
  const isAuth = useSelector(store => store.auth.isAuth);

  return (
    <header className="page-header">
      <div className="container row">
        <Logo/>
        {isAuth ? <Profile/> : ''}
      </div>
    </header>
  );
}

export default Header;
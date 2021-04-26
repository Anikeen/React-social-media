import './Header.scss';
import Logo from '../UI/Logo/Logo'

function Header() {
  return (
    <header className="page-header">
      <div className="container row">
        <Logo/>
      </div>
    </header>
  );
}

export default Header;
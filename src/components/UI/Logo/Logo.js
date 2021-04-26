import { Link } from 'react-router-dom';
import IconSweater from '../Icon/Sweater';
import './Logo.scss';

function Logo() {
  return (
      <Link className="logo" to="/">
        <IconSweater/>
        <div className="logo__text">свитер</div>
      </Link>
  );
}

export default Logo;
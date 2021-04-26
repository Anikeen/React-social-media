import { Link } from 'react-router-dom';
import IconSweater from '../Icon/Sweater';
import './Logo.css';

function Logo() {
  return (
      <Link className="logo" to="/">
        <IconSweater/>
        <div className="logo_text">свитер</div>
      </Link>
  );
}

export default Logo;
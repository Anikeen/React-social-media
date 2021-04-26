import { Link } from 'react-router-dom';
import './Auth.css';

function Registration() {
  return (
    <section className="auth-section">
      
      <p className="auth-transition">
        Есть аккаунт? <Link className="auth-link" to="/accounts/login">Вход</Link>
      </p>
    </section>
  );
}

export default Registration;
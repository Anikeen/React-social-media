import { Link } from 'react-router-dom';
import './Auth.css';

function Login() {
  return (
    <section className="auth-section">
      
      <p className="auth-transition">
        У вас ещё нет аккаунта? <Link className="auth-link" to="/accounts/registration">Зарегистрироваться</Link>
      </p>
    </section>
  );
}

export default Login;
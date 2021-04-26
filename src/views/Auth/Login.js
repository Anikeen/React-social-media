import { Link } from 'react-router-dom';
import FormAuthLogin from '../../components/Form/Auth/Login';
import './Auth.scss';

function Login() {
  return (
    <section className="auth-section">
      <FormAuthLogin/>

      <p className="auth-transition">
        У вас ещё нет аккаунта? <Link className="auth-link" to="/accounts/registration">Зарегистрироваться</Link>
      </p>
    </section>
  );
}

export default Login;
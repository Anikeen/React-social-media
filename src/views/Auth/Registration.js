import { Link } from 'react-router-dom';
import FormAuthRegistration from '../../components/Form/Auth/Registration';
import './Auth.scss';

function Registration() {
  return (
    <section className="auth-section">
      <FormAuthRegistration/>

      <p className="auth-transition">
        Есть аккаунт? <Link className="auth-link" to="/accounts/login">Вход</Link>
      </p>
    </section>
  );
}

export default Registration;
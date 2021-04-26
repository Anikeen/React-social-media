import './Form.css';

function FormAuthLogin() {
  return (
    <form className="auth-form">
      <input className="auth-form__input" type="email" placeholder="Почтовый адрес" />
      <input className="auth-form__input" type="password" placeholder="Пароль" />
      <button className="auth-form__button">Вход</button>
    </form>
  );
}

export default FormAuthLogin;
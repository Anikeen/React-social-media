import './Form.scss';

function FormAuthRegistration() {
  return (
    <form className="auth-form">
      <input className="auth-form__input" type="email" placeholder="Почтовый адрес" />
      <input className="auth-form__input" type="text" placeholder="Ваше имя" />
      <input className="auth-form__input" type="text" placeholder="Ваша фамилия" />
      <input className="auth-form__input" type="password" placeholder="Пароль" />
      <button className="auth-form__button">Регистрация</button>
    </form>
  );
}

export default FormAuthRegistration;
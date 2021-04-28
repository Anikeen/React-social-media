import './Form.scss';
import useInput from '../../../hooks/useInput';
import Form from '../Form';
import FormInput from '../Input';

function FormAuthLogin() {
  const  className = 'auth-form';
  const  buttonText = 'Вход';
  
  const login = useInput('', {isEmpty: true, isEmail: true});
  const password = useInput('', {isEmpty: true, minLength: 6});

  let loginError = (login.isDirty && login.isEmpty) || (login.isDirty && login.emailError) ? true : false;
  let passwordError = (password.isDirty && password.isEmpty) || (password.isDirty && password.minLengthError) ? true : false;
  
  function onSubmit(e) {
    e.preventDefault();

    if (login.isEmpty) {
      login.setDirty(true);
      loginError = true;
    }

    if (password.isEmpty) {
      password.setDirty(true);
      passwordError = true;
    }

    if(loginError || passwordError) return;

    console.log('test');
  }
  
  return (
    <Form className={className} buttonText={buttonText} onSubmit={onSubmit} >      
      <FormInput {...login} error={loginError} className={className} type="text" placeholder="Почтовый адрес" >
        {(login.isDirty && login.isEmpty) && <span className={`${className}__error`}>Это поле обязательно</span>}
        {(login.isDirty && !login.isEmpty && login.emailError) && <span className={`${className}__error`}>Введите корректный email</span>}
      </FormInput>

      <FormInput {...password} error={passwordError} className={className} type="password" placeholder="Пароль" >
        {(password.isDirty && password.isEmpty) && <span className={`${className}__error`}>Это поле обязательно</span>}
        {(password.isDirty && !password.isEmpty && password.minLengthError) && <span className={`${className}__error`}>Не менее {password.minLength} символов</span>}
      </FormInput>
    </Form>
  );
}

export default FormAuthLogin;
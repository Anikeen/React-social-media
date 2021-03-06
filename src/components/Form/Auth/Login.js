import { useSelector } from 'react-redux';

import useInput from '../../../hooks/useInput';
import useActions from '../../../hooks/useActions.js';

import Form from '../Form';
import FormInput from '../Input';
import './Form.scss';

function FormAuthLogin() {
  const  className = 'auth-form';
  const  buttonText = 'Вход';
  
  const username = useInput('', {isEmpty: true, isEmail: true});
  const password = useInput('', {isEmpty: true, minLength: 6});

  let usernameError = (username.isDirty && username.isEmpty) || (username.isDirty && username.emailError) ? true : false;
  let passwordError = (password.isDirty && password.isEmpty) || (password.isDirty && password.minLengthError) ? true : false;
  
  const {login} = useActions();
  const isLoading = useSelector(store => store.auth.isLoading);

  function onSubmit(e) {
    e.preventDefault();

    if (username.isEmpty) {
      username.setDirty(true);
      usernameError = true;
    }

    if (password.isEmpty) {
      password.setDirty(true);
      passwordError = true;
    }

    if(usernameError || passwordError) return;
    
    login(username.value, password.value);
  }
  
  return (
    <Form 
      className={className} 
      buttonText={buttonText} 
      onSubmit={onSubmit} 
      isLoading={isLoading}
      spinnerStyles="auth-form-spinner"
    >      
      <FormInput {...username} error={usernameError} className={className} type="text" placeholder="Почтовый адрес" >
        {(username.isDirty && username.isEmpty) && <span className={`${className}__error`}>Это поле обязательно</span>}
        {(username.isDirty && !username.isEmpty && username.emailError) && <span className={`${className}__error`}>Введите корректный email</span>}
      </FormInput>

      <FormInput {...password} error={passwordError} className={className} type="password" placeholder="Пароль" >
        {(password.isDirty && password.isEmpty) && <span className={`${className}__error`}>Это поле обязательно</span>}
        {(password.isDirty && !password.isEmpty && password.minLengthError) && <span className={`${className}__error`}>Не менее {password.minLength} символов</span>}
      </FormInput>
    </Form>
  );
}

export default FormAuthLogin;
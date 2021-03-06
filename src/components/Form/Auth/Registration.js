import { useSelector } from 'react-redux';

import useInput from '../../../hooks/useInput';
import useActions from '../../../hooks/useActions.js';

import Form from '../Form';
import FormInput from '../Input';
import './Form.scss';

function FormAuthRegistration() {
  const  className = 'auth-form';
  const  buttonText = 'Регистрация';
  
  const username = useInput('', {isEmpty: true, isEmail: true});
  const password = useInput('', {isEmpty: true, minLength: 6});
  const name = useInput('', {isEmpty: true, minLength: 2, isName: true});
  const lastname = useInput('', {isEmpty: true, minLength: 2, isName: true});

  let usernameError = (username.isDirty && username.isEmpty) || (username.isDirty && username.emailError) ? true : false;
  let passwordError = (password.isDirty && password.isEmpty) || (password.isDirty && password.minLengthError) ? true : false;
  let nameError = (name.isDirty && name.isEmpty) || (name.isDirty && name.minLengthError) ? true : false;
  let lastnameError = (lastname.isDirty && lastname.isEmpty) || (lastname.isDirty && lastname.minLengthError) ? true : false;
  
  const {register} = useActions();
  const isLoading = useSelector(state => state.auth.isLoading);
  
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

    if (name.isEmpty) {
      name.setDirty(true);
      nameError = true;
    }

    if (lastname.isEmpty) {
      lastname.setDirty(true);
      lastnameError = true;
    }

    if(usernameError || nameError || lastnameError || passwordError) return;

    const userData = {
      username: username.value,
      password: password.value,
      name: name.value,
      lastname: lastname.value
    };
    
    register(userData);
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

      <FormInput {...name} error={nameError} className={className} type="text" placeholder="Ваше имя" >
        {(name.isDirty && name.isEmpty) && <span className={`${className}__error`}>Это поле обязательно</span>}
        {(name.isDirty && !name.isEmpty && name.minLengthError) && <span className={`${className}__error`}>Не менее {name.minLength} символов</span>}
      </FormInput>

      <FormInput {...lastname} error={lastnameError} className={className} type="text" placeholder="Ваша фамилия" >
        {(lastname.isDirty && lastname.isEmpty) && <span className={`${className}__error`}>Это поле обязательно</span>}
        {(lastname.isDirty && !lastname.isEmpty && lastname.minLengthError) && <span className={`${className}__error`}>Не менее {lastname.minLength} символов</span>}
      </FormInput>

      <FormInput {...password} error={passwordError} className={className} type="password" placeholder="Пароль" >
        {(password.isDirty && password.isEmpty) && <span className={`${className}__error`}>Это поле обязательно</span>}
        {(password.isDirty && !password.isEmpty && password.minLengthError) && <span className={`${className}__error`}>Не менее {password.minLength} символов</span>}
      </FormInput>
    </Form>
  );
}

export default FormAuthRegistration;
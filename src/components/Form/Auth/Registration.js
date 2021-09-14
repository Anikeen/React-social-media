import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import register from '../../../store/actionCreators/user/register.js';
import useInput from '../../../hooks/useInput';

import Form from '../Form';
import FormInput from '../Input';
import './Form.scss';

function FormAuthRegistration(props) {
  const  className = 'auth-form';
  const  buttonText = 'Регистрация';
  
  const login = useInput('', {isEmpty: true, isEmail: true});
  const password = useInput('', {isEmpty: true, minLength: 6});
  const name = useInput('', {isEmpty: true, minLength: 2, isName: true});
  const secondName = useInput('', {isEmpty: true, minLength: 2, isName: true});

  let loginError = (login.isDirty && login.isEmpty) || (login.isDirty && login.emailError) ? true : false;
  let passwordError = (password.isDirty && password.isEmpty) || (password.isDirty && password.minLengthError) ? true : false;
  let nameError = (name.isDirty && name.isEmpty) || (name.isDirty && name.minLengthError) ? true : false;
  let secondNameError = (secondName.isDirty && secondName.isEmpty) || (secondName.isDirty && secondName.minLengthError) ? true : false;
  
  const history = useHistory();
  const dispatch = useDispatch();
  
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

    if (name.isEmpty) {
      name.setDirty(true);
      nameError = true;
    }

    if (secondName.isEmpty) {
      secondName.setDirty(true);
      secondNameError = true;
    }

    if(loginError || nameError || secondNameError || passwordError) return;

    const userData = {
      login: login.value,
      password: password.value,
      name: name.value,
      secondName: secondName.value
    };
    
    dispatch(register(userData, history.push));
  }
  
  return (
    <Form className={className} buttonText={buttonText} onSubmit={onSubmit} >      
      <FormInput {...login} error={loginError} className={className} type="text" placeholder="Почтовый адрес" >
        {(login.isDirty && login.isEmpty) && <span className={`${className}__error`}>Это поле обязательно</span>}
        {(login.isDirty && !login.isEmpty && login.emailError) && <span className={`${className}__error`}>Введите корректный email</span>}
      </FormInput>

      <FormInput {...name} error={nameError} className={className} type="text" placeholder="Ваше имя" >
        {(name.isDirty && name.isEmpty) && <span className={`${className}__error`}>Это поле обязательно</span>}
        {(name.isDirty && !name.isEmpty && name.minLengthError) && <span className={`${className}__error`}>Не менее {name.minLength} символов</span>}
      </FormInput>

      <FormInput {...secondName} error={secondNameError} className={className} type="text" placeholder="Ваша фамилия" >
        {(secondName.isDirty && secondName.isEmpty) && <span className={`${className}__error`}>Это поле обязательно</span>}
        {(secondName.isDirty && !secondName.isEmpty && secondName.minLengthError) && <span className={`${className}__error`}>Не менее {secondName.minLength} символов</span>}
      </FormInput>

      <FormInput {...password} error={passwordError} className={className} type="password" placeholder="Пароль" >
        {(password.isDirty && password.isEmpty) && <span className={`${className}__error`}>Это поле обязательно</span>}
        {(password.isDirty && !password.isEmpty && password.minLengthError) && <span className={`${className}__error`}>Не менее {password.minLength} символов</span>}
      </FormInput>
    </Form>
  );
}

export default FormAuthRegistration;
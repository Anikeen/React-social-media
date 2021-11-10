import { useState, useEffect } from 'react';

function useValidation(value, validations, setValue) {
  const [minLengthError, setMinLengthError] = useState(true);
  const [isEmpty, setEmpty] = useState(true);
  const [emailError, setEmailError] = useState(true);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false);
          break;
        case 'isEmpty':
          value ? setEmpty(false) : setEmpty(true);
          break;
        case 'isEmail':
          const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          regex.test(String(value).toLocaleLowerCase()) ? setEmailError(false) : setEmailError(true);
          break;
        case 'isName':
          setValue(value.replace(/[^a-zA-Zа-яА-ЯёЁ\s-]+$/, ''));
          break;
        default:
          break;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return {
    minLength: validations['minLength'] ? validations['minLength'] : 0,
    minLengthError,
    isEmpty,
    emailError
  }
}

function UseInput (initialValue, validations) {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations, setValue);

  function onChange(e) {
    setValue(e.target.value);
  }

  function onBlur(e) {
    setValue(e.target.value.trim());
    setDirty(true);
  }

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    setDirty,
    ...valid
  }
}

export default UseInput;
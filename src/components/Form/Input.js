function FormInput(props) {
  const className = `${props.className}__input ${props.error ? 'invalid' : ''}`;

  return (
    <label className={props.className + '__label'}>
      {props.children}
      <input        
        className={className}
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}
        onChange={e => props.onChange(e)}
        onBlur={e => props.onBlur(e)}
      />
    </label>
  );
}

export default FormInput;
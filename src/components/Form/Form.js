function Form(props) {
  return (
    <form className={props.className} onSubmit={props.onSubmit}>
      {props.children}
      <button className={props.className + '__button'} type="submit">{props.buttonText}</button>
    </form>
  );
}

export default Form;
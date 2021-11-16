import Spinner from "../UI/Spinner/Spinner";

function Form(props) {
  return (
    <form className={props.className} onSubmit={props.onSubmit}>
      {props.children}
      <button className={props.className + '__button'} type="submit">
        {props.buttonText}
        {props.isLoading && <Spinner customStyles={props.spinnerStyles} />}
      </button>
    </form>
  );
}

export default Form;
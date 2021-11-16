import './spinner.scss';

function Spinner(props) {
  return (
    <div className="spinner">
      <div className={"spinner__overlay " + props.customStyles}>
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      </div>
    </div>
  )
}

export default Spinner;
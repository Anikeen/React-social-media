import { useState } from 'react';
import './dropdown.scss';

function Dropdown(props) {
  const [isShown, setIsShown] = useState(false);

  function toggleDrop() {
    setIsShown(!isShown);
  }

  return (
    <div className={isShown ? 'dropdown active' : 'dropdown'}>
      <button className="dropdown__button" onClick={toggleDrop}>
        {props.dropdownButton}
      </button>

      {
        isShown &&  <div className="dropdown__menu">
                      {props.children}
                    </div>
      }
    </div>
  )
}

export default Dropdown;
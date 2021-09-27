import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import actionCreaters from '../store/actionCreators';

function useActions() {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreaters, dispatch);
}

export default useActions;
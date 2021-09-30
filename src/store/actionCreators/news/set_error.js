import SET_ERROR from '../../actions/news/set_error';

function setError(error) {
  return {type: SET_ERROR, payload: error}
}

export default setError;
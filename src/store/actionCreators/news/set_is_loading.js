import SET_IS_LOADING from '../../actions/news/set_is_loading';

function setIsLoading(payload) {
  return {type: SET_IS_LOADING, payload: payload}
}

export default setIsLoading;
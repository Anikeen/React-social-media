import SET_IS_LOADING from '../../actions/common/set_is_loading';
import SET_ERROR from '../../actions/common/set_error';
import SET_USER_INFO from '../../actions/user/set_user_info';

const initialState = {
  user: {},
  isLoading: false,
  error: null
}

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }

    case SET_USER_INFO:
      return {
        ...state,
        news: action.payload,
        error: null
      }

    case SET_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }

    default: return state;
  }
}

export default userReducer;
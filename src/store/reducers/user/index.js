import SET_USER_IS_LOADING from '../../actions/user/set_user_is_loading';
import SET_USER_ERROR from '../../actions/user/set_user_error';
import SET_USER_INFO from '../../actions/user/set_user_info';

const initialState = {
  user: null,
  isLoading: false,
  error: null
}

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }

    case SET_USER_INFO:
      return {
        ...state,
        user: action.payload,
        error: null
      }

    case SET_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }

    default: return state;
  }
}

export default userReducer;
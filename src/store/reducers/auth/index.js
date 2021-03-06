import SET_AUTH from '../../actions/auth/set_auth';
import SET_AUTH_IS_LOADING from '../../actions/auth/set_auth_is_loading';
import SET_USER from '../../actions/auth/set_user';
import SET_AUTH_ERROR from '../../actions/auth/set_auth_error';

const initialState = {
  isAuth: false,
  user: {},
  isLoading: false,
  error: null
}

function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        isAuth: action.payload,
        isLoading: false
      }

    case SET_AUTH_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }

    case SET_USER:
      return {
        ...state,
        user: action.payload,
        error: null
      }

    case SET_AUTH_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }

    default: return state;
  }
}

export default authReducer;
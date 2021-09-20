import REGISTER from '../../actions/auth/register';
import REGISTER_SUCCESS from '../../actions/auth/register_success';
import REGISTER_ERROR from '../../actions/auth/register_error';

import SIGN_IN from '../../actions/auth/sign_in';
import SIGN_IN_SUCCESS from '../../actions/auth/sign_in_success';
import SIGN_IN_ERROR from '../../actions/auth/sign_in_error';

const initialState = {
  isAuth: false,
  user: {},
  isLoading: false,
  error: null
}

function authReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        loading: true
      };

    case SIGN_IN_SUCCESS:
      return {
        user: action.payload,
        loading: false,
        error: null
      };

    case SIGN_IN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
  
    case REGISTER:
      return {
        ...state,
        loading: true
      };

    case REGISTER_SUCCESS:
      return {
        user: action.payload,
        loading: false,
        error: null
      }

    case REGISTER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    default: return state;
  }
}

export default authReducer;
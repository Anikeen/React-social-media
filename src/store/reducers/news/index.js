import SET_NEWS_IS_LOADING from '../../actions/news/set_news_is_loading';
import SET_NEWS_ERROR from '../../actions/news/set_news_error';
import SET_NEWS from '../../actions/news/set_news';

const initialState = {
  news: [],
  isLoading: false,
  error: null
}

function newsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NEWS_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }

    case SET_NEWS:
      return {
        ...state,
        news: action.payload,
        error: null
      }

    case SET_NEWS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }

    default: return state;
  }
}

export default newsReducer;
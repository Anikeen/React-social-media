import setIsLoading from './set_is_loading';
import setNews from './set_news';
import setError from './set_error';
import fetchNews from '../../../api/news/fetch_news.js';

function getNews() {
  return async dispatch => {
    dispatch(setIsLoading(true));

    setTimeout(async () => {
      try {
        const news = await fetchNews();
        dispatch(setNews(news));

      } catch (error) {
        dispatch(setError(error));
        alert(error);
      }

      dispatch(setIsLoading(false));      
    }, 1000);    
  }
}

export default getNews;
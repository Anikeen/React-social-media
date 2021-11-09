import setNewsIsLoading from './set_news_is_loading';
import setNews from './set_news';
import setNewsError from './set_news_error';
import fetchNews from '../../../api/news/fetch_news.js';

function getNews() {
  return async dispatch => {
    dispatch(setNewsIsLoading(true));

    setTimeout(async () => {
      try {
        const news = await fetchNews();
        dispatch(setNews(news));

      } catch (error) {
        dispatch(setNewsError(error));
        alert(error);
      }

      dispatch(setNewsIsLoading(false));      
    }, 1000);    
  }
}

export default getNews;
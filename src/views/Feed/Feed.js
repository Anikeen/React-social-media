import { useEffect } from "react";
import { useSelector } from "react-redux";
import PostNews from "../../components/Post/News/News.js";
import useActions from '../../hooks/useActions.js';
import Spinner from "../../components/UI/Spinner/Spinner";

function Feed() {
  const news = useSelector(store => store.news.news);
  const isLoading = useSelector(store => store.news.isLoading);
  const {getNews} = useActions();

  useEffect(() => {
    getNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <section>
      {
        news.length > 1
        ?
        news.map(post => {
          return (
            <PostNews post={post} key={post.id} />
          );
        })
        :
        'Нет новостей.'
      }

      {isLoading && <Spinner customStyles="news-spinner" />}
    </section>
  );
}

export default Feed;
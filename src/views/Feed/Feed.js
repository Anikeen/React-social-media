import { useEffect } from "react";
import { useSelector } from "react-redux";
import PostNews from "../../components/Post/News/News.js";
import useActions from '../../hooks/useActions.js';

function Feed() {
  const news = useSelector(store => store.news.news);
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
        'empty'
      }
    </section>
  );
}

export default Feed;
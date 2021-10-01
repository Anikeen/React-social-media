import { useEffect } from "react";
import { useSelector } from "react-redux";
import PostNews from "../../components/Post/News/News.js";
import useActions from '../../hooks/useActions.js';

function Feed() {
  const news = useSelector(store => store.news.news);
  const {getNews} = useActions();

  useEffect(() => {
    getNews();
  }, []);
  
  return (
    <section>
      {
        news.length > 1
        ?
        news.map(post => {
          return (
            <PostNews post={post} key={post.date} />
          );
        })
        :
        'empty'
      }
    </section>
  );
}

export default Feed;
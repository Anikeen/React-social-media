import PostHeader from "../Post/PostHeader";
import './news.scss';

function PostNews(props) {
  return (
    <div className="post block">
      <PostHeader author={props.post.author} date={props.post.date} />
      <div className="post__body">{props.post.text}</div>
    </div>
  );
}

export default PostNews;
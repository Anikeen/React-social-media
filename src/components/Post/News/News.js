import PostHeader from "../Post/PostHeader";

function PostNews(props) {
  return (
    <div className="post">
      <PostHeader author={props.post.author} date={props.post.date} />
      <div className="post__body">{props.post.text}</div>
    </div>
  );
}

export default PostNews;
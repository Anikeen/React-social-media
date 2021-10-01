import userpic from '../../../assets/img/user.png';
import './post_header.scss';

function PostHeader(props) {
  return (
    <div className="post-header">
      <img className="post-header__userpic" src={userpic} alt="user image" />

      <div className="post-header__info">
        <div className="post-header__author">{props.author}</div>
        <div className="post-header__date">{props.date}</div>
      </div>
    </div>
  );
}

export default PostHeader;
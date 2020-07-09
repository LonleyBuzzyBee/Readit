import React from "react";
import PropTypes from "prop-types";

function Post(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenPostClicked(props.id)}>
        <h3>{props.postTitle} - {props.bookTitle}</h3>
        <h5>Genre: {props.category}</h5>
        <h5>Posted by {props.userName} on {props.timeStamp}</h5>
        <h6>Likes: {props.likes} Dislikes: {props.dislikes}</h6>
      </div>
      <hr />
    </React.Fragment>
  );
}

Post.propTypes = {
  postTitle: PropTypes.string,
  bookTitle: PropTypes.string,
  category: PropTypes.string,
  userName: PropTypes.string,
  timeStamp: PropTypes.string,
  likes: PropTypes.number,
  dislikes: PropTypes.number,
  id: PropTypes.string,
  whenPostClicked: PropTypes.func,

};

export default Post;
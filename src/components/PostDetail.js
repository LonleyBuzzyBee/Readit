import React from "react";
import PropTypes from "prop-types";

function PostDetail(props){
  const { post } = props;

  return (
    <React.Fragment>
       <h3>{post.postTitle} - {post.bookTitle}</h3>
        <h5>Genre: {post.category}</h5>
        <h5>Posted by {post.userName} on {post.timeStamp}</h5>
        <h6>Likes: {post.likes} Dislikes: {post.dislikes}</h6>
        <p> {post.content} </p>
      <hr/>
    </React.Fragment>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object
}

export default PostDetail;
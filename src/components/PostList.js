import React from "react";
import PropTypes from "prop-types";
import Post from "./Post";

function PostList(props) {
  return (
    <React.Fragment>
      <hr />
      {Object.values(props.postList).map((post) => {
        return <Post
          whenPostClicked={props.onPostSelection}
          whenPostLiked={props.onLiking}
          whenPostDisliked={props.onDisliking}
          postTitle={post.postTitle}
          bookTitle={post.bookTitle}
          category={post.category}
          userName={post.userName}
          timeStamp={post.timeStamp}
          likes={post.likes}
          dislikes={post.dislikes}
          id={post.id}
          key={post.id} />
      })}

    </React.Fragment>
  )
};

PostList.propTypes = {
  postList: PropTypes.object,
  onPostSelection: PropTypes.func,
  onLiking: PropTypes,
  onDisliking: PropTypes
}

export default PostList;
import React from 'react';
import NewPostForm from './NewPostForm';
import PostList from './PostList';
import PostDetail from './PostDetail';
// import {v4} from 'uuid';
// import DummyPosts from './DummyPosts';

class PostControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPost: null
    }
  }

  handleClick = () => {
    if (this.state.selectedPost != null) {
      this.setState({
        selectedPost: null
      });
    } else {
      const { dispatch } = this.props;
      const action = {
        type: 'TOGGLE_FORM'
      }
      dispatch(action);
    }
  }

  handleAddingNewPostToList = (newPost) => {
    const { dispatch } = this.props;
    const { id, postTitle, bookTitle, category, userName, content, timeStamp, likes, dislikes } = newPost;
    const action = {
      type: 'ADD_POST',
      id: id,
      postTitle: postTitle,
      bookTitle: bookTitle,
      category: category,
      userName: userName,
      content: content,
      timeStamp: timeStamp,
      likes: likes,
      dislikes: dislikes,
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
  }

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.props.masterPostList[id]
    this.setState({ selectedPost : selectedPost })
  }
  
  
  // methods go here
  //handleaddingnewpost
  
  //handleclick for likes and dislikes

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedPost != null) {
      currentlyVisibleState =
      <PostDetail
      post={this.state.selectedPost} />
      buttonText = "Return to Post List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewPostForm onNewPostCreation={this.handleAddingNewPostToList} />;
      buttonText = "Return to Post List";
    } else {
      currentlyVisibleState = <PostList 
      postList={this.state.postList} 
      onPostSelection={this.handleChangingSelectedPost} />;
      buttonText = "Add Post";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}
// currentlyVisibleState = <TicketList ticketList={this.props.masterTicketList} onTicketSelection={this.handleChangingSelectedTicket} />;




export default PostControl;


//fixedPostList = {this.state.postList} 
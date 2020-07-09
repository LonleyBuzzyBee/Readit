import React from 'react';
import NewPostForm from './NewPostForm';
import PostList from './PostList';
import PostDetail from './PostDetail';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LandingPage from './LandingPage';
// import {v4} from 'uuid';


class PostControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPost: null
    }
  }

  landingPageClick = () => {
    const { dispatch } = this.props;
    const action = {
      type: 'LANDING_PAGE'
    }
    dispatch(action);
  }

  handleClickAddPost = () => {
    const { dispatch } = this.props;
    const action = {
      type: 'SEE_FORM'
    }
    dispatch(action);
  }

  sortByTimeClick = () => {
    const { dispatch } = this.props;
    const action = {
      type: 'SORT_BY_TIME'
    }
    dispatch(action);
  }

  sortByLikesClick = () => {
    const { dispatch } = this.props;
    const action = {
      type: 'SORT_BY_LIKES'
    }
    dispatch(action);
  }

  handleClick = () => {
    if (this.state.selectedPost != null) {
      this.setState({
        selectedPost: null
      });
      const { dispatch } = this.props;
      const action = {
        type: 'POST_LIST'
      }
      dispatch(action)
    } else if (this.props.formVisibleOnPage === 'see-form' || this.props.formVisibleOnPage === 'landing-page') {
      const { dispatch } = this.props;
      const action = {
        type: 'POST_LIST'
      }
      dispatch(action);
    }
  }

  likingPostClick = (post) => {
    const { id, postTitle, bookTitle, category, userName, content, timeStamp, likes, dislikes } = post;
    const { dispatch } = this.props;
    const action = {
      type: 'LIKE',
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
    this.setState({selectedPost: null})
  }

  dislikingPostClick = (post) => {
    const { id, postTitle, bookTitle, category, userName, content, timeStamp, likes, dislikes } = post;
    const { dispatch } = this.props;
    const action = {
      type: 'DISLIKE',
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
    this.setState({selectedPost: null})

    // const action2 = {
    //   type: ''
    // }
    // dispatch(action2);
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
    console.log(newPost);
    dispatch(action);
    const action2 = {
      type: 'POST_LIST'
    }
    dispatch(action2);
  }

  handleChangingSelectedPost = (id) => {
    // id = parseInt(id);
    // const selectedPost = (this.props.masterPostList).filter(post => post.id === id)[0];
    const filterObject = (obj, filter, filterValue) => 
      Object.keys(obj).reduce((acc, val) => 
      (obj[val][filter] === filterValue ? acc : {
          ...acc,
          [val]: obj[val]
      }                                        
      ), {});
    const selectedPost = filterObject(this.props.masterPostList, id, id)

    // const selectedPost = this.props.masterPostList[id]
    console.log('master post list', this.props.masterPostList)
    console.log('id:',id)
    console.log('selected post: ', selectedPost)
    this.setState({ selectedPost: selectedPost });

    // console.log(selectedPost);
  }

  // methods go here 
  //handleaddingnewpost

  //handleclick for likes and dislikes

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    let buttonClick = null;
    let button2 = null;
    let sortButton1 = null;
    let sortButton2 = null;
    // console.log(this.props.masterPostList);
    // if (this.props.formVisibleOnPage === "post-detail") {
    if (this.state.selectedPost != null) {
      currentlyVisibleState =
        <PostDetail
          post={this.state.selectedPost}
          onLiking = {this.likingPostClick}
          onDisliking = {this.dislikingPostClick}
           />
      buttonText = "Return to Post List";
      buttonClick = this.handleClick;

    } else if (this.props.formVisibleOnPage === "landing-page") {
      currentlyVisibleState = <LandingPage />
      buttonText = "See All Posts"
      buttonClick = this.handleClick;
    }
    else if (this.props.formVisibleOnPage === "see-form") {
      currentlyVisibleState = <NewPostForm onNewPostCreation={this.handleAddingNewPostToList} />;
      buttonText = "Return to Post List";
      buttonClick = this.handleClick;
      button2 = <button onClick={this.landingPageClick}>Return Home</button>

    } else if (this.props.formVisibleOnPage === "post-list") {
      currentlyVisibleState = <PostList
        postList={this.props.masterPostList}
        onPostSelection={this.handleChangingSelectedPost} />;
      sortButton1 = <button onClick={this.sortByTimeClick}>Sort by Post Date</button>
      sortButton2 = <button onClick={this.sortByLikesClick}>Sort by Popularity</button>
      buttonText = "Add Post";
      buttonClick = this.handleClickAddPost;
      button2 = <button onClick={this.landingPageClick}>Return Home</button>
    }
    return (
      <React.Fragment>
        {sortButton1}
        {sortButton2}
        {currentlyVisibleState}
        <button onClick={buttonClick}>{buttonText}</button>
        {button2}

      </React.Fragment>
    );
  }
}

PostControl.propTypes = {
  masterPostList: PropTypes.object
};

const mapStateToProps = state => {

  return {
    masterPostList: state.masterPostList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

PostControl = connect(mapStateToProps)(PostControl);

export default PostControl;



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

  // handleLiking = (id) => {
  //   const newScoopedFlavor = this.state.masterFlavorList.filter(flavor => flavor.id === id)[0];
  //   const flavorIndex = this.state.masterFlavorList.indexOf(newScoopedFlavor);
  //   if (newScoopedFlavor.scoops >= 1) {
  //     const newScoopsNum = newScoopedFlavor.scoops - 1;
  //     let editedMasterFlavorList = this.state.masterFlavorList
  //       .filter(flavor => flavor.id != newScoopedFlavor.id);
  //     editedMasterFlavorList.splice(flavorIndex, 0, { ...newScoopedFlavor, scoops: newScoopsNum });
  //     this.setState({
  //       masterFlavorList: editedMasterFlavorList,
  //     })
  //   }
  // }
  // the "handle" method here should just change action type - the code that actually increments the "likes" property
  //should be in the reducer where state can be accessed more directly - rather than making this handler method parallel to the handleScooping
  //it should be more parallel to handleAddingNewPost or the sort methods



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
    const selectedPost = this.props.masterPostList[id]
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
    if (this.state.selectedPost != null) {
      currentlyVisibleState =
        <PostDetail
          post={this.state.selectedPost} />
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



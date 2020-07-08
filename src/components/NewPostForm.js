import React from 'react';
import PropTypes from 'prop-types';
import {v4} from 'uuid';

function NewPostForm(props){
  function handleNewPostFormSubmission(event){
    event.preventDefault();
    props.onNewPostCreation({
      postTitle: event.target.postTitle.value,
      bookTitle: event.target.bookTitle.value,
      category: event.target.category.value,
      userName: event.target.userName.value,
      content: event.target.content.value,
      timeStamp: new Date().toString(),
      likes: 0,
      dislikes: 0,
      id: v4()
    });
  }
  return(
    <React.Fragment>
      <form onSubmit = {handleNewPostFormSubmission}>
        <input
          type = 'text'
          name = 'postTitle'
          placeholder = 'Post Title'
        />
        <input
          type = 'text'
          name = 'bookTitle'
          placeholder = 'Book Title'
        />
        <input
          type = 'text'
          name = 'category'
          placeholder = 'Category'
        />
        <input
          type = 'text'
          name = 'userName'
          placeholder = 'User Name'
        />
        <input
          type = 'text'
          name = 'content'
          placeholder = 'Content'
        />
        <button type='submit'>Create Post!</button>
      </form>
    </React.Fragment>
  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
}

export default NewPostForm;
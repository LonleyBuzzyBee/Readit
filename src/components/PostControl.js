import React from 'react';
import NewPostForm from './NewPostForm';
import PostList from './PostList';
import PostDetail from './PostDetail';
// import DummyPosts from './DummyPosts';

class PostControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: [
        { postTitle: 'Dragons are so cool',
          bookTitle: 'Eragon',
          category: 'Fantasy',
          userName: 'allyMack',
          content: 'Im baby retro DIY gentrify, cronut banh mi messenger bag trust fund single-origin coffee bespoke lumbersexual migas raclette viral kogi. Vinyl readymade lyft stumptown man braid. Everyday carry tumeric shabby chic.',
          timeStamp: '7/7/2020 @ 2:55pm',
          likes: 60,
          dislikes: 3,
          id: v4()
        },
        { postTitle: 'Do not waste your time',
          bookTitle: 'Middlemarch',
          category: 'classics',
          userName: 'Karen',
          content: 'I thought this book would be romantic, like Jane Austen, but its not, its weird and boring. I dont know why people like it.',
          timeStamp: '6/8/20 @ 12:15pm',
          likes: 30,
          dislikes: 3,
          id: v4()
        },
        { postTitle: 'This book rulez',
          bookTitle: 'Do No Harm - Henry Marsh',
          category: 'Biography',
          userName: 'fred86',
          content: 'Lumbersexual letterpress adaptogen 3 wolf moon la croix plaid YOLO blog readymade +1 vape pitchfork.',
          timeStamp: '07/04/20 @ 10:15am',
          likes: 17,
          dislikes: 5,
          id: v4()
        },
      ],
      selectedPost: null
    }
  }

  // methods go here

  render() {
  
    return(
      <React.Fragment>
        {currentView}

      </React.Fragment>
    )
  }
}

export default PostControl;
import postListReducer from '../../reducers/post-list-reducer';


describe('postListReducer', () => {
  
  let action;
  const postData = {
    postTitle: 'Dragons are so cool',
    bookTitle: 'Eragon',
    category: 'Fantasy',
    userName: 'allyMack',
    content: 'Im baby retro DIY gentrify, cronut banh mi messenger bag trust fund single-origin coffee bespoke lumbersexual migas raclette viral kogi. Vinyl readymade lyft stumptown man braid. Everyday carry tumeric shabby chic.',
    timeStamp: '7/7/2020 @ 2:55pm',
    likes: 60,
    dislikes: 3,
    id: 1
  };

  test('Should successfully add new post data to masterPostList', () => {
    const { postTitle, bookTitle, category, userName, content, timeStamp, likes, dislikes, id } = postData;
    action = {
      type: 'ADD_POST',
      postTitle: postTitle,
      bookTitle: bookTitle,
      category: category,
      userName: userName,
      content: content,
      timeStamp: timeStamp,
      likes: likes,
      dislikes: dislikes,
      id: id
    };

    expect(postListReducer({}, action)).toEqual({
      [id]: {
        postTitle: postTitle,
        bookTitle: bookTitle,
        category: category,
        userName: userName,
        content: content,
        timeStamp: timeStamp,
        likes: likes,
        dislikes: dislikes,
        id: id
      }
    });


  });
  
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });
});

export default (state = {}, action) => {

  const { bookTitle, postTitle, userName, category, timeStamp, content, likes, dislikes, id } = action;

  switch (action.type) {
    case "ADD_POST":
      return Object.assign({}, state, {
        [id]: {
          bookTitle: bookTitle,
          postTitle: postTitle,
          userName: userName,
          category: category,
          timeStamp: timeStamp,
          content: content,
          likes: likes,
          dislikes: dislikes,
          id: id,
        },
      });

      default: return state;

    }
  };
export default (state = {
  "1": {
    postTitle: 'Dragons are so cool',
    bookTitle: 'Eragon',
    category: 'Fantasy',
    userName: 'allyMack',
    content: 'Im baby retro DIY gentrify, cronut banh mi messenger bag trust fund single-origin coffee bespoke lumbersexual migas raclette viral kogi. Vinyl readymade lyft stumptown man braid. Everyday carry tumeric shabby chic.',
    timeStamp: 'Tue Jul 07 2020 12:44:47 GMT-0700 (Pacific Daylight Time)',
    likes: 60,
    dislikes: 3,
    id: "1"
  },
  "2": {
    postTitle: 'Do not waste your time',
    bookTitle: 'Middlemarch',
    category: 'classics',
    userName: 'Karen',
    content: 'I thought this book would be romantic, like Jane Austen, but its not, its weird and boring. I dont know why people like it.',
    timeStamp: 'Mon Jul 06 2020 14:44:47 GMT-0700 (Pacific Daylight Time)',
    likes: 30,
    dislikes: 3,
    id: "2"
  },
  "3": {
    postTitle: 'This book rulez',
    bookTitle: 'Do No Harm - Henry Marsh',
    category: 'Biography',
    userName: 'fred86',
    content: 'Lumbersexual letterpress adaptogen 3 wolf moon la croix plaid YOLO blog readymade +1 vape pitchfork.',
    timeStamp: 'Wed Jul 08 2020 12:44:47 GMT-0700 (Pacific Daylight Time)',
    likes: 17,
    dislikes: 5,
    id: "3"
  }
}, action) => {

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
          id: id
        },
      });

    case "SORT_BY_TIME":
      let sortByTime =
        Object.values(state).sort(function (a, b) {
          a = Date.parse(a.timeStamp)
          b = Date.parse(b.timeStamp)
          return b - a;
        })
      console.log("sort by time:", sortByTime);

      let newObject = {}
      sortByTime.forEach(function(item){
        newObject = {...newObject, [`"${item.id}"`]: {...item}}
      });

      console.log("new object:", newObject);
      // let objectSortByTime = { ...sortByTime }  
      return newObject;

    case "SORT_BY_LIKES":
      let sortByLikes =
        Object.values(state).sort(function (a, b) {
          return b.likes - a.likes;
        })
      console.log("sort by likes: ", sortByLikes);
      let objectSortByLikes = { ...sortByLikes }
      return objectSortByLikes;

    case "LIKE":
      return Object.assign({}, state, {
        [id]: {
          bookTitle: bookTitle,
          postTitle: postTitle,
          userName: userName,
          category: category,
          timeStamp: timeStamp,
          content: content,
          likes: likes + 1,
          dislikes: dislikes,
          id: id
        }
      })

    case "DISLIKE":
      return Object.assign({}, state, {
        [id]: {
          bookTitle: bookTitle,
          postTitle: postTitle,
          userName: userName,
          category: category,
          timeStamp: timeStamp,
          content: content,
          likes: likes,
          dislikes: dislikes + 1,
          id: id
        }
      })

    default: return state;

  }
};


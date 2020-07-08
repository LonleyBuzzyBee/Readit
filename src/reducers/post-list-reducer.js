export default (state = {
1: { postTitle: 'Dragons are so cool',
bookTitle: 'Eragon',
category: 'Fantasy',
userName: 'allyMack',
content: 'Im baby retro DIY gentrify, cronut banh mi messenger bag trust fund single-origin coffee bespoke lumbersexual migas raclette viral kogi. Vinyl readymade lyft stumptown man braid. Everyday carry tumeric shabby chic.',
timeStamp: '7/7/2020 @ 2:55pm',
likes: 60,
dislikes: 3,
id: 1 },
2: { postTitle: 'Do not waste your time',
bookTitle: 'Middlemarch',
category: 'classics',
userName: 'Karen',
content: 'I thought this book would be romantic, like Jane Austen, but its not, its weird and boring. I dont know why people like it.',
timeStamp: '6/8/20 @ 12:15pm',
likes: 30,
dislikes: 3,
id: 2},
3: { postTitle: 'This book rulez',
bookTitle: 'Do No Harm - Henry Marsh',
category: 'Biography',
userName: 'fred86',
content: 'Lumbersexual letterpress adaptogen 3 wolf moon la croix plaid YOLO blog readymade +1 vape pitchfork.',
timeStamp: '07/04/20 @ 10:15am',
likes: 17,
dislikes: 5,
id: 3 } 
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
          id: id,
        },
      });

      default: return state;
    
  }
};
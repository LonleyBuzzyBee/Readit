import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import postListReducer from '../../reducers/post-list-reducer';

let store = createStore(rootReducer);

describe("rootReducer", () => {
  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      formVisibleOnPage: false,
      masterPostList: {
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
      }
      
      
    });
  });


  test('Check that initial state of ticketListReducer matches root reducer', () => {
    const action = {
      type: 'ADD_POST',
      postTitle: 'Dragons are so cool',
      bookTitle: 'Eragon',
      category: 'Fantasy',
      userName: 'allyMack',
      content: 'Im baby retro DIY gentrify, cronut banh mi messenger bag trust fund single-origin coffee bespoke lumbersexual migas raclette viral kogi. Vinyl readymade lyft stumptown man braid. Everyday carry tumeric shabby chic.',
      timeStamp: '7/7/2020 @ 2:55pm',
      likes: 60,
      dislikes: 3,
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterPostList).toEqual(postListReducer(undefined, action));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    const action = {
      type: 'TOGGLE_FORM'
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });

});
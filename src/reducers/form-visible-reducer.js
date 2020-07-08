// import * as c from './../actions/ActionTypes'

export default (state = "landing-page", action) => {
  switch (action.type) {
    case "TOGGLE_FORM":
      state = "post-list"
      return state;
    case "LANDING_PAGE":
      state = "landing-page"
      return state;
    case "ADD_POST":
      state = "add-post"
      return state; 
    default:
      return state;
  }
};



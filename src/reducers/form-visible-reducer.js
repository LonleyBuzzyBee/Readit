// import * as c from './../actions/ActionTypes'

export default (state = "landing-page", action) => {
  switch (action.type) {
    case "POST_LIST":
      state = "post-list"
      return state;
    case "LANDING_PAGE":
      state = "landing-page"
      return state;
    case "SEE_FORM":
      state = "see-form"
      return state; 
    default:
      return state;
  }
};



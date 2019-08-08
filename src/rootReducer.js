import { ADD_POST, EDIT_POST, DELETE_POST, ADD_COMMENT, DELETE_COMMENT } from './actionTypes';

// redux store
// posts: {
//   id: {
//     title: string,
//     descripton: string,
//     body: string,
//     comments: [{ id, text }, ... ]
//   }
// }


const INITIAL_STATE = { posts: {} };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_POST:
      let postObjCopy = { ...this.state.blogs[postId] };
      postObjCopy.comments = postObjCopy.comments.concat(newCommentObj);

      return ""
    case EDIT_POST:
      // MAKE SURE NOT OVER WRTIE COMMENT WHEN YOU EDIT!!!!!!!!!!!!!
      return ""
    case DELETE_POST:
      return ""
    case ADD_COMMENT:
      return ""
    case DELETE_COMMENT:
      return ""
    default:
      return state;
  }
}

export default rootReducer;


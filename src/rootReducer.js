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


const INITIAL_STATE = { posts: require("./test_blog.json") };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: { ...state.posts, [action.postId]: action.content }
      }
    case EDIT_POST:
      // TODO: check that post's comments aren't overwritten
      // LATER in thunk api land, wrap in try/catch and async business
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.postId]: {
            ...state.posts[action.postId],
            title: action.content.title,
            description: action.content.description,
            body: action.content.body
          }
        }
      }
    case DELETE_POST:
      if (state.posts[action.postId] === undefined) return state;
      let copiedPosts = { ...state.posts };
      delete copiedPosts[action.postId];

      return {
        ...state,
        posts: copiedPosts
      }
    case ADD_COMMENT:
      let postObjCopy = { ...state.posts[action.postId] };
      postObjCopy.comments = postObjCopy.comments.concat(action.newCommentObj);
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.id]: {
            ...state.posts[action.id],
            postObjCopy
          }

        }
      }

    case DELETE_COMMENT:
      let selectedPostObjCopy = { ...state.posts[action.postId] };
      selectedPostObjCopy.comments = selectedPostObjCopy.comments.filter(c => Object.keys(c)[0] !== action.commentId);
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.id]: {
            ...state.posts[action.id],
            postObjCopy
          }

        }
      }

    default:
      return state;
  }
}

export default rootReducer;


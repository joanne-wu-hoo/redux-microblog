import { 
  ADD_POST, 
  EDIT_POST, 
  DELETE_POST, 
  ADD_COMMENT, 
  DELETE_COMMENT, 
  LOAD_POSTS,
  LOAD_POST
} from './actionTypes';

/** redux store {
  postsSummary: [
    {
    id: 1,
    title: "First Post",
    description: "Best post ever!",
    votes: 0
    }, ...  
  ],
  postsDetails: {
    id: {
      title: string,
      descripton: string,
      body: string,
      comments: [{ id, text }, ... ]
    }
  }
}
*/


const INITIAL_STATE = { postsSummary: [], postsDetails: {} };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    /** load all post summary info */
    case LOAD_POSTS:
      // if no changes to database return previous state
      //if (state.postsSummary.length === action.postsSummary.length) return state;
      // if posts were added to database, add additional posts to state
      return {...state,
        postsSummary: state.postsSummary.concat(action.postsSummary)
      }

    /** load post details for requested post */
    case LOAD_POST:
      let {id, ...content} = action.postsDetails;   
      return {...state,
        postsDetails: {
          ...state.postsDetails,
          [id]: content
        }
      }

    case ADD_POST:
   
      return {
        ...state,
        postsSummary: state.postsSummary.concat(action.newPostObj)
      }

    case EDIT_POST:
      // LATER in thunk api land, wrap in try/catch and async business
      return {
        ...state,
        postsDetails: {
          ...state.postsDetails,
          [action.postId]: {
            ...state.postsDetails[action.postId],
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
      let newComments  = postObjCopy.comments.concat(action.newCommentObj);
      
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.postId]: {
            ...state.posts[action.postId],
            comments: newComments
          }
        }
      }

    case DELETE_COMMENT:
      let selectedPostObjCopy = { ...state.posts[action.postId] };
      let updatedComments = selectedPostObjCopy.comments.filter(c => Object.keys(c)[0] !== action.commentId);
     
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.postId]: {
            ...state.posts[action.postId],
            comments: updatedComments
          }
        }
      }

    default:
      return state;
  }
}

export default rootReducer;


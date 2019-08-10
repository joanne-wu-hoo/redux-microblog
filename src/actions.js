import {
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  LOAD_POSTS,
  LOAD_POST
} from './actionTypes';
import axios from "axios"

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



const BASE_URL = "http://localhost:5000/api/posts/"

/** make API call to get all post summaries, store on redux.state.postsSummary */
function gotPostsSummary(postsSummary) {
  return { type: LOAD_POSTS, postsSummary }

}

export function getPostsSummaryFromApi() {
  return async function (dispatch, getState) {
  
    if (getState().postsSummary.length === 0) {
      let res = await axios.get(`${BASE_URL}`);
      dispatch(gotPostsSummary(res.data));
    }
  }
}

/** make API call to get details for requested post, store on redux.state.postDetails */
function gotPostDetail(postsDetails) {
  return { type: LOAD_POST, postsDetails }

}

export function getPostDetailFromApi(postId) {
  return async function (dispatch) {
    let res = await axios.get(`${BASE_URL}/${postId}`);
    // if res.data === "" --> dispatch(showErr())
    dispatch(gotPostDetail(res.data))
  }
}


/** make API call to add post, store on redux state.postsSummary */
export function addNewPostThroughApi(newPostObj) {
  return async function (dispatch) {
    let res = await axios.post(`${BASE_URL}`, newPostObj);
    dispatch(addPost(res.data))
  }
}

function addPost(newPostObj) {
  return {
    type: ADD_POST,
    newPostObj
  }
}

// TODO: refactor for backend

export function deletePost(postId) {
  return {
    type: DELETE_POST,
    postId
  }
}

/** given: editedPostObj = {id, title, description, body }
 *  return: { 
 *    type:
 *    postId, 
 *    content: { title, description, body, comments } where comments is an array
 * }
 */
export function editPost(editedPostObj) {
  const { postId, ...content } = editedPostObj;
  return {
    type: EDIT_POST,
    postId,
    content,
  }
}

/** given postId and newCommentObj of form { id, text } */
export function addComment(postId, newCommentObj) {
  return {
    type: ADD_COMMENT,
    postId,
    newCommentObj,
  }
}

export function deleteComment(postId, commentId) {
  return {
    type: DELETE_COMMENT,
    postId,
    commentId
  }
}


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

/** given: newPostObj = {id, title, description, body } 
 * return: { 
 *  type:
 *  postId, 
 *  content: { title, description, body, comments: [] }
 * }
 */
export function addPost(newPostObj) {
  const { postId, ...content } = newPostObj;
  // when new post is created, there are no comments,
  // so initialize an empty array
  content.comments = [];

  return {
    type: ADD_POST,
    postId,
    content
  }
}

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


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

// newPostObj = {id, title, description, body } 
export function addPost(newPostObj) {
  const { id, ...content } = newPostObj;
  // when new post is created, there are no comments,
  // so initialize an empty array
  content.comments = [];

  return {
    type: ADD_POST,
    id,
    content
  }
}

export function deletePost(id) {
  return {
    type: DELETE_POST,
    id,
  }
}

/** editedPostObj = {id, title, description, body } */
export function editPost(editedPostObj) { 
  const { id, ...content } = editedPostObj;
  return {
    type: EDIT_POST,
    id,
    content,
  }
}

 /** given postId and newCommentObj of form {id, text } */
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


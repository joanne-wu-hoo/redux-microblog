// let { title, description, content, comments } = this.props.posts[this.props.id];
// let postComments = comments.map(c =>
// <li key={Object.keys(c)[0]}>
//   <button onClick={() => this.handleDeleteComment(Object.keys(c)[0])}>
//     x
// </button>{Object.values(c)[0]}
// </li>)

/** CommentList
 * 
 * props:
 * - comments, post's comments from redux state
 * - delete, which dispatches DELETE_COMMENT to remove comment from redux state
 * 
 */

import React, { Component } from 'react';


class CommentList extends Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(commentId){
    this.props.delete(commentId); 
  }

  render(){
    let postComments = this.props.comments.map(c =>
      <li key={Object.keys(c)[0]}>
        <button onClick={() => this.handleDelete(Object.keys(c)[0])}>
          x
      </button>{Object.values(c)[0]}
      </li>)
    return(
      <div className="postComments">
        { postComments }
      </div>
    )
  }
}

export default CommentList;
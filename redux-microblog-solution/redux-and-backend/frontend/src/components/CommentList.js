import React, { Component } from 'react';
import Comment from "./Comment"
/** CommentList: shows list of comments passed down as props.
 *
 * Comments can be deleted by clicking next to them; this is handled by
 * the parent.
 *
 */

class CommentList extends Component {
  static defaultProps = {
    comments: []
  }

  render() {
    return (
      this.props.comments.map(c => (
        <Comment key={c.id} id={c.id} text={c.text} triggerDelete={this.props.deleteComment}/>
      )));
  }
}

export default CommentList;

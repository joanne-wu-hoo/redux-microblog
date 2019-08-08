import React, { Component } from 'react';
import { Button } from "reactstrap";

/** BlogPost
 * 
 * props:
 * - id
 * - blogContents: { title, description, content, comments } 
 * - deletePost, which invokes functions in lineage to delete post from App state
 * - showEditPostForm, which invokes activateEditMode() in parent to set state of "editing" to true
 * - deleteComment, which invokes functions in lineage to delete post's comment from App state
 * 
 */


class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.handleDeletePost = this.handleDeletePost.bind(this);
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
    this.handleEditPost = this.handleEditPost.bind(this);
  }

  handleDeletePost() {
    this.props.deletePost(this.props.id);
  }

  handleEditPost() {
    this.props.showEditPostForm();
  }

  handleDeleteComment(comment) {
    this.props.deleteComment(this.props.id, comment)
  }

  render() {
    let { title, description, content, comments } = this.props.blogContents;
    let postComments = comments.map(c =>
      <li key={Object.keys(c)[0]}>
        <button onClick={() => this.handleDeleteComment(Object.keys(c)[0])}>
          x
      </button>{Object.values(c)[0]}
      </li>)
    return (
      <div>
        <h1> {title} </h1>
        <p> {description}</p>
        <p> {content} </p>
        <Button onClick={() => this.handleEditPost()}>Edit</Button>
        <Button onClick={() => this.handleDeletePost()}>Delete</Button>
        <ul>
          { postComments }
        </ul>
      </div>
    )
  }

}

export default BlogPost;
import React, { Component } from 'react';
import { Button } from "reactstrap";
import CommentForm from './CommentForm';
// import CommentList from './CommentList';
import PostForm from './PostForm';

/** PostDisplay
 * 
 * props:
 * - id
 * - blogContents: { title, description, content, comments } 
 * - deletePost, which invokes functions in lineage to delete post from App state
 * - showEditPostForm, which invokes activateEditMode() in parent to set state of "editing" to true
 * - deleteComment, which invokes functions in lineage to delete post's comment from App state
 * 
 */

class PostDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
    this.handleDeletePost = this.handleDeletePost.bind(this);
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
    this.handleAddComment = this.handleAddComment.bind(this);
    this.handleEditPost = this.handleEditPost.bind(this);
    this.activateEditMode = this.activateEditMode.bind(this);
  }

  activateEditMode() {
    this.setState(st => ({
      ...st,
      editing: !st.editing
    }));
  }

  handleDeletePost() {
    this.props.deletePost(this.props.id);
  }

  handleEditPost(editedPostObj) {
    this.props.editPost(editedPostObj);
  }

  handleDeleteComment(comment) {
    this.props.deleteComment(this.props.id, comment)
  }

  handleAddComment(postId, comment) {
    this.props.addComment(postId, comment)
  }

  render() {
    let { title, description, content, comments } = this.props.posts[this.props.id];

    // if this.state.editing is true --> show BlogForm (edit mode)
    // if this.state.editing is false --> show BlogPost and CommentForm
    let htmlContent = (this.state.editing)
      ? <PostForm 
          mode="edit" 
          posts={this.props.posts} 
          id={this.props.id} 
          editPost={this.handleEditPost}
          history={this.props.history} 
        /> 
      : <div>
          <h1> { title } </h1>
          <p> { description }</p>
          <p> { content } </p>
          <Button onClick={() => this.activateEditMode()}>Edit</Button>
          <Button onClick={() => this.handleDeletePost()}>Delete</Button>
          {/*  <CommentList comments={comments} />  pass down handleDeleteComment AND posts comments */}
          <CommentForm id={this.props.id} add={this.handleAddComment}/> {/*  pass down handleAddComment */}
        </div>
    return (
      <div>
        { htmlContent }
      </div>
    )
  }

}

export default PostDisplay;
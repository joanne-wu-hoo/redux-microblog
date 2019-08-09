import React, { Component } from 'react';
import { Button } from "reactstrap";
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import PostForm from './PostForm';

/** PostDisplay (container: Post)
 * 
 * props:
 * - posts: { id: { title, description, content, comments }, ...} from redux store.posts
 * - addComment(), which adds comment to post's comment array in redux state 
 * - deleteComment(), which deletes comment from post's comment array in redux state
 * - deletePost(), which deletes post from redux state
 * - editPost(), which edits post in redux state
 * - addPost(), which adds post to redux state
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

  /** when edit post button is clicked:
   * - setState of editing to true, 
   * - which will render edit form */
  activateEditMode() {
    this.setState(st => ({
      ...st,
      editing: !st.editing
    }));
  }

  /** dispatch DELETE_POST to remove post from redux state */
  handleDeletePost() {
    this.props.deletePost(this.props.id);
    this.props.history.push("/");
  }

  /** dispatch EDIT_POST to edit post in redux state */
  handleEditPost(editedPostObj) {
    this.props.editPost(editedPostObj);
  }

  /** dispatch DELETE_COMMENT to delete post comment from redux state */
  handleDeleteComment(commentId) {
    this.props.deleteComment(this.props.id, commentId);
  }

  /** dispatch ADD_COMMENT to add comment to post's comment array in redux state */
  handleAddComment(postId, comment) {
    this.props.addComment(postId, comment);
  }

  render() {
    let { title, description, content, comments } = this.props.posts[this.props.id];

    // if this.state.editing is true --> show PostForm (edit mode)
    // if this.state.editing is false --> show post content, CommentList, and CommentForm
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
           <CommentList 
            comments={comments} 
            delete={this.handleDeleteComment}/> 
          <CommentForm 
            id={this.props.id} 
            add={this.handleAddComment}/> 
        </div>
    return (
      <div>
        { htmlContent }
      </div>
    )
  }

}

export default PostDisplay;
import React, { Component } from 'react';
import BlogForm from './BlogForm';
import uuid from 'uuid/v4';
import BlogPost from './BlogPost';
import CommentForm from './CommentForm';


/** BlogPost
 * 
 * props:
 * - id
 * - edit
 *   - function from App to edit post & set state
 *   - need to pass in {id, title, description,content}
 * - delete 
 *   - function from App to delete post & set state)
 *   - need to pass in id
 * - blogs: { id: {title, description, content}, ...}
 * - history
 */

class BlogContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
    this.activateEditMode = this.activateEditMode.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
    this.handleAddComment = this.handleAddComment.bind(this);
  }

  activateEditMode() {
    this.setState(st => ({
      ...st,
      editing: !st.editing
    }));
  }

  handleDelete(id) {
    this.props.delete(id);
    this.props.history.push("/");
  }

  handleDeleteComment(postId, commentId) {
    this.props.deleteComment(postId, commentId);
  }

  handleAddComment(postId, comment, evt) {
    evt.preventDefault();
    let id = uuid();
    let newCommentObj = { [id]: comment };
    this.props.addComment(postId, newCommentObj);
  }

  render() {
    let { id, blogs } = this.props;
    
    // if this.state.editing is true --> show BlogForm (edit mode)
    // if this.state.editing is false --> show BlogPost and CommentForm
    let htmlContent = this.state.editing
      ? <BlogForm
          mode="edit"
          blogContents={blogs[id]}
          edit={this.props.edit}
          history={this.props.history}
          id={this.props.id}
        />
      : <div className="BlogAndCommentForm">
          <BlogPost 
            id={this.props.id}
            blogContents={blogs[id]}
            deletePost={this.handleDelete}
            showEditPostForm={this.activateEditMode}
            deleteComment={this.handleDeleteComment}
          />
          <CommentForm
            id={this.props.id}
            add={this.handleAddComment}
          />
        </div>

    return (
      <div className="Blog container">
        { htmlContent }
      </div>
    )
  }
}

export default BlogContainer;
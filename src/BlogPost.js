import React, { Component } from 'react';
import BlogForm from './BlogForm';
import uuid from 'uuid/v4';
import { Form, FormGroup, Input, Button, Label } from 'reactstrap';


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

class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      commentText: ""
    }
    this.activateEditMode = this.activateEditMode.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
    this.handleAddComment = this.handleAddComment.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  activateEditMode() {
    this.setState(st => ({
      ...st,
      editing: !st.editing
    }));
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleDelete(id) {
    this.props.delete(id);
    this.props.history.push("/");
  }

  handleDeleteComment(postId, commentId) {
    this.props.deleteComment(postId, commentId);
  }

  handleAddComment(postId, evt){
    evt.preventDefault();
    let id = uuid();
    let newCommentObj = {[id]:this.state.commentText};
    this.props.addComment(postId, newCommentObj);
    this.setState({commentText: ""});
  }

  render() {
    let { id, blogs } = this.props;
    let { title, description, content, comments } = blogs[id];

    let postComments = comments.map(c =>
      <li key={Object.keys(c)[0]}> <button onClick={() => this.handleDeleteComment(this.props.id, Object.keys(c)[0])}>x</button>{Object.values(c)[0]}</li>) // button, li

    let htmlContent = this.state.editing
      ? <BlogForm
        blogContents={blogs[id]}
        mode="edit"
        edit={this.props.edit}
        history={this.props.history}
        id={this.props.id} />
      : <div>
        <h1> {title} </h1>
        <p> {description}</p>
        <p> {content} </p>
        <Button onClick={this.activateEditMode}>Edit</Button>
        <Button onClick={() => this.handleDelete(this.props.id)}>Delete</Button>
        <ul>
          {postComments}
        </ul>
        <Form className="container mt-5" onSubmit={(evt) => this.handleAddComment(this.props.id,evt)}>
          <FormGroup>
            <Label for="commentText"></Label>
            <Input
              id="commentText"
              type="text"
              onChange={this.handleChange}
              name="commentText"
              value={this.state.commentText}
              required
            />
          </FormGroup>
          <Button>Add</Button>
        </Form>

      </div>

    return (
      <div className="Blog container">
        {htmlContent}
      </div>
    )
  }

}

export default BlogPost;
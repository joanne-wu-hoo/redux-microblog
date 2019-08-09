import React, { Component } from 'react';
import { Form, FormGroup, Input, Button, Label } from 'reactstrap';
import uuid from 'uuid/v4';


/** BlogForm
 * 
 * props:
 * - id
 * - edit
 *   - function from App to edit post & set state
 *   - need to pass in {id, title, description,content}
 * - add 
 *   - function from App to add post & set state)
 *   - need to pass in {id, title, description,content}
 * - blogs: { id: {title, description, content}, ...}
 * 
 */

const DEFAULT_STATE = {
  title: '',
  description: '',
  content: ''
}


class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = (this.props.mode === "add") ? DEFAULT_STATE : this.props.posts[this.props.id]; 
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (Object.values(this.state).some(value => value === "")) {
      alert("Please fill in all fields!");
      return
    }

    // If we're adding a blog, generate a unique id
    // If we're editing a blog, use that blogs id
    let addBlogObj = { ...this.state, postId: uuid() }; 
    let editBlogObj = { ...this.state, postId: this.props.id };

    this.props.mode === "add"
      ? this.props.addPost(addBlogObj)
      : this.props.editPost(editBlogObj)

    this.setState(DEFAULT_STATE);

    this.props.history.push("/");
  }

  render() {
    return (
      <Form className="container mt-5" onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input
            id="title"
            type="text"
            onChange={this.handleChange}
            name="title"
            value={this.state.title}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            id="description"
            type="textarea"
            onChange={this.handleChange}
            name="description"
            value={this.state.description}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label for="content">Content</Label>
          <Input
            id="content"
            type="textarea"
            onChange={this.handleChange}
            name="content"
            value={this.state.content}
            required
          />
        </FormGroup>

        <Button>Submit</Button>

      </Form>
    )
  }
}

export default PostForm;
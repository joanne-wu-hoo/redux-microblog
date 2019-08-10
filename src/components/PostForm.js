import React, { Component } from 'react';
import { Form, FormGroup, Input, Button, Label } from 'reactstrap';
import uuid from 'uuid/v4';


/** PostForm 
 * - container: NewPost, Post
 * - parent: PostDisplay
 * 
 * PostForm is rendered in two scenarios: 
 * (1) Adding a new post 
 * (2) Editing a post
 * 
 * Props vary based on scenario, as follows:
 * 
 * Adding new post mode
 * - mode: "add"
 * - history: rtProps.history from App
 * 
 * Editing post mode
 * - mode: "edit"
 * - editPost(), which invokes dispatch EDIT_POST to edit post info
 * - id: selected post's id
 * - posts: { id: { title, description, content, comments }, ...} from redux store.posts
 * - history: rtProps.history from App
 * 
 */


const DEFAULT_STATE = {
  title: '',
  description: '',
  body: ''
}


class PostForm extends Component {
  constructor(props) {
    super(props);
    // if form in new post mode, initialize form fields to empty strings
    // if form in edit mode, pre-populate form fields with selected posts info
    this.state = (this.props.mode === "add") 
      ? DEFAULT_STATE 
      : this.props.posts[this.props.id]; 
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

    // If we're adding a post, generate a unique id
    // If we're editing a post, use that posts id
    //let addBlogObj = { ...this.state, id: uuid() }; 
    let addBlogObj = { ...this.state }; 
    let editBlogObj = { ...this.state, postId: this.props.id };

    // If we're in "add"/new post mode, invoke addPost to dispatch ADD_POST
    // If we;re in edit post mode, invoke editPost to dispatch EDIT_POST
    this.props.mode === "add"
      ? this.props.addNewPostThroughApi(addBlogObj)
      : this.props.editPost(editBlogObj) // TODO: update to backend action 

    // reset form
    this.setState(DEFAULT_STATE);
    // redirect
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
          <Label for="body">Body</Label>
          <Input
            id="body"
            type="textarea"
            onChange={this.handleChange}
            name="body"
            value={this.state.body}
            required
          />
        </FormGroup>

        <Button>Submit</Button>

      </Form>
    )
  }
}

export default PostForm;
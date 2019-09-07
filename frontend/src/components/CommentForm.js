import React, { Component } from 'react';
import { Form, FormGroup, Input, Button, Label } from 'reactstrap';
import uuid from 'uuid/v4';

/** CommentForm (container: Post, parent: PostDisplay)
 * 
 * state: { commentText }
 * 
 * props:
 * - id: post id
 * - add, which ultimately dispatches ADD_COMMENT to add comment to post in redux state
 * 
 */

const DEFAULT_STATE = {
  commentText: ''
}

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = DEFAULT_STATE;
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
    let id = uuid();
    let newCommentObj = { [id]: this.state.commentText}
    this.props.add(this.props.id, newCommentObj, evt);
    this.setState(DEFAULT_STATE);
  }

  render() {
    return (
      <div className="CommentForm">
        <Form className="container mt-5" onSubmit={(evt) => this.handleSubmit(evt)}>
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
    )
  }
}

export default CommentForm;
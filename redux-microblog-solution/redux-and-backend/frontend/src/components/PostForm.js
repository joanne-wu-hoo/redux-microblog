import React, { Component } from 'react';

/** Show post form.
 *
 * Can be used for editing/adding --- it just calls the parent with edit
 * or cancel actions.
 *
 */

class PostForm extends Component {
  static defaultProps = {
    post: { title: "", description: "", body: "" },
  };

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.post.title,
      description: this.props.post.description,
      body: this.props.post.body,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.save(this.state);
  }

  render() {
    return (
      <form className="mb-4" onSubmit={this.handleSubmit}>

        <div className="form-group">
        <label htmlFor="editform-title">Title:</label>
        <input onChange={this.handleChange}
               id="editform-title"
               name="title"
               className="form-control"
               value={this.state.title} />
        </div>

        <div className="form-group">
        <label htmlFor="editform-description">Description:</label>
        <input onChange={this.handleChange}
               id="editform-description"
               name="description"
               className="form-control"
               value={this.state.description} />
        </div>

        <div className="form-group">
        <label htmlFor="editform-body">Body:</label>
        <textarea onChange={this.handleChange}
                  id="editform-body"
                  name="body"
                  className="form-control"
                  rows={10}
                  value={this.state.body} />
        </div>

        <button className="btn btn-primary mr-2">Save</button>
        <button onClick={this.props.cancel} className="btn btn-secondary">Cancel</button>
      </form>
    );
  }
}

export default PostForm;
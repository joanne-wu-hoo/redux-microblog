import React from "react";
import "./NewPost.css";
import { connect } from "react-redux";
import { sendPostToAPI } from "../actions/posts";
import PostForm from "../components/PostForm";

/** Show post form, and handle editing of it. */

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  /** Adds post and saves to backend. */

  add({ title, description, body }) {
    this.props.sendPostToAPI(title, description, body);
    this.props.history.push("/");
  };

  /** Cancel (redirect) */

  cancel() {
    this.props.history.push("/");
  };

  render() {
    return (
      <main>
        <h1>New Post</h1>
        <PostForm save={this.add} cancel={this.cancel} />
      </main>
    );
  }
}

export default connect(
  null,
  { sendPostToAPI }
)(NewPost);

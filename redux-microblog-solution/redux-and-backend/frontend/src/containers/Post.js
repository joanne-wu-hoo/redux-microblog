import React from "react";
import "./Post.css";
import { connect } from "react-redux";
import {
  getPostFromAPI,
  updatePostInAPI,
  sendVoteToAPI,
  sendCommentToAPI,
  removeCommentFromAPI,
  removePostFromAPI
} from "../actions/posts";
import PostForm from "../components/PostForm";
import CommentList from "../components/CommentList";
import PostDisplay from "../components/PostDisplay";
import CommentForm from "../components/CommentForm";

/** Post:
 *
 * - get post data from API, if not present
 * - allows post to be edited (toggleEdit is local state for this)
 * - handles edit form submission
 * - handles add-comment form submission
 * - handles comment-deletion
 * - handles post-deletion
 */

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false, };

    this.edit = this.edit.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.addComment = this.addComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
    this.delete = this.delete.bind(this);
    this.vote = this.vote.bind(this);
  }

  /** If we don't have the post, request it from API. */

  async componentDidMount() {
    if (!this.props.post) {
      await this.props.getPostFromAPI(this.props.id)
    }
  }

  /** Toggle editing on/off */

  toggleEdit() {
    this.setState(st => ({ isEditing: !st.isEditing }));
  }

  /** Handle post editing: adds to backend. */

  edit({ title, description, body }) {
    this.props.updatePostInAPI(
      this.props.post.id,
      title,
      description,
      body
    );

    this.toggleEdit();
  }

  /** Handle post deletion: deletes from backend. */

  delete() {
    this.props.removePostFromAPI(this.props.post.id);
    this.props.history.push("/");
  }

  /** Handle voting in backend. */

  vote(direction) {
    this.props.sendVoteToAPI(this.props.post.id, direction)
  }

  /** Handle adding a comment: adds to backend. */

  addComment(text) {
    this.props.sendCommentToAPI(this.props.post.id, text);
  }

  /** Handle deleting a comment in backend. */

  deleteComment(commentId) {
    this.props.removeCommentFromAPI(this.props.post.id, commentId);
  }

  /** Render:
   *
   * - if not post yet, a loading message
   * - if editing, the edit form & comments
   * - if not, the display & comments
   */

  render() {
    const post = this.props.post;
    if (!post) return <p>Loading</p>;

    return (
      <div className="Post">

        {this.state.isEditing
          ? <PostForm post={post} save={this.edit} cancel={this.toggleEdit} />
          : <PostDisplay post={post}
                         toggleEdit={this.toggleEdit}
                         delete={this.delete}
                         doVote={this.vote} />}

        <section className="Post-comments mb-4">
          <h4>Comments</h4>
          <CommentList comments={post.comments}
                       deleteComment={this.deleteComment} />
          <CommentForm submitCommentForm={this.addComment} />
        </section>

      </div>
    );
  }
}

function mapDispatchToProps(state, props) {
  // get the post ID from the route, and get the redux post (if present)

  let id = props.match.params.postId;
  return {
    id,
    post: state.posts[id]
  }
}

export default connect(
  mapDispatchToProps,
  {
    getPostFromAPI,
    updatePostInAPI,
    sendVoteToAPI,
    removeCommentFromAPI,
    sendCommentToAPI,
    removePostFromAPI,
  }
)(Post);

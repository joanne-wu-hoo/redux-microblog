import React, { Component } from 'react';
import "./PostDisplay.css";

/** Display a post:
 *
 * - show edit/delete buttons (& call parent on action)
 * - show vote count and +/- buttons (& call parent on action)
 *
 */

class PostDisplay extends Component {
  constructor(props) {
    super(props);
    this.doVoteUp = this.doVoteUp.bind(this);
    this.doVoteDown = this.doVoteDown.bind(this);
  }

  doVoteUp() {
    this.props.doVote("up");
  }

  doVoteDown() {
    this.props.doVote("down");
  }

  render() {
    const { title, description, body, votes } = this.props.post;

    return (
      <div className="PostDisplay">
          <div>
            <h2>{title}</h2>
            <p><i>{description}</i></p>
            <div>{body}</div>
          </div>

          <div className="PostDisplay-right">
            <div className="PostDisplay-edit-area">
              <i className="fas fa-edit text-primary"
                 onClick={this.props.toggleEdit} />
              <i className="fas fa-times text-danger"
                 onClick={this.props.delete} />
            </div>
            <div className="PostDisplay-votes">
              <b>{votes} votes:</b>

              <i className="fas fa-thumbs-up text-success"
                 onClick={this.doVoteUp} />
              <i className="fas fa-thumbs-down text-danger"
                 onClick={this.doVoteDown} />
            </div>
          </div>
      </div>
    );
  }
}

export default PostDisplay;
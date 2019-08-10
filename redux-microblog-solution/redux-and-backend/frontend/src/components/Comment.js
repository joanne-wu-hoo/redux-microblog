import React, { PureComponent } from 'react';

/** CommentList: shows list of comments passed down as props.
 *
 * Comments can be deleted by clicking next to them; this is handled by
 * the parent.
 *
 */

class Comment extends PureComponent {
  constructor(props){
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }
  handleDelete(){
    this.props.triggerDelete(this.props.id);
  }
  render() {
    return (
      <div>
        <p>
          {this.props.triggerDelete && (
            <i
              className="fa fa-times text-danger mr-2"
              onClick={this.handleDelete}
            />
          )}

          {this.props.text}
        </p>
      </div>
    );
  }
}

export default Comment;
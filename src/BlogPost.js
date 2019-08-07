import React, { Component } from 'react';
import BlogForm from './BlogForm';
import { Button } from 'reactstrap';


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
  constructor(props){
    super(props);
    this.state = {
      editing: false
    }
    this.activateEditMode = this.activateEditMode.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  activateEditMode(){
    this.setState(st => ({
      ...st,
      editing: !st.editing
    }));
  }

  handleDelete(id){
    this.props.delete(id);
    this.props.history.push("/");
  }

  render() {
    let { id, blogs } = this.props;
    let { title, description, content } = blogs[id];

    let htmlContent = this.state.editing
      ? <BlogForm 
          blogContents={blogs[id]} 
          mode="edit" 
          edit={this.props.edit} 
          history={this.props.history}
          id={this.props.id}/> 
      : <div>
          <h1> { title } </h1>
          <p> { description }</p>
          <p> { content } </p>
          <Button onClick={this.activateEditMode}>Edit</Button>
          <Button onClick={()=>this.handleDelete(this.props.id)}>Delete</Button>
        </div>

    return (
      <div className="Blog container">
        { htmlContent } 
      </div>
    )
  }

}

export default BlogPost;
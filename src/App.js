import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import BlogPost from './BlogPost';
import BlogForm from './BlogForm';
import NotFound from './NotFound'
import './App.css';


/** App
 * 
 * state:
 * - blogs: {
      id : {
        title: string
        content: string
      }
    }
 */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { blogs: {} };
    this.addPost = this.addPost.bind(this);
    this.editPost = this.editPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }


  /** given newPostObj = {id, title, description}, 
   * add to state in form {id : { title, description }} 
   * 
   * TODO: CHECK IF THIS WORKS
   */

  addPost(newPostObj) {
    const { id, ...content } = newPostObj;
    this.setState(state => ({
      blogs: { ...state.blogs, [id]: content }
    }))
  }

  /** given editedPostObj = {id, title, description}, 
   * edit post in state in form {id : { title, description }} 
   */
  editPost(editedPostObj) {
    const { id, ...content } = editedPostObj;
    this.setState(state => ({
      blogs: { ...state.blogs, [id]: content }
    }))

  }

  /** given post id, delete post from state */
  deletePost(id) {
    if (this.state.blogs[id] === undefined) {
      return
    }
    let copiedBlogs = { ...this.state.blogs };
    delete copiedBlogs[id];

    this.setState(state => ({
      blogs: copiedBlogs
    }))
  }

  render() {

    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" render={() => <Home blogs={this.state.blogs} />} />
          <Route exact path="/:id" render={(rtProps) =>
            <BlogPost
              id={rtProps.match.params.id}
              edit={this.editPost}
              delete={this.deletePost}
              blogs={this.state.blogs} />} />
          <Route exact path="/new" render={() => <BlogForm add={this.addPost} />} />
          <Route render={() => <NotFound />} />
        </Switch>
      </div>
    )
  }
}

export default App;

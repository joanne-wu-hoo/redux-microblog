import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import BlogPost from './BlogPost';
import BlogForm from './BlogForm';
import NotFound from './NotFound'
import './App.css';

const SEED_BLOGS = require("./test_blog.json");

/** App
 * 
 * state:
 * - blogs: {
      id : {
        title: string,
        descripton: string,
        content: string
      }
    }
 */


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { blogs: SEED_BLOGS };
    this.addPost = this.addPost.bind(this);
    this.editPost = this.editPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

  /** given newPostObj = {id, title, description, content }, 
   * add to state in form {id : { title, description, content }} 
   */

  addPost(newPostObj) {
    const { id, ...content } = newPostObj;
    this.setState(state => ({
      blogs: { ...state.blogs, [id]: content }
    })
    // ,function after() { console.log("after App > addPost, this.state.blogs: ", this.state.blogs) }
    )
  }

  /** given editedPostObj = {id, title, description}, edit post in state*/
  editPost(editedPostObj) {
    const { id, ...content } = editedPostObj; // expect id to be 1
    this.setState(state => ({
      blogs: { ...state.blogs, [id]: content }
    })
    //, function after() { console.log("after App > editPost, this.state.blogs: ", this.state.blogs) }
    )
  }

  /** given post id, delete post from state */
  deletePost(id) {
    debugger;
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
          <Route exact path="/" render={() => 
            <Home 
              blogs={this.state.blogs} />} />
          <Route exact path="/new" render={(rtProps) => 
            <BlogForm 
              mode="add" 
              add={this.addPost} 
              history={rtProps.history}/>} />
          <Route exact path="/:id" render={(rtProps) =>
            <BlogPost
              id={rtProps.match.params.id}
              delete={this.deletePost}
              edit={this.editPost}
              blogs={this.state.blogs}
              history={rtProps.history} />} />
          <Route render={() => <NotFound />} />
        </Switch>
      </div>
    )
  }
}

export default App;

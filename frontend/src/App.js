import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './containers/Home';
import NewPost from './containers/NewPost';
import Post from './containers/Post';
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
        content: string,
        comments: [ {id, text}, ... ]
      }
    }
 *
 */


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { blogs: SEED_BLOGS };
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>

          <Route exact path="/" render={() =>
            <Home />} />

          <Route exact path="/new" render={(rtProps) =>
            <NewPost 
              mode="add" 
              history={rtProps.history} />} />

          <Route exact path="/:id" render={(rtProps) =>
            <Post
              id={rtProps.match.params.id}
              posts={this.props.posts}
              history={rtProps.history} />}
            />

          <Route render={() => <NotFound />} />

        </Switch>
      </div>
    )
  }
}

export default App;

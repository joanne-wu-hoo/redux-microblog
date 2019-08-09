import React, { Component } from 'react';
import { Card, CardTitle, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import './TitleList.css'

/** TitleList (container: Home)
 * 
 * props:
 * - posts: { id: { title, description, content, comments }, ...} from redux store.posts
 * 
 */

class TitleList extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true
    }
  }
  
  async componentDidMount(){
    await this.props.getPostsSummaryFromApi();
    this.setState(st => ({ 
        ...st,
        loading: !st.loading
      })
    )
  }

/** QUESTION - whats the best place to enforce logic to prevent unnecesary changes to redux state?
 * 
 * Ran into an issue where our API call to getPostSummary and render TitleList kept on making the call & adding post info to redux state
 * We wanted to prevent unecessary changes to redux state as well as unecessary API calls
 * 
 * Our solution right now is to intercept in the rootReducer. We are comparing current state info to API info 
 * If the info is the same, don't update Redux state.
 * 
 * It's fine... but we're wondering if there is a way to check before making the API call? 
 * 
 * Is there a point in the React Component LifeCycle we can hook into??
 * 
 * We tried shouldComponentUpdate but that happens after mounting, where we're already made the call
 * 
 * Does componentDidMount provide anything that we can use
 * 
 * LOCAL STORAGE IDEA
 * - add/edit/delete make API call and set info in local storage?
 * - on titlePage componentDidMount access info in local storage?
 * 
 */ 
  // shouldComponentUpdate(nextProps, nextState){
  //   console.log("in should component update")
  //   console.log("this.props.posts.length: ", this.props.posts.length);
  //   console.log("nextProps.posts.length: ", nextProps.posts.length);
  //   let sameData = (this.props.posts.length === nextProps.posts.length);
  //   return (sameData);
  // }

  render() {
    if (this.state.loading) {
      return (
        <div className="loading">
          <i className="fas fa-4x fa-spinner fa-spin" />
        </div>
      );
    }

    let posts = this.props.posts.map(postObj =>
      <Card className="container mt-2 mb-2">
        <CardTitle>
          <Link to={`/${postObj.id}`}>{ postObj.title }</Link>
        </CardTitle>
        <CardSubtitle>{ postObj.description }</CardSubtitle>
      </Card>
    )

    return (
      <div className="BlogList">
        { posts }
      </div>
    )
  }

}

export default TitleList;
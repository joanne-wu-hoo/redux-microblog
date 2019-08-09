import React, { Component } from 'react';
import { Card, CardTitle, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';

/** TitleList
 * 
 * props:
 * - posts: { id: { title, description, content, comments }, ...} from redux store.posts
 * 
 */

class TitleList extends Component {
  render() {
    let blogIds = Object.keys(this.props.posts);
    let posts = blogIds.map(id =>
      <Card className="container mt-2 mb-2">
        <CardTitle>
          <Link to={`/${id}`}>{ this.props.posts[id].title }</Link>
        </CardTitle>
        <CardSubtitle>{ this.props.posts[id].description }</CardSubtitle>
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
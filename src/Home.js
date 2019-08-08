import React, { Component } from 'react';
import { Card, CardTitle, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';

/** Home
 * 
 * props:
 * - blogs: { id: { title, description, content, comments }, ...}
 * 
 */

class Home extends Component {
  render() { 
    let blogIds = Object.keys(this.props.blogs);
    let blogs = blogIds.map(id =>
      <Card className="container mt-2 mb-2">
        <CardTitle>
          <Link to={`/${id}`}>{ this.props.blogs[id].title }</Link>
        </CardTitle>
        <CardSubtitle>{ this.props.blogs[id].description }</CardSubtitle>
      </Card>
    )

    return (
      <div className="BlogList">
        { blogs }
      </div>
    )
  }

}

export default Home;
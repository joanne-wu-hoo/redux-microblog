import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

/** 404 Page */

class NotFound extends Component {
  render() {
    return (
      <div className="404">
        <Card>
          <CardBody>
            <CardTitle className="font-weight-bold text-center">
              <h1>404</h1>
            </CardTitle>
            <CardSubtitle>
              <p>That page couldn't be found!</p>
            </CardSubtitle>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default NotFound
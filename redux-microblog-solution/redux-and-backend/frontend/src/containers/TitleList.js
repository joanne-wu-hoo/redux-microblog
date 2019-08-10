import React from "react";
import "./TitleList.css";
import { connect } from 'react-redux';
import { fetchTitlesFromAPI } from '../actions/titles';
import { Link } from 'react-router-dom';
import { sendVoteToAPI } from "../actions/posts";

/** Show list of blog titles, ordered by popularity. */

class TitleList extends React.Component {
  async componentDidMount() {
    if (this.props.titles.length === 0) {
      await this.props.fetchTitlesFromAPI();
    }
  }

  vote(direction, id) {
    this.props.sendVoteToAPI(id, direction)
  }

  render() {
    if (!this.props.titles) return <b>Loading</b>;

    return (
      <div className="row">
        {this.props.titles.map(title => (
          <div key={title.id} className="col">
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  <Link to={"/" + title.id}>{title.title}</Link>
                </div>
                <div className="card-text">
                  <i>{title.description}</i>
                </div>
              </div>
              <div className="card-footer">
                <small>{title.votes} votes</small>
                <i className="fas fa-thumbs-up text-success ml-2"
                   onClick={() => this.vote("up", title.id)} />
                <i className="fas fa-thumbs-down text-danger ml-2"
                   onClick={() => this.vote("down", title.id)} />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    titles: state.titles,
  }
}

export default connect(
  mapStateToProps,
  { fetchTitlesFromAPI, sendVoteToAPI, }
)(TitleList);
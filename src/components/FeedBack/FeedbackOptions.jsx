import React, { Component } from "react";

export default class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <>
        {" "}
        <ul>
          <li>
            <button id="good" onClick={this.addRating}>
              Good
            </button>
          </li>
          <li>
            <button id="neutral" onClick={this.addRating}>
              Neutral
            </button>
          </li>
          <li>
            <button id="bad" onClick={this.addRating}>
              Bad
            </button>
          </li>
        </ul>
      </>
    );
  }
}

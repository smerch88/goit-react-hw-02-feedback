import React, { Component } from "react";
import PropTypes from "proptypes";

export default class FeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addRating = (e) => {
    const feedbackRating = e.target.id;
    this.setState((prevState) => ({
      [feedbackRating]: ++prevState[feedbackRating],
    }));
  };

  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

  countPositiveFeedbackPercentage = ({ good, neutral, bad }) =>
    ((good * 100) / (good + neutral + bad)).toFixed(0);

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
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
        <h2>Statistics</h2>
        <ul>
          <li>
            Good: <span>{this.state.good}</span>
          </li>
          <li>
            Neutral: <span>{this.state.neutral}</span>
          </li>
          <li>
            Bad: <span>{this.state.bad}</span>
          </li>
          <li>
            Total: <span>{this.countTotalFeedback(this.state)}</span>
          </li>
          <li>
            Positive Feedback:{" "}
            <span>{this.countPositiveFeedbackPercentage(this.state)}</span>%
          </li>
        </ul>
      </div>
    );
  }
}

FeedBack.protoTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

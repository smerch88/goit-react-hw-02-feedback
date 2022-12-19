import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <>
        <h2>Statistics</h2>
        <ul>
          <li>
            Good: <span>{good}</span>
          </li>
          <li>
            Neutral: <span>{neutral}</span>
          </li>
          <li>
            Bad: <span>{bad}</span>
          </li>
          <li>
            Total: <span>{total}</span>
          </li>
          <li>
            Positive Feedback: <span>{positivePercentage}</span>%
          </li>
        </ul>
      </>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

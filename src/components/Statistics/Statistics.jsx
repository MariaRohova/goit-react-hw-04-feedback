import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;

    return (
      <>
        <p>Good: {good} </p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {good + neutral + bad}</p>
        <p>Positive feedback: {Math.floor((good / total) * 100)}% </p>
      </>
    );
  }


export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

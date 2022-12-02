import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button.styled';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <Button>
      <button type="button" onClick={() => onLeaveFeedback('good')}>
        Good
      </button>
      <button type="button" onClick={() => onLeaveFeedback('neutral')}>
        Neutral
      </button>
      <button type="button" onClick={() => onLeaveFeedback('bad')}>
        Bad
      </button>
    </Button>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  goodIncrement: PropTypes.func.isRequired,
  NeutralIncrement: PropTypes.func.isRequired,
  badIncrement: PropTypes.func.isRequired,
};

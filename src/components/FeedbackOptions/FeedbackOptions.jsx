import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button.styled';

const FeedbackOptions = ({ goodIncrement, badIncrement, neutralIncrement }) => {
  return (
    <Button>
      <button type="button" onClick={goodIncrement}>
        Good
      </button>
      <button type="button" onClick={neutralIncrement}>
        Neutral
      </button>
      <button type="button" onClick={badIncrement}>
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

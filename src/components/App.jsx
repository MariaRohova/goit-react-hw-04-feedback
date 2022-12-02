import React, { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <Section title={'Please live feedback'}>
        <FeedbackOptions
          badIncrement={() => {
            setBad(prevState => prevState + 1);
          }}
          goodIncrement={() => {
            setGood(prevState => prevState + 1);
          }}
          neutralIncrement={() => {
            setNeutral(prevState => prevState + 1);
          }}
      
        />
      </Section>
      <Section title={'Statistics'}>
        {good > 0 || bad > 0 || neutral > 0 ? (
          <Statistics bad={bad} good={good} neutral={neutral} />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
export default App;

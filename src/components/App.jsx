import React, { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

function App() {
  const [goodFeedback, setGoodFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);
  const [badFeedback, setBadFeedback] = useState(0);

  function countTotalFeedback() {
    return goodFeedback + neutralFeedback + badFeedback;
  }
  function countPositiveFeedbackPercentage() {
    if (goodFeedback === 0) {
      return 0;
    }
    return ((goodFeedback / countTotalFeedback()) * 100).toFixed(2);
  }
  const handleClick = btnName => {
    switch (btnName) {
      case 'good':
        setGoodFeedback(goodFeedback + 1);
        break;
      case 'neutral':
        setNeutralFeedback(neutralFeedback + 1);
        break;
      case 'bad':
        setBadFeedback(badFeedback + 1);
        break;
      default:
        console.log('Error');
    }
  };

  return (
    <div
      style={{
        textAlign: 'center',
        padding: '20px',
        fontSize: '16px',
        fontWeight: 'bold',
        textDecoration: 'none',
      }}
    >
      <Section title="Please leave the feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleClick}
        ></FeedbackOptions>
        <h3>Statistic</h3>
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={goodFeedback}
            neutral={neutralFeedback}
            bad={badFeedback}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        )}
      </Section>
    </div>
  );
}

export default App;

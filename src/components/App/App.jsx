import { useState, useEffect } from 'react';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import '../App/App.css';


function App() {
  
  const [feedbackCounts, setFeedbackCounts] = useState(
    JSON.parse(localStorage.getItem('feedbackCounts')) || {
      good: 0,
      neutral: 0,
      bad: 0
    }
  );

  const [feedbackStart, setFeedbackStart] = useState(
    JSON.parse(localStorage.getItem('feedbackStart')) || false
  );

  useEffect(() => {
    localStorage.setItem('feedbackCounts', JSON.stringify(feedbackCounts));
  }, [feedbackCounts]);

  useEffect(() => {
    localStorage.setItem('feedbackStart', JSON.stringify(feedbackStart));
  }, [feedbackStart]);
  
  const updateFeedback = (feedbackType) => {
    setFeedbackCounts(prevState => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1
    }));

    setFeedbackStart(true);
  };

  const totalFeedback = feedbackCounts.good + feedbackCounts.neutral + feedbackCounts.bad;
  const positiveFeedback = totalFeedback > 0 ? Math.round((feedbackCounts.good / totalFeedback) * 100) :0;
  
  
  const resetFeedback = () => {
    setFeedbackCounts({ good: 0, neutral: 0, bad: 0 });
    setFeedbackStart(false);
  };




  return (
    <>
      <Description />
      <Options
        feedbackCounts={Object.keys(feedbackCounts)}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />

      <Feedback
        good={feedbackCounts.good}
        neutral={feedbackCounts.neutral}
        bad={feedbackCounts.bad}
        feedbackStart={feedbackStart}
        totalFeedback={totalFeedback}
        positiveFeedback={positiveFeedback}
      />
     
    </>
  )
}

export default App

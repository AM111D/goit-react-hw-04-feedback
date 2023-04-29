import React, { useState } from 'react';
import Section from './Feedback/Section/Section';
import Statistics from './Feedback/Statistics/Statistics';
import FeedbackOptions from './Feedback/FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleChenge = option => {
    const name = option.name;
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [name]: prevFeedback[name] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    const total = countTotalFeedback();
    const positiveFeedbackPercentage = (good * 100) / total;
    return Math.round(positiveFeedbackPercentage);
  };

  const total = countTotalFeedback();
  const percentage = countPositiveFeedbackPercentage();

  return (
    <div className="Widget">
      <Section title="Please leave feedback" />
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={handleChenge}
      />
      <Section title="Statistics" />
      {total === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <Statistics
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={total}
          percentage={percentage}
        />
      )}
    </div>
  );
};

// class oldApp extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleChenge = option => {
//     const name = option.name;
//     this.setState(prevState => ({
//       [name]: prevState[name] + 1,
//     }));
//   };

//   countTotalFeedback() {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;
//     return total;
//   }

//   countPositiveFeedbackPercentage() {
//     const { good } = this.state;
//     const total = this.countTotalFeedback();
//     const positiveFeedbackPercentage = (good * 100) / total;
//     return Math.round(positiveFeedbackPercentage);
//   }

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const percentage = this.countPositiveFeedbackPercentage();

//     return (
//       <div className="Widget">
//         <Section title="Please leave feedback" />
//         <FeedbackOptions
//           options={['good', 'neutral', 'bad']}
//           onLeaveFeedback={this.handleChenge}
//         />
//         <Section title="Statistics" />
//         {total === 0 ? (
//           <Notification message="No feedback given" />
//         ) : (
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={total}
//             percentage={percentage}
//           />
//         )}
//       </div>
//     );
//   }
// }

export default App;

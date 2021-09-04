import "./App.css";
import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import Notification from "./Statistics/Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  setFeedback = (value) => {
    this.setState((prevState) => ({ [value]: prevState[value] + 1 }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((sum, elem) => sum + elem, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((this.state.good / total) * 100) : 0;
  };

  render() {
    const total = this.countTotalFeedback();

    return (
      <div className="Feedback-container">
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.state} onLeaveFeedback={this.setFeedback} />
        </Section>
        <Section title="Statistics">{total > 0 ? <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positiveFeedbackPercentage={this.countPositiveFeedbackPercentage()} /> : <Notification message="No feedback given." />}</Section>
      </div>
    );
  }
}

export default App;

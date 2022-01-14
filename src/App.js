import React, { Component } from 'react';
import { Container } from './App.styled';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';


class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((100 * this.state.good) / this.countTotalFeedback());
  };

  valueIncrementLeaveFeedback = (option) => {
    this.setState((prevstate) => ({ [option]: prevstate[option] + 1 }));
  };

  render() {
    return (
    <Container>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.valueIncrementLeaveFeedback} />
        </Section>

        <Section title={'Statistic'}>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
        </Section>
    </Container>
  )}
}

export default App;

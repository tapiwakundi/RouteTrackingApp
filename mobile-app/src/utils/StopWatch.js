import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from "react-native";
import { Stopwatch, Timer } from "react-native-stopwatch-timer";

export default class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerStart: false,
      stopwatchStart: this.props.shouldStart,
      totalDuration: 90000,
      timerReset: false,
      stopwatchReset: false,
    };
    this.toggleStopwatch = this.toggleStopwatch.bind(this);
    this.resetStopwatch = this.resetStopwatch.bind(this);
  }

  toggleStopwatch() {
    this.setState({
      stopwatchStart: !this.state.stopwatchStart,
      stopwatchReset: false,
    });
    console.log(this.props);
  }

  resetStopwatch() {
    this.setState({ stopwatchStart: false, stopwatchReset: true });
  }

  getFormattedTime(time) {
    this.currentTime = time;
  }

  render() {
    return (
      <View>
        <Stopwatch
          laps
          msecs
          start={this.props.shouldStart}
          reset={this.state.stopwatchReset}
          options={options}
          //   getTime={this.getFormattedTime}
        />
        <TouchableHighlight onPress={this.toggleStopwatch}>
          <Text style={{ fontSize: 30 }}>
            {!this.props.shouldStart ? "Start" : "Stop"}
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.resetStopwatch}>
          <Text style={{ fontSize: 30 }}>Reset</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const handleTimerComplete = () => alert("custom completion function");

const options = {
  container: {
    backgroundColor: "#000",
    padding: 5,
    borderRadius: 5,
    width: 220,
  },
  text: {
    fontSize: 30,
    color: "#FFF",
    marginLeft: 7,
  },
};

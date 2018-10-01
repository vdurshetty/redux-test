import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';

class Clock extends Component {
	constructor(props) {
		super(props);
		this.state = {date:new Date()};
	}

	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
		1000
		);
	}

	tick() {
    this.setState({
      date: new Date()
    });
	}
	componentWillUnMount() {
		clearInterval(this.timerID);
	}

  render() {
    return (
			<h2><font color="red"> Hello {this.props.name}  - {this.state.date.toLocaleTimeString()} </font> </h2>

    );
  }
}

export default Clock;

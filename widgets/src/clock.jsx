import React from 'react'

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {time:new Date() }
    this.tick = this.tick.bind(this);
  }

  componentDidMount () {
    this.intervalId = window.setInterval(this.tick, 1000);
  }

  componentWillUnmount () {
    window.clearInterval(this.intervalId);
  }

  tick () {
    this.setState({time:new Date()})
  }

render() {
    return(
      <div className="clock">
        <div className="clock-row">
        <p>Time:</p><p>{ this.state.time.toString().split(" ")[4] }</p>
        </div><div className="clock-row">
        <p>Date:</p><p>{ this.state.time.toString().split(" ").slice(0,4).join(" ") }</p></div>
      </div>
    );
  }
}

export default Clock;

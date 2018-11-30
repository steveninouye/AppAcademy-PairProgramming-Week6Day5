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
  tick () { this.setState({time:new Date()})}

render() {
    return(<h1>{this.state.time.toString().slice(16, 25)}</h1>);
}
}

export default Clock;

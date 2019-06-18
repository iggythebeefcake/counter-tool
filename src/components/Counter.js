import React, { Component } from 'react';

class Counter extends Component {
    state = { value: 0 }

  inc = () => {
    this.setState({ value: this.state.value + 1 })
  }

  dec = () => {
    this.setState({ value: this.state.value - 1 })
  }


  render() {
    const {name, age } = this.props
    const { value } = this.state

    return (
      <div>
        <h2 style={{ color: name, fontSize: '12px'}}>{name} counter</h2>
        <p>{value}</p>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>

      </div>
    );
  }
}


export default Counter;
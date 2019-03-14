import React from "react";

class MyCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      dubble: 0
    };
  }
  render() {
    return (
      <div class="header item">
        <button class="ui button" onClick={this.onClickInck.bind(this)}>
          +
        </button>
        <output onDoubleClick={this.onDouble.bind(this)}>
          {this.state.counter}
        </output>
        <button class="ui button" onClick={this.onClickDec.bind(this)}>
          -
        </button>
        <p>Podwójne kliki: {this.state.dubble} </p>
      </div>
    );
  }
  onClickInck() {
    this.setState({ counter: this.state.counter + 1 });
  }

  onClickDec() {
    this.setState({ counter: this.state.counter - 1 });
  }

  onDouble() {
    this.setState({ dubble: this.state.dubble + 1 });
  }
}

export default MyCounter;

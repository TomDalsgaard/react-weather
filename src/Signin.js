import React, { Component } from 'react';
import './App.css';

class Signin extends Component {
  constructor () {
    super();
    this.state = {account: null,
      apikey: null,
      isLocked: true
    };
  }

  render () {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" onChange={this.onChange} value="7376fb99a8cb5c4fe0585c9b3fe030c2"/>
        <button type="submit">Sign In</button>
      </form>
    );
  }

  onSubmit = (ev) => {
    ev.preventDefault();
    this.props.signingIn(this.state);
  }

  onChange = (ev) => {
    this.setState({account: ev.target.value});
  }
}

export default Signin;

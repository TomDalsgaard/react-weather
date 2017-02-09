import React, { Component } from 'react';
import './App.css';

class Weather extends Component {
  constructor () {
    super();
    this.state = {account: ''};
  }

  render () {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" onChange={this.onChange} value="Tokyo"/>
        <button type="submit">Froecast</button>
        
      </form>      
    );
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.signingIn(this.state);
  }

  onChange = (e) => {
    this.setState({account: e.target.value});
  }
}

export default Weather;

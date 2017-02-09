import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Signin from './Signin';

class App extends Component {
  constructor() {
    super();
    var onLock = null;
    var onUnLock = '';
    this.state = { apikey: '7376fb99a8cb5c4fe0585c9b3fe030c2', 
      city: '',
      error: null,
      weather: null,
      forecast: null 
    };
  }
  render() {

    // var Lock = Signin;
    //this.state = {apikey: ''};
    return (
      <div className="App">
        <div className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<h2>Welcome to React</h2>*/}
          {/*<Signin signingIn={({account}) => alert(`signing in as ${account}`)}/>*/}
          <Signin signingIn={({account}) => this.setState({ apikey: account })} />
          {/*<Lock onLock={this.onLock} onUnlock={this.onUnlock}/>*/}
          sdfsdf sdfsfsf
        </div>
        <div className="App-intro">
          <h2>Weather</h2>
          <form onSubmit={this.onSubmit}>
            <input type="text" onChange={this.onCityChange} value="Tokyo" />
            <button type="submit">Froecast</button>
            <p>{this.state.apikey} sdfsfsf</p>
            {this.state.forecast}
            {this.state.account}

          </form>
        </div>
      </div>
    );

  }

  onCityChange = (ev) => {
    this.setState({...this.state, city: ev.target.value});
  }

  onSubmit = (ev) => {
    ev.preventDefault();
        console.log(this.state.city);        
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${this.state.apikey}`;
    // fetch('http://api.openweathermap.org/data/2.5/weather?q=Tokyo,jp&APPID=7376fb99a8cb5c4fe0585c9b3fe030c2')
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        console.log(result.weather);
        console.log(this.state.apikey);        
        console.log(this.state.city);        
      }).catch(function (err) {
        alert(`Forecast has Error`)
      });
  }
}

export default App;

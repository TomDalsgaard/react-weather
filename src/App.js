import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Signin from './Signin';

class App extends Component {
 constructor () {
    super();
    var onLock = '';
    var onUnLock = '';
    this.state = {apikey: '', forecast: ''};
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
          <Signin signingIn={({account}) => this.setState({apikey: account})}/>
          {/*<Lock onLock={this.onLock} onUnlock={this.onUnlock}/>*/}
          {this.state.account}
          sdfsdf sdfsfsf
        </div>
        <p className="App-intro">
          <h2>Weather</h2>          
          <form onSubmit={this.onSubmit}>
             <input type="text" onChange={this.onChange} value="Tokyo"/>
             <button type="submit">Froecast</button>
             <p>{this.state.apikey} sdfsfsf</p>
              {this.state.forecast}             

          </form>
        </p>
      </div>
    );

  }

  onSubmit = (ev) => {
    ev.preventDefault();
        fetch('http://api.openweathermap.org/data/2.5/weather?q=Tokyo,jp&APPID=7376fb99a8cb5c4fe0585c9b3fe030c2')
        .then((response) => response.json())
        .then((result)=>{
          console.log(result.weather)
        }).catch(function(err) {
	      alert(`signing in as Error`)
    });
  }
}

export default App;

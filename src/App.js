import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      
    }
  }


  updateHue = (event) => {
    const newHue = event.target.value
    this.setState({
      hue: newHue
  })
}

  updateSaturation = (event) => {
    const newSaturation = event.target.value
    this.setState({
      saturation: newSaturation
    })    
  }

  updateLightness = (event) => {
    const newLightness = event.target.value
    this.setState({
      lightness: newLightness
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Color Picker</h1>
        </header>
        <section className="App-intro">
          <input
            type="range"
            min="0"
            max="100"
            // onInput={this.updateHue} 
            onChange={this.updateHue}
            value={this.state.hue}
          />
          <input
            type="range"
            min="0"
            max="100"
            // onInput={this.updateSaturation} 
            onChange={this.updateSaturation}
            value={this.state.saturation}
          />
          <input
            type="range"
            min="0"
            max="100"
            // onInput={this.updateLightness} 
            onChange={this.updateLightness}
            value={this.state.lightness}
          />
        </section>

        <div
          className="shape"
          style={
            {
              height: `${this.state.height}em`,
              width: `${this.state.width}em`
            }
          }>
        </div>
      </div>
    );
  }
}

export default App;

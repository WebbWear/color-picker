import React, { Component } from 'react';
import './App.css';

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      hue: "180", 
      saturation: "50",
      lightness: "50"
    }
  }

  updateColor = (event) => {
    const newColor = event.target.value;
    console.log('updating Color', newColor)
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
        <header className="App-header"  style={{backgroundColor: `hsl(${this.state.hue},${this.state.saturation}%,${this.state.lightness}%)`}}>
          <h1 className="App-title">Color Picker</h1>
        </header>
        <section className="Main-Picker">
          <section className="Sliders">
              <h3> Hue </h3>
            <input type="range" min="0" max="360" onInput={this.updateColor} onChange={this.updateHue} value={this.state.hue}/>
              <h3> Saturation </h3>
            <input type="range" min="0" max="100" onInput={this.updateColor} onChange={this.updateSaturation} value={this.state.saturation}/>
              <h3> Lightness </h3>
            <input type="range" min="0" max="100" onInput={this.updateColor} onChange={this.updateLightness} value={this.state.lightness}/>
          </section>  
        </section>
        <section className="img_container">
        <section className="Extra-Stuff"></section>
        </section>
      </div>
    )
  }
}

export default App;

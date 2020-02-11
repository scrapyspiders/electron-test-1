import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import CustomizedSlider from './components/CustomizedSlider.js'
// import MyApp from './components/DownloadTest';
// import SliderLight from './components/SliderLight';
import CustomizedSliderCS from './components/CustomizedSliderCS.js'




class App extends Component {
  constructor() {
    super()
    this.state = {
      data:
        []
    }
  }

  render() {
    const state = this.state;

    return (
     
        <div className="background">
          <div className="App-header">
            <h2>Illumination Control</h2>
          </div>

            
            <div className="bars">
            {/* <MyApp /> */}
            {/* <SliderLight /> */}
            {/* <CustomizedSlider /> */}
            <CustomizedSliderCS />
            </div>
        </div>
    );
  }
}

export default App;
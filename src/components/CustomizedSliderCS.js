import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
// import shell from '../../src/electron.js'
// import { shell } from 'electron'
const { shell } = window.require('electron')

export default class CustomizedSliderCS extends React.Component {

  makeBeep = () => {
      shell.beep()
      shell.openItem('c:\\Users\\danie\\Desktop\\example.txt');

  }

  // sayHi = () => {
  //   console.log(electronFs.readFileSync('c:\\Users\\danie\\Desktop\\example.txt', 'utf8').split('\n'));
  // }

  render() {

    return (
      <div className="Sliders">
        <p id="auth-button">open window</p>
        <Button id="auth-button" onClick={this.makeBeep} variant="contained" color="primary" size="small">
          Save
      </Button>


      </div>
    );
  }
}
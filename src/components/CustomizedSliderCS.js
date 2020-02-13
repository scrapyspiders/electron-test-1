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
const fs = window.require('fs');
// const remote = require('remote');
// const dialog = remote.require('dialog');

// const { path } = window.require('path')


export default class CustomizedSliderCS extends React.Component {



  makeBeep = () => {
      shell.beep();
      shell.openItem('c:\\Users\\danie\\Desktop\\example.txt');

  }

  render() {

    return (
      <div className="Sliders">
        <Button id="auth-button" onClick={this.makeBeep} variant="contained" color="primary" size="small">
          Write a txt file and save on desktop
      </Button>
      </div>
    );
  }
}
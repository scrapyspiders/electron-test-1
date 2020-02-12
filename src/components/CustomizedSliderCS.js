import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
// import shell from '../../src/electron.js'


export default class CustomizedSliderCS extends React.Component {

  // makeBeep = () => {
  //     shell.beep()
  // }


  render() {


    return (
      <div className="Sliders">

        <Button onClick={this.makeBeep} variant="contained" color="primary" size="small">
        Save
      </Button>


      </div>
    );
  }
}
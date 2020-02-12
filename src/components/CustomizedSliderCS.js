import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
// import shell from '../../src/electron.js'
// import { shell } from 'electron'



export default class CustomizedSliderCS extends React.Component {



  render() {


    return (
      <div className="Sliders">

      <Button onClick={this.downloadTxtFile} variant="contained" color="primary" size="small">
          Open file
      </Button>

      </div>
    );
  }
}
import React from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
const { shell } = window.require("electron");
const remote = window.require("electron").remote;
const app = remote.app;
const fs = window.require("fs");

const useStyles = makeStyles(theme => ({
  root: {
    width: 500 + theme.spacing(3) * 2
  },
  margin: {
    height: theme.spacing(3)
  }
}));

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired
};

const iOSBoxShadow =
  "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";

const IOSSlider = withStyles({
  root: {
    color: "#3880ff",
    height: 2,
    padding: "15px 0"
  },
  thumb: {
    height: 28,
    width: 28,
    backgroundColor: "#fff",
    boxShadow: iOSBoxShadow,
    marginTop: -14,
    marginLeft: -14,
    "&:focus,&:hover,&$active": {
      boxShadow:
        "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: iOSBoxShadow
      }
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 11px)",
    top: -22,
    "& *": {
      background: "transparent",
      color: "#000"
    }
  },
  track: {
    height: 2
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: "#bfbfbf"
  },
  mark: {
    backgroundColor: "#bfbfbf",
    height: 8,
    width: 1,
    marginTop: -3
  },
  markActive: {
    opacity: 1,
    backgroundColor: "currentColor"
  }
})(Slider);

export default class CustomizedSliderCS extends React.Component {
  constructor() {
    super()
    this.state = {
      slider1: "30",
      slider2: "30",
      slider3: "30",
      light: true
    };
  }

  handleChange = (slider, value) => {
    const newState = {};
    newState[slider] = value;
    this.setState(newState);
  };

  handleSliderChange = (event, newValue) => {
    console.log("hello");
  };

  downloadTxtFile = () => {
    const data =
      "COM=COM8" +
      "\n" +
      "GRP1:3" +
      "\n" +
      "GRP2:1,2" +
      "\n" +
      "GRP3:4,5,6" +
      "\n" +
      "GRP1=" + this.state.slider1.toString() +
      "\n" +
      "GRP2=" + this.state.slider2.toString() +
      "\n" +
      "GRP2=" + this.state.slider3.toString();

    let action = async () => {
      await fs.writeFileSync(app.getPath("desktop") + "/newfolder/led-lights/params.txt", data, "utf8");
      await shell.openItem('c:/Users/danie/Desktop/newfolder/led-lights/params.txt');

    };
    action();

    // fs.writeFileSync(app.getPath("desktop") + "/newfolder/myFile.txt", data, "utf8");
    // shell.openItem('c:\\Users\\danie\\Desktop\\newfolder\\myFile.txt');
  };

  sliderValue1 = e => {
    this.setState({
      slider1: e.target.innerText
    });
    console.log(e);
  };

  sliderValue2 = e => {
    this.setState({
      slider2: e.target.innerText
    });
    console.log(e);
  };

  sliderValue3 = e => {
    console.log(e.target)
    this.setState({
      slider3: e.target.innerText
    });
    console.log(e);
  };

  lightsOff = () => {
    let currentState = { ...this.state }
    let prevSlider1 = currentState["slider1"]
    let prevSlider2 = currentState["slider2"]
    let prevSlider3 = currentState["slider3"]
    
    localStorage.setItem('slider1', prevSlider1);
    localStorage.setItem('slider2', prevSlider2);
    localStorage.setItem('slider3', prevSlider3);

    this.setState({
      slider1: "0",
      slider2: "0",
      slider3: "0",
      light: false
    }, () => {
      this.downloadTxtFile()
    })
  };

  lightOn = () => {
    this.setState({
      slider1: localStorage.slider1,
      slider2: localStorage.slider2,
      slider3: localStorage.slider3,
      light: true
    }, () => {
      this.downloadTxtFile()
    })
  };


  render() {
    return (
      <div className="Sliders">
        <div className="slider1">
          <p>LED 1</p>
          <IOSSlider
            // disabled={(this.state.mute == true) ? true : false}
            style={{ width: "50%", marginTop: 15 }}
            aria-label="ios slider"
            onChange={this.sliderValue1}
            defaultValue={this.state.slider1}
            marks={[{ value: 30 }, { value: 50 }, { value: 70 }]}
            valueLabelDisplay="on"
          />
          <Input
            title="1"
            ref={ref => this.myTextInput = ref}
            style={{ marginLeft: 50, width: 60 }}
            value={this.state.slider1}
            margin="dense"
            onChange={this.handleInputChange}
            onBlur={this.handleInputChange}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: "number",
              "aria-labelledby": "input-slider"
            }}
          />
        </div>

        <br></br>
        <br></br>

        <div className="slider2">
          <p>LED 2</p>
          <IOSSlider
            // disabled={(this.state.mute == true) ? true : false}
            style={{ width: "50%", marginTop: 15 }}
            aria-label="ios slider"
            onChange={this.sliderValue2}
            defaultValue={this.state.slider2}
            marks={[{ value: 30 }, { value: 50 }, { value: 70 }]}
            valueLabelDisplay="on"
          />
          <Input
            title="2"
            style={{ marginLeft: 50, width: 60 }}
            value={this.state.slider2}
            margin="dense"
            onChange={this.handleInputChange}
            onBlur={this.handleInputChange}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: "number",
              "aria-labelledby": "input-slider"
            }}
          />
        </div>

        <br></br>
        <br></br>
        <p>LED 3</p>
        <IOSSlider
          // disabled={(this.state.mute == true) ? true : false}
          id="3"
          style={{ width: "50%", marginTop: 15 }}
          aria-label="ios slider"
          onChange={this.sliderValue3}
          defaultValue={this.state.slider3}
          marks={[{ value: 30 }, { value: 50 }, { value: 70 }]}
          valueLabelDisplay="on"
        />

        <Input
          title="3"
          style={{ marginLeft: 50, width: 60 }}
          value={this.state.slider3}
          margin="dense"
          onChange={this.handleInputChange}
          onBlur={this.handleInputChange}
          inputProps={{
            step: 10,
            min: 0,
            max: 100,
            type: "number",
            "aria-labelledby": "input-slider"
          }}
        />
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <Button
          id="auth-button"
          onClick={this.downloadTxtFile}
          variant="contained"
          color="primary"
          size="small"
        >
          set the lights to values
        </Button>
        <Button style={{ marginLeft: 55, backgroundColor: "red",  display: !this.state.light ? 'none' : ''}}
          id="auth-button"
          onClick={this.lightsOff}
          variant="contained"
          color="primary"
          size="small"
        >
          turn lights off
        </Button>

        <Button style={{ marginLeft: 55, backgroundColor: "green",  display: !this.state.light ? '' : 'none' }}
        
          id="auth-button"
          onClick={this.lightOn}
          variant="contained"
          color="primary"
          size="small"
        >
          turn lights on 
        </Button>

      </div>


    );
  }
}

import React from 'react';
import '../css/App.css';
import background from '../gnight.gif';
import Timer from './Timer';
import TimerInput from './TimerInput';
import StartButton from './StartButton';
import StopButton from './StopButton';
import Grid from '@material-ui/core/Grid';
import { Parallax } from 'react-parallax';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      seconds: '00',
      minutes: '00',
      hours: '00',
      isDisabled: false,
      selectedColor: "red"
    }
	  this.chooseSound = (color) => this.setState({selectedColor: color});
	  this.playAudio = () => {
		switch(this.state.selectedColor){
			case "red":
				this.red.play();
			default:
				this.red.play();
									   }
	  }
    this.secondsRemaining = '0';
    this.intervalHandle = '0';
    this.handleHourChange = this.handleHourChange.bind(this);
    this.handleMinuteChange = this.handleMinuteChange.bind(this);
    this.startCountDown = this.startCountDown.bind(this);
    this.stopCountDown = this.stopCountDown.bind(this);
    this.tick = this.tick.bind(this);
  }
  handleHourChange(event) {
    this.setState({
      hours: event.target.value
    })
  }
  handleMinuteChange(event) {
    this.setState({
      minutes: event.target.value
    })
  }

  tick() {
    if (this.state.minutes === '') {

    } else {
      if (this.secondsRemaining >= 3600) {
        var hr = Math.floor(this.secondsRemaining/3600);
        var min = Math.floor((this.secondsRemaining - (hr*3600))/60);
        var sec = this.secondsRemaining - (min*60) - (hr*3600);
      } else {
        var hr = '00';
        var min = Math.floor(this.secondsRemaining/60);
        var sec = this.secondsRemaining - (min*60);
      }

      this.setState({
        hours: hr,
        minutes: min,
        seconds: sec,
      })
        if (hr < 10 && hr > 0) {
          this.setState({
            hours: "0" + this.state.hours,
          })
        }
        if (sec < 10) {
          this.setState({
            seconds: "0" + sec,
          })
        }
        if (min < 10) {
          this.setState({
            minutes: "0" + min,
          })
        }
        if (min =='00' & sec == '00' && hr == '00') {
          clearInterval(this.intervalHandle);
          this.playAudio();
        }
        this.secondsRemaining--
    }
  }

  startCountDown() {
    if (this.state.minutes === '00' && this.state.hours==='00' && this.state.seconds==='00') {
      
    } else if (this.state.isDisabled) {

    } else {
      this.setState({
        isDisabled: true,
      })

      this.intervalHandle = setInterval(this.tick, 1000);

      let time = this.state.minutes;
      if (this.state.hours == '00') {
        this.secondsRemaining =  this.state.seconds+(time*60);
      } else {
        this.secondsRemaining =  this.state.seconds+(time*60)+(this.state.hours*3600);
      }
    }
  }

  stopCountDown() {
      this.setState({
        isDisabled: false,
      })
      clearInterval(this.intervalHandle);
  }

  render() {
    return (
      <div>
        <Parallax strength={200} bgImage={background} style={{height: 1000, position: 'relative'}}>
        <TimerInput hours={this.state.hours} minutes={this.state.minutes} handleMinuteChange={this.handleMinuteChange} handleHourChange={this.handleHourChange}/>
        <div style={{height: 100}}/>
        <Timer hours={this.state.hours} minutes={this.state.minutes} seconds = {this.state.seconds}/>
        <div style={{height:50}}/>
        <Grid container spacing={5}style={{justifyContent: 'center'}}>
            <Grid item>
              <StartButton startCountDown={this.startCountDown} minutes={this.state.minutes}/>
            </Grid>
            <Grid item>
              <StopButton stopCountDown={this.stopCountDown} minutes={this.state.minutes}/>
            </Grid>
          </Grid>
        </Parallax>
          <audio ref={(red) => { this.red = red; }} loop>
			      <source src="https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg" type="audio/ogg" >
			      </source>
		      </audio>
      </div>
    );
  }
}

export default App;

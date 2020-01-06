import React from 'react';
import ReactDOM from 'react-dom';

const {render} = ReactDOM;
const {Component, PureComponent} = React;

class Audio extends React.Component {
  constructor(props) {
    super(props);
  	this.state={ selectedColor: "green"}
	this.chooseSound = (color) => this.setState({selectedColor: color});
	this.playAudio = () => {
		switch(this.state.selectedColor){
			case "green":
				this.green.play();
			case "blue":
				this.blue.play();
			case "pink":
				this.pink.play();
			case "yellow":
				this.yellow.play();
			default:
				this.green.play();
									   }
	}
	  
  }
  render() {
    return (
      <div className="stage">
		<audio ref={(green) => { this.green = green; }}>
			<source src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3" type="audio/mpeg" >
			</source>
		</audio>
		<audio ref={(blue) => { this.blue = blue; }}>
			<source src="https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"type="audio/mpeg" >
			</source>
		</audio>
		<audio ref={(pink) => { this.pink = pink; }}>
			<source src="https://s3.amazonaws.com/freecodecamp/simonSound3.mp3" type="audio/mpeg" >
			</source>
		</audio>
		<audio ref={(yellow) => { this.yellow = yellow; }}>
			<source src="https://s3.amazonaws.com/freecodecamp/simonSound4.mp3" type="audio/mpeg" >
			</source>
		</audio>
		
			<button className="btn btn-info" onClick={this.playAudio}>test sound</button>
			<RadioButtons selectedColor={this.state.selectedColor} chooseSound={this.chooseSound}/>
      </div>
    );
  }
}

const RadioButtons = ({selectedColor, chooseSound}) => <form>
    <div className="radio">
      <label>
        <input type="radio" value="green" 
                      checked={selectedColor === 'green'} 
                      onChange={() => chooseSound('green')} />
        green
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="yellow" 
                      checked={selectedColor === 'yellow'} 
                      onChange={() => chooseSound("yellow")} />
        yellow
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="pink" 
                      checked={selectedColor === 'pink'} 
                      onChange={() => chooseSound("pink")} />
        pink
      </label>
    </div>
	<div className="radio">
      <label>
        <input type="radio" value="blue" 
                      checked={selectedColor === 'blue'} 
                      onChange={() => chooseSound("blue")} />
        blue
      </label>
    </div>
  </form>



export default Audio;
import React from 'react';
import '../css/StartButton.css';
import Button from '@material-ui/core/Button';

class StartButton extends React.Component {
    render() {
        return (
            <div style={{}}>
                <Button variant="contained" color="secondary" onClick={this.props.startCountDown}>Start</Button>
            </div>
        );
    }
}

export default StartButton;

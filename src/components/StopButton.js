import React from 'react';
import '../css/StartButton.css';
import Button from '@material-ui/core/Button';

class StopButton extends React.Component {
    render() {
        return (
            <div style={{}}>
                <Button variant="contained" color="secondary" onClick={this.props.stopCountDown}>Stop</Button>
            </div>
        );
    }
}

export default StopButton;
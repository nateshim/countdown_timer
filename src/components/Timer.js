import React from 'react';
import '../css/Timer.css';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

class Timer extends React.Component {
    render() {
        return (
            <div>
                <Box color="black">
                    <Typography variant="h1" style={{textAlign: 'center', fontSize: 200}}>
                    {this.props.hours}:{this.props.minutes}:{this.props.seconds}
                    </Typography>
                </Box>
            </div>
        );
    }
}

export default Timer;

import React from 'react';
import '../css/TimerInput.css';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';


const hrs = [
    {
        value: '00',
        label: '0',
    },
    {
        value: '01',
        label: '1',
    },
    {
        value:'02',
        label:'2',
    },
    {
        value: '03',
        label: '3',
    },
    {
        value: '04',
        label: '4',
    },
    {
        value:'05',
        label:'5',
    },
    {
        value: '06',
        label: '6',
    },
    {
        value: '07',
        label: '7',
    },
    {
        value:'08',
        label:'8',
    },
    {
        value: '09',
        label: '9',
    },
    {
        value: '10',
        label: '10',
    },
    {
        value:'11',
        label:'11',
    },
    {
        value:'12',
        label:'12',
    }
]
const mins = [
    {
        value: '00',
        label: '0',
    },
    {
        value: '01',
        label: '1',
    },
    {
        value:'02',
        label:'2',
    },
    {
        value: '03',
        label: '3',
    },
    {
        value: '04',
        label: '4',
    },
    {
        value:'05',
        label:'5',
    },
    {
        value: '06',
        label: '6',
    },
    {
        value: '07',
        label: '7',
    },
    {
        value:'08',
        label:'8',
    },
    {
        value: '09',
        label: '9',
    },
    {
        value: '10',
        label: '10',
    },
    {
        value:'11',
        label:'11',
    },
    {
        value:'12',
        label:'12',
    },
    {
        value:'13',
        label:'13',
    },
    {
      value:'14',
      label:'14',  
    },
    {
        value:'15',
        label:'15',
    },
    {
        value:'16',
        label:'16',
    },
    {
        value:'17',
        label:'17',
    },
    {
      value:'18',
      label:'18',  
    },
    {
        value:'19',
        label:'19',
    },
    {
        value:'20',
        label:'20',
    },
    {
        value:'21',
        label:'21',
    },
    {
      value:'22',
      label:'22',  
    },
    {
        value:'23',
        label:'23',
    },
    {
        value:'24',
        label:'24',
    },
    {
        value:'25',
        label:'25',  
    },
    {
        value:'26',
        label:'26',
    },
    {
        value:'27',
        label:'27',
    },
    {
      value:'28',
      label:'28',  
    },
    {
        value:'29',
        label:'29',
    },
    {
        value:'30',
        label:'30',
    },
    {
        value:'31',
        label:'31',  
    },
    {
        value:'32',
        label:'32',
    },
    {
        value:'33',
        label:'33',
    },
    {
        value:'34',
        label:'34',  
    },
    {
        value: '35',
        label: '35',
    },
    {
        value:'36',
        label:'36',
    },
    {
        value:'37',
        label:'37',  
    },
    {
        value:'38',
        label:'38',
    },
    {
        value:'39',
        label:'39',
    },
    {
        value:'40',
        label:'40',  
    },
    {
        value:'41',
        label:'41',  
    },
    {
        value:'42',
        label:'42',
    },
    {
        value:'43',
        label:'43',
    },
    {
        value:'44',
        label:'44',  
    },
    {
        value: '45',
        label: '45',
    },
    {
        value:'46',
        label:'46',
    },
    {
        value:'47',
        label:'47',  
    },
    {
        value:'48',
        label:'48',
    },
    {
        value:'49',
        label:'49',
    },
    {
        value:'50',
        label:'50',
    },
    {
        value:'51',
        label:'51',  
    },
    {
        value:'52',
        label:'52',
    },
    {
        value:'53',
        label:'53',
    },
    {
        value:'54',
        label:'54',  
    },
    {
        value: '55',
        label: '55',
    },
    {
        value:'56',
        label:'56',
    },
    {
        value:'57',
        label:'57',  
    },
    {
        value:'58',
        label:'58',
    },
    {
        value:'59',
        label:'59',
    },
    
]
class TimerInput extends React.Component {
    render() {
        return (
            <Container style={{justifyContent: 'center'}}>
                <Typography variant="h2" bold style={{textAlign: 'center', fontFamily: 'Gill Sans'}}>Nap Countdown Timer</Typography>
                <div style={{height: 150}}/>
                <form noValidate autoComplete="off">
                    <Grid container spacing={3} style={{justifyContent: 'center'}}>
                        <Grid item>
                            <TextField color="secondary" type="number" onChange={this.props.handleHourChange} select helperText="Hours" style={{height:100, width: 50}}>
                            {hrs.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                            </TextField>
                        </Grid>
                        <Grid item>
                            <TextField color="secondary" type="number" minutes={this.props.minutes} onChange={this.props.handleMinuteChange} select helperText="Minutes" style={{height: 100, width: 50}}>
                            {mins.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        );
    }
}

export default TimerInput;

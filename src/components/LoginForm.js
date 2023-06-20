
import * as React from 'react';

import { Grid, Paper } from "@mui/material"
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';



const LoginForm = () => {

    const [checked, setChecked] = React.useState(true);
      const handleChange = (event) => {
    setChecked(event.target.checked);
  };

    const paperStyle={padding :20 , height :'70vh' , width:260 , margin: '20px auto '}
    const avatarStyle={backgroundColor:'#FFE600'}
    const btnstyle={margin:'8px 0' , backgroundColor:'#2E2E38'}
  return (
    <Grid>
        <Paper elevation={10} style={paperStyle}>

            <Grid align='center'>
            <Avatar style={avatarStyle}> 
             <LockOutlinedIcon />   
            </Avatar>

             <h2>Sign In</h2>
            </Grid>
            <TextField label ='Username' placeholder="Enter username" fullWidth required/>
            <TextField label ='Password' placeholder="Enter Password" type="password"fullWidth required/>

            <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}/>
            Remember me


            <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>

            <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="#" >
                        Sign Up 
                </Link>
                </Typography>




        </Paper>
    </Grid>
  )
}

export default LoginForm

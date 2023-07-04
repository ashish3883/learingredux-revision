import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import { FileDownload } from "@mui/icons-material";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { loginFailed, loginSuccess, requestLogin } from '../redux/action';
import { connect } from 'react-redux'; 
import Snackbar from '@mui/material/Snackbar';


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

function SignIn(props) {
  console.log(props.login)
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    props.requestLogin();
    setTimeout(()=>{
      if(data.get("password")==="Ashish@123"){
        props.loginSuccess({email: data.get('email')})
      }
      else{
        props.loginFailed({email: data.get('email')})
      }
    }, 4000)
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <FileDownload />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button 
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {props.login.loginLoader? 'Loading...': "Sign In"}
            </Button>
            <Snackbar
              open={!!props?.login?.errorMsg || !!props?.login?.successMsg}
              autoHideDuration={6000}
              message={ props?.login?.errorMsg || props?.login?.successMsg }
            />
        </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}


function mapStateToProps(state){
  console.log("State ==>" , state)
 return{
    login:state,
  }
};

const actionCreators = {
  loginFailed,
  loginSuccess,
  requestLogin,
};

export default connect(mapStateToProps, actionCreators)(SignIn)
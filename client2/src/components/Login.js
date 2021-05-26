import React, { useRef, useState } from 'react'
//import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from 'react-router-dom';

import LoginHeading from './Header';

//Material UI imports 

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



   {/* 
* Used template of copyright blurb from material UI templates and MUI CSS. Lines 33-65.
* @author oliviertassinari
* @author eps1lon
* @see https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/sign-in
* @see https://material-ui.com/getting-started/templates/
*
**/}

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="#">
          WeCycle
        </Link>{'.com '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  //Styling for MUI
const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(16),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: 'Green'
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
      color: 'Green'
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      background: 'Green'
    },
    forgot: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }
  }));



export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const classes = useStyles();

    function clickSignup() {
        history.push("/signup");
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            history.push("/");
        } catch {
            setError("Failed to log in");
        }

        setLoading(false);
    }

       {/* 
* Used Template of a page with textfields to make our Log in page. Lines 94-157
* @author oliviertassinari
* @author eps1lon
* @see https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/sign-in
* @see https://material-ui.com/getting-started/templates/
*
**/}
    return (

    <Container component="main" maxWidth="xs">
    <LoginHeading />
    <CssBaseline />
    <div className={classes.paper}>
    <Typography 
    component="h1" 
    variant="h5">
        Log in
    </Typography>
    <form className={classes.form} noValidate onSubmit={handleSubmit}> 
        <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        inputRef={emailRef}
        />
        <TextField
       
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        inputRef={passwordRef}
        />
        <FormControlLabel
        className={classes.coloring}
        control={<Checkbox value="remember" color="default"  />}
        label="Remember me"
        />
        <Button
        type="submit"
        fullWidth
        variant="contained"
        className={classes.submit}
        onClick={handleSubmit}
        >
        Log In
        </Button>
        <Grid>
        <Grid item className={classes.forgot}>
            <Link href="/Signup" variant="body2">
            {"Don't have an account? Click here to sign up!"}
            </Link>
        </Grid>
        </Grid>
    </form>
    </div>
    <Box mt={8}>
    <Copyright />
    </Box>
    </Container>

    )
}

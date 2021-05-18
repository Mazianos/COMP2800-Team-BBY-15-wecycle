import React, { useRef, useState } from 'react'
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from 'react-router-dom';
import $ from 'jquery';

//Material UI imports
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
 import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


//Copyright box at bottom
function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          WeCycle
        </Link>{'.com '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      marginTop: theme.spacing(3),
      margin: theme.spacing(1, 0, 2),
    }

  }));

export default function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const nameRef = useRef();
    const postalRef = useRef();
    const { signup } = useAuth();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const { currentUser } = useAuth();
    const classes = useStyles();

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(postalRef.current.value);
        
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords don\'t match');
        }
        try {
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            await login(emailRef.current.value, passwordRef.current.value);
            console.log(currentUser.uid, emailRef.current.value);

            let myData = {
                name: nameRef.current.value,
                address: postalRef.current.value,
                contactNum: "testNum",
                id: currentUser.uid,
                email: emailRef.current.value
            }
            
            console.log(myData);
            $.ajax({
                url: "/create-user",
                data: myData,
                dataType: "json",
                type: "POST",
                success: function(data) {
                    console.log("Success: ", data);
                    console.log(currentUser.uid)
                    
                    history.push("/");
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log("Error: ajax not sent", jqXHR, textStatus, errorThrown);
                },
            });

        } catch {
            setError("Failed to create an account");
        }

        setLoading(false);
    }
    // return (
    //     <>
    //       <Card>
    //           <Card.Body>
    //               <h2 className="text-center mb-4">Sign up!</h2>
    //               {error && <Alert variant="danger">{error}</Alert>}
    //               <Form onSubmit={handleSubmit}>
    //                   <Form.Group id="email">
    //                       <Form.Label>Email</Form.Label>
    //                       <Form.Control type="email" ref={emailRef} required/>
    //                   </Form.Group>
    //                   <Form.Group id="password">
    //                       <Form.Label>Password</Form.Label>
    //                       <Form.Control type="password" ref={passwordRef} required/>
    //                   </Form.Group>
    //                   <Form.Group id="password-confirm">
    //                       <Form.Label>Password Confirmation</Form.Label>
    //                       <Form.Control type="password" ref={passwordConfirmRef} required/>
    //                   </Form.Group>
    //                   <Form.Group id="full-name">
    //                       <Form.Label>Full Name</Form.Label>
    //                       <Form.Control type="name" ref={nameRef} required/>
    //                   </Form.Group>
    //                   <Form.Group id="postal">
    //                       <Form.Label>Postal Code</Form.Label>
    //                       <Form.Control type="postalCode" ref={postalRef} required/>
    //                   </Form.Group>
    //                   <Button disabled={loading} className="w-100" type="submit">Sign Up</Button>
    //               </Form>
    //           </Card.Body>
    //       </Card>
    //       <Copyright/>
    //       <div className="w-100 text-center mt-2">
    //           Lets make a stand, together.
    //       </div>
    //    </>

    
    return (
        
        <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
         
          <form className={classes.form} noValidate 
          onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="off"
                  name="fullName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="Full Name"
                  autoFocus
                  inputRef={nameRef}
                />
              </Grid>
           
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  inputRef={emailRef}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  inputRef={passwordRef}
                 
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="current-password"
                  inputRef={passwordConfirmRef}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="postalCode"
                  label="Postal Code"
                  type="postalCode"
                  id="postalCode"
                  inputRef={postalRef}
                />
              </Grid>
            </Grid>
            <Grid>
            <Button 
             
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
              disabled={loading}>
              Sign Up
            </Button>
            </Grid>
            <Grid container justify="center">
              <Grid item>
                <Link href="/login" variant="body1" align="center">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    )
}

import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";

//Material UI imports
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import SignupHeading from "./Header";

/*
 * Used template of copyright blurb from material UI templates and MUI CSS. Lines 26-55.
 * @author oliviertassinari
 * @author eps1lon
 * @see https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/sign-in
 * @see https://material-ui.com/getting-started/templates/
 *
 **/
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="">
        WeCycle
      </Link>
      {".com "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(16),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    marginTop: theme.spacing(3),
    margin: theme.spacing(1, 0, 2),
    color: "white",
    backgroundColor: "#4f772d",
    "&:hover": {
      backgroundColor: "#31572C",
    },
  },
}));

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const nameRef = useRef();
  const postalRef = useRef();
  const { signup } = useAuth();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const classes = useStyles();
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(postalRef.current.value);

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords don't match");
    } else if (
      passwordRef.current.value.length < 6 ||
      passwordConfirmRef.current.value.length < 6
    ) {
      return setError("Password needs atleast 6 characters");
    } else if (!nameRef.current.value) {
      return setError("Missing name");
    } else if (!postalRef.current.value) {
      return setError("Missing postal code");
    } else if (!emailRef.current.value.includes("@") || !emailRef.current.value) {
      return setError("Email doesn't fit the @ form");
    }
    try {
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      setError("Successfully signed up! Redirecting...");
      setTimeout(function () {
        history.push("/");
      }, 2000);
    } catch (error) {
      setError("Unable to sign up");
    }

    setLoading(false);
  }

  /**
   * Used Template of a page with textfields to make our post Sign up page. Lines 124-217.
   * 
   * @author oliviertassinari
   * @author eps1lon
   * @see https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/sign-up/SignUp.js
   * @see https://material-ui.com/getting-started/templates/
   */
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <SignupHeading />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>

        <form className={classes.form} noValidate onSubmit={handleSubmit}>
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
            <Typography align="center">{error}</Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
              disabled={loading}
            >
              Sign Up
            </Button>
          </Grid>
          <Grid container justify="center">
            <Grid item>
              <Link href="/login" variant="body1" align="center">
                Already have an account? Log in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

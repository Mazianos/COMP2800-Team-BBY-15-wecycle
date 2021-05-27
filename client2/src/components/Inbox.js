import React, { useState, useEffect } from "react";
import Header from "./Header";
import {
  Paper,
  Button,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@material-ui/core";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const useStyles = makeStyles((theme) => ({
  main: {
    textAlign: "center",
  },
  button: {
    color: "white",
    backgroundColor: "#4f772d",
    "&:hover": {
      backgroundColor: "#31572C",
    },
    marginBottom: "3.0rem",
  },
  acceptedDonations: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "3.0rem",
    marginTop: "6.0rem",
  },
  completedDonations: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  icon: {
    float: "right",
    marginRight: "1.0rem",
    color: "#4f772d",
  },
  title: {
    fontSize: "1.5rem",
    color: "black",
  },
}));

export default function Inbox() {
  const { currentUser } = useAuth();
  // --> session handling by deault XYZ logged in.
  const [activeDonations, setActive] = useState([]); // Nested JSON objected with all data.
  const [completeDonations, setComplete] = useState([]);
  const history = useHistory();
  const classes = useStyles();
  const [msgActive, setMsgActive] = useState("");
  const [msgComplete, setMsgComplete] = useState("");

  useEffect(() => {
    fetch(`/generate-active-donations/${currentUser.uid}`)
      .then((res) => res.json())
      .then((result) => {
        console.log("active result: ", result);
        setActive(result);
        console.log(activeDonations);

        if (Object.keys(result).length === 0) {
          setMsgActive("Oops! You dont have any active donations!");
        }
      })
      .catch((err) => {
        console.log(err);
        setMsgActive("Couldn't fetch data");
      });
  }, []);

  useEffect(() => {
    fetch(`/generate-complete-donations/${currentUser.uid}`)
      .then((res) => res.json())
      .then((result) => {
        setComplete(result);
        console.log(completeDonations);

        if (Object.keys(result).length === 0) {
          setMsgComplete("Oops! You dont have any completed donations!");
        }
      })
      .catch((err) => {
        console.log(err);
        setMsgComplete("Couldn't fetch data");
      });
  }, []);

  return (
    <Container>
      <Header />
      <div className={classes.main}>
        <div className={classes.acceptedDonations}>
          Accepted Donations
          <Grid container spacing={1} justify="center">
            {activeDonations.map((donation) => (
              <Grid item key={donation._id} align="center" justify="center">
                <Card className={classes.root} variant="outlined">
                  <CardContent>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      {donation.title}
                    </Typography>
                    <Typography variant="h5" component="h2">
                      Total bottles: {donation.totalBottles}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      Contact number: {donation.contact}
                    </Typography>
                    <CardActions>
                      <Button
                        size="small"
                        variant="outlined"
                        color="primary"
                        align="center"
                        onClick={() =>
                          fetch(`/complete-donation`, {
                            method: "POST",
                            cache: "no-cache",
                            headers: {
                              "Content-Type": "application/json",
                            },
                            referrerPolicy: "no-referrer",
                            body: JSON.stringify({
                              _id: donation._id,
                            }),
                          })
                          .then(
                            setTimeout(() => {
                              window.location.reload();
                            }, 1000)
                          )
                        }
                      >
                        Finish
                      </Button>
                    </CardActions>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
        <div className={classes.completedDonations}>
          Completed Donations
          <Typography align="center">{msgComplete}</Typography>
          <Grid container spacing={1} justify="center">
            {(completeDonations || []).map((donation) => (
              <Grid item key={donation._id} align="center" justify="center">
                <Card className={classes.root} variant="outlined">
                  <CardContent>
                    <CheckCircleIcon className={classes.icon} />
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      {donation.title}
                    </Typography>
                    <Typography variant="h5" component="h2">
                      Total bottles: {donation.totalBottles}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
        <div style={{ marginTop: "13vh" }}>
          <Button
            variant="contained"
            className={classes.button}
            onClick={() => history.push("/donorPost")}
          >
            Your Donation
          </Button>
        </div>
      </div>
    </Container>
  );
}

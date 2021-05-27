import React, { useState, useEffect } from "react";
import Header from "./Header";
import {
  Paper,
  Button,
  List,
  ListItem,
  ListItemText,
  Container,
  Typography,
} from "@material-ui/core";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

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
      console.log("complete result: ", result);
      setComplete(result);
      console.log(completeDonations);

      if (Object.keys(result).length === 0) {
        setMsgComplete("Oops! You dont have any complete donations!");
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
          <Typography align="center">{msgActive}</Typography>
          <List>
            {activeDonations.map((donation) => (
              <Paper>
                <ListItem key={donation._id}>
                  <ListItemText primary={donation.title} />
                    Contact Number: {donation.contact}
                    <br />
                    Total Bottles: {donation.totalBottles}
                    <br />
                  <Button onClick={() => fetch(`/complete-donation`, {
                    method: 'POST',
                    cache: 'no-cache',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    referrerPolicy: 'no-referrer',
                    body: JSON.stringify({
                      _id: donation._id
                    })
                  }).then(() => window.location.reload())}>Finish</Button>
                </ListItem>
              </Paper>
            ))}
          </List>
        </div>
        <div className={classes.completedDonations}>
          Completed Donations
          <Typography align="center">{msgComplete}</Typography>
          <List>
            {completeDonations.map((donation) => (
              <Paper>
              <ListItem key={donation._id}>
                <ListItemText primary={donation.title} />
                  Total Bottles: {donation.totalBottles}
              </ListItem>
              </Paper>
            ))}
          </List>
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

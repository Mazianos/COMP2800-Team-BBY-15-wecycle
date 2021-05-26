import React, { useState, useEffect } from 'react'
import Header from "./Header";
import { Paper, Button, List, ListItem, ListItemText, Container } from '@material-ui/core'
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    textAlign: "center",
  },
  button: {
    color: "white",
    backgroundColor: "#4f772d",
    '&:hover': {
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
  }
}));

export default function Inbox() {
  const { currentUser } = useAuth();
  // --> session handling by deault XYZ logged in. 
  const [activeDonations, setActive] = useState([]); // Nested JSON objected with all data.
  const [completeDonations, setComplete] = useState([]);
  const history = useHistory();
  const classes = useStyles();

  useEffect(() => {
    fetch(`/generate-active-donations/${currentUser.uid}`)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setActive(result);
          console.log(activeDonations);
        }
      );
  }, []);

  useEffect(() => {
    fetch(`/generate-complete-donations/${currentUser.uid}`)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setComplete(result);
          console.log(completeDonations);
        }
      );
  }, []);

  return (
    <Container>
      <Header />
      <div className={classes.main}>
        <div className = {classes.acceptedDonations}>
          Accepted Donations
                <List>
            {activeDonations.map((donation) => (
              <ListItem key={donation._id}>
                <ListItemText primary={donation.title} />
                <Paper>Name: {donation.authorName || "Missing name"}<br />Contact Number: {donation.contact}<br />Total Bottles: {donation.totalBottles}</Paper>
              </ListItem>
            ))}
          </List>
        </div>
        <div className = {classes.completedDonations}>
          Completed Donations
                <List>
            {completeDonations.map((donation) => (
              <ListItem key={donation}>
                <ListItemText primary={donation.title} />
                <Paper>Name: {donation.authorName || "Missing name"}<br />Total Bottles: {donation.totalBottles}</Paper>
              </ListItem>
            ))}
          </List>
        </div>
        <div style={{ marginTop: "13vh" }}>
          <Button variant="contained" className={classes.button} onClick={() => (history.push("/donorPost"))}>Your Donation</Button>
        </div>
      </div>

    </Container>
  )
}

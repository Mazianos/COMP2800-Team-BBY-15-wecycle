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

export default function Inbox() {
  const { currentUser } = useAuth();
  // --> session handling by deault XYZ logged in.
  const [activeDonations, setActive] = useState([]); // Nested JSON objected with all data.
  const [completeDonations, setComplete] = useState([]);
  const [msgActive, setMsgActive] = useState("");
  const [msgComplete, setMsgComplete] = useState("");
  const history = useHistory();

  useEffect(() => {
    fetch(`/generate-active-donations/${currentUser.uid}`)
      .then((res) => {
        if (res.ok) {
          res.json();
        } else {
          throw new Error("Couldn't fetch data");
        }
      })
      .then((result) => {
        console.log(result);
        setActive(result);
        console.log(activeDonations);

        if (Object.keys(result).length === 0) {
          setMsgActive("Oops! You dont have any active donations!")
        }
      })
      .catch((err) => {
        console.log(err);
        setMsgActive("Couldn't fetch data");
      });
  }, []);

  useEffect(() => {
    fetch(`/generate-complete-donations/${currentUser.uid}`)
      .then((res) => {
        if (res.ok) {
          res.json();
        } else {
          throw new Error("Couldn't fetch data");
        }
      })
      .then((result) => {
        console.log(result);
        setComplete(result);
        console.log(completeDonations);

        if (Object.keys(result).length === 0) {
          setMsgComplete("Oops! You dont have any completed donations!")
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
      <div style={{ marginTop: "13vh" }}>
        <Button variant="contained" onClick={() => history.push("/donorPost")}>
          Your Donation
        </Button>
      </div>
      <div>
        Accepted Donations
        <Typography align="center">{msgActive}</Typography>
        <List>
          {activeDonations.map((donation) => (
            <ListItem key={donation._id}>
              <ListItemText primary={donation.title} />
              <Paper>
                Name: {donation.authorName || "Missing name"}
                <br />
                Contact Number: {donation.contact}
                <br />
                Total Bottles: {donation.totalBottles}
              </Paper>
            </ListItem>
          ))}
        </List>
      </div>
      <div>
        Completed Donations
        <Typography align="center">{msgComplete}</Typography>
        <List>
          {completeDonations.map((donation) => (
            <ListItem key={donation}>
              <ListItemText primary={donation.title} />
              <Paper>
                Name: {donation.authorName || "Missing name"}
                <br />
                Total Bottles: {donation.totalBottles}
              </Paper>
            </ListItem>
          ))}
        </List>
      </div>
    </Container>
  );
}

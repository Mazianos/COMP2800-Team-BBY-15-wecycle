import React, { useState, useEffect } from 'react'
import Header from "./Header";
import { Paper, Button, List, ListItem, ListItemText, Container } from '@material-ui/core'
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from 'react-router-dom';


export default function Inbox() {
    const { currentUser } = useAuth();
    // --> session handling by deault XYZ logged in. 
    const [activeDonations, setActive] = useState([]); // Nested JSON objected with all data.
    const [completeDonations, setComplete] = useState([]);
    const history = useHistory();

    useEffect( () => {
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

      useEffect( () => {
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
            <div style={{ marginTop: "13vh" }}>
                <Button variant="contained" onClick={() => (history.push("/donorPost"))}>Your Donation</Button>
            </div>
            <div>
                Accepted Donations
                <List>
                    {activeDonations.map((donation) => (
                        <ListItem key={donation._id}>
                            <ListItemText primary={donation.title}/>
                            <Paper>Name: {donation.authorName || "missing name"}<br/>Contact Number: {donation.contact}<br/>Total Bottles: {donation.totalBottles}</Paper>
                        </ListItem>
                        ))}
                </List>
            </div>
            <div>
                Completed Donations
                <List>
                {completeDonations.map((donation) => (
                    <ListItem key={donation}>
                        <ListItemText primary={donation.title}/>
                        <Paper>Name: {donation.authorName}<br/>Total Bottles: {donation.totalBottles}</Paper>
                    </ListItem>
                ))}
                </List>
            </div>
        </Container>
    )
}

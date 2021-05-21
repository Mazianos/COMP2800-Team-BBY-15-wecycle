import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Header from "./Header";
import { Paper, Button, List, ListItem, ListItemText } from '@material-ui/core'
import { useAuth } from "../contexts/AuthContext";


export default function Inbox() {
    const { currentUser } = useAuth();
    // --> session handling by deault XYZ logged in. 
    const [activeDonations, setActive] = useState([]); // Nested JSON objected with all data.
    const [completeDonations, setComplete] = useState([]);

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
        <>
            <Header />
            <div style={{ marginTop: "13vh" }}>
                Your Donation
                <Paper elevation={0} variant="outlined">
                    <Button variant="contained" ></Button>
                </Paper>
            </div>
            <div>
                Accepted Donations
                <List>
                    {activeDonations.map((donation) => (
                        <ListItem key={donation}>
                            <ListItemText primary={donation.title}/>
                            <Paper>Name: {donation.author.name}<br/>Contact Number: {donation.contact}<br/>Total Bottles: {donation.totalBottles}</Paper>
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
                        <Paper>Name: {donation.author.name}<br/>Total Bottles: {donation.totalBottles}</Paper>
                    </ListItem>
                ))}
                </List>
            </div>
        </>
    )
}

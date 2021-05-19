import React from 'react'
import Navbar from './Navbar'
import { Paper, Button, List, ListItem, ListItemText } from '@material-ui/core'
import { useAuth } from "../contexts/AuthContext";
import $ from 'jquery';

const { currentUser } = useAuth();

async function generateActive() {
    console.log(currentUser.uid);
    let condition = {
        author: currentUser.uid
    }
    await $.ajax({
        url: "/generate-active-donations",
        type: "POST",
        data: condition,
        dataType: "json",
        success: function(data) {
            console.log("Success: ", data);
            return data.map((donation) => (
                <ListItem key={donation.author}>
                    <ListItemText primary={donation.author}/>
                    <Paper>Contact Number: {donation.contactNumber}{/* <br/>Total Bottles: {donation.totalBottles} */}</Paper>
                </ListItem>)
            );

        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("Error:", jqXHR, textStatus, errorThrown);
        },
    })
    
    
}

export default function Inbox() {

    return (
        <>
            <Navbar/>
            <div>
                Your Donation
                <Paper elevation={0} variant="outlined">
                    <Button variant="contained" ></Button>
                </Paper>
            </div>
            <div>
                Accepted Donations
                <List>
                    {generateActive()}
                </List>
            </div>
            <div>
                Completed Donations
                <List>
                    
                </List>
            </div>
        </>
    )
}

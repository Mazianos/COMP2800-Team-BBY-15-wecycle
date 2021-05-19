import React from 'react'
import Navbar from './Navbar'
import { Paper, Button, List, ListItem, ListItemText } from '@material-ui/core'
import { useAuth } from "../contexts/AuthContext";
import $ from 'jquery';

// const

export default function Inbox() {
    const { currentUser } = useAuth();

    async function generateActive() {
        let active = null;
        let condition = {
            id: currentUser.uid
        }
        $.ajax({
            url: "/generate-active-donations",
            type: "GET",
            data: condition,
            dataType: "json",
            success: function(data) {
                console.log("Success: ", data);
                active = data.toArray();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("Error:", jqXHR, textStatus, errorThrown);
            },
        })
        console.log(active);
        
        return active.map((donation) => 
            React.cloneElement(
                <ListItem>
                    <ListItemText primary={donation.donorName}/>
                    <Paper>Contact Number: {donation.contactNumber}<br/>Total Bottles: {donation.totalBottles}</Paper>
                </ListItem>
            ),
        );
    }

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

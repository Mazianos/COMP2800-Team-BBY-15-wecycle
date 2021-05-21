import React, {useState, useRef, useEffect} from 'react';
import { useAuth } from "../contexts/AuthContext";
import {useHistory} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, FormControlLabel, Checkbox, Container} from '@material-ui/core';

import { CardMedia, Drawer, Button, List, Divider, ListItem, ListItemIcon, ListItemText, AppBar, IconButton, Toolbar, Typography, Collapse, TextField } from '@material-ui/core';

import AboutUsHeading from './Header';

const photo = [
    "https://dummyimage.com/600x400/000/fff",
];

const useStyles = makeStyles(() => ({
    topHeading: {
        fontFamily: 'Roboto',
        fontWeight: 'Bold',
        fontSize: '20px',
    },
    background: {
        marginTop: "100px",
        backgroundColor: "#EEF9F0",
    },
    overall: {
        textAlign: "center",
    },
    updatePhoto: {
        marginLeft: "15px",
    },
    firstTextfield: {
        width: "130%",
        marginTop: "4em",
    },
    secondTextfield: {
        width: "130%",
        marginTop: "4em",
    },
    thirdTextfield: {
        width: "130%",
        marginTop: "4em",
        marginBottom: "4em",
    },
    buttons: {
        marginBottom: "5em",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    return: {
        marginLeft: "5rem",
    },
    update: {
        marginRight: "5rem",
    },
    
}));

export default function DonorPost() {
    const classes = useStyles();
    const {currentUser} = useAuth();
    const [yourDonation, setDonation] = useState([]);
    const titleRef = useRef();
    const cityRef = useRef();
    const postalRef = useRef();
    const descRef = useRef();
    const contactRef = useRef();
    const bottleRef = useRef();
    const plasticRef = useRef();
    const otherRef = useRef();
    const aluminumRef = useRef();
    const glassRef = useRef();
    const history = useHistory();

    useEffect(() => {
        fetch(`/get-own-post/${currentUser.uid}`).then((res) => res.json())
        .then((result) => {
            setDonation(result);
            console.log(yourDonation);
        })
    }, []);

    async function handleUpdate() {
        let newData = {

        }

        // Default options are marked with *
        await fetch("/update-own-post", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }, // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(newData) // body data type must match "Content-Type" header
        }).then((res) => res.json()).then((result) => {

        }); // parses JSON response into native JavaScript objects
    }

    return (
        <div className={classes.background}>
            <AboutUsHeading />
            <div className={classes.overall}>
                {yourDonation.map((dono) => (
                    <div>
                    <div className={classes.topHeading}>
                        <p>Posting Date: {dono.postDate}</p>
                            <div className = {classes.postingDate}></div> {/* where posting date woud go into*/}
                        <p>Status: {dono.status}</p>
                            <div className = {classes.status}></div> {/*where status would go into*/}
                    </div>
                    {/* <div className={classes.image}>
                        <img src={dono.postImage} width={200} height={100} />
                        <Button variant="outlined" className={classes.updatePhoto}>Update Photo</Button>
                    </div> */}
                    </div>
                ))}
                <Container>
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="title"
                    label="Title"
                    name="Title"
                    autoFocus
                    inputRef={titleRef}
                    />

                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="City"
                    label="City/Neighbourhood"
                    name="City"
                    inputRef={cityRef}
                    />

                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="postalCode"
                    label="Postal Code"
                    name="Postal Code"
                    inputRef={postalRef}
                    />

                    <TextField
                    id="bottleTotal"
                    name="Bottles"
                    type="number"
                    label="Total bottles"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    inputRef={bottleRef}
                    />

                    <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox value="plastic" color="primary" inputRef={plasticRef} />}
                        label="Plastic"
                    />
                    <FormControlLabel
                        control={<Checkbox value="Glass" color="primary" inputRef={glassRef} />}
                        label="Glass"
                    />
                    <FormControlLabel
                        control={<Checkbox value="Aluminum" color="primary" inputRef={aluminumRef} />}
                        label="Aluminum"
                    />
                    <FormControlLabel
                        control={<Checkbox value="Other" color="primary" inputRef={otherRef} />}
                        label="Other"
                    />
                    </Grid>
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="description"
                    label="Description"
                    name="Description"
                    inputRef={descRef}
                    />
                    
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="postalCode"
                    label="Contact Info"
                    name="Contact Info"
                    inputRef={contactRef}
                    />
            </Container>
                <div className={classes.buttons}>
                    <Button variant="outlined" className={classes.return} onClick={history.push("/inbox")}>Return</Button>
                    <Button variant="outlined" className={classes.update} onClick={handleUpdate}>Update</Button>
                </div>
            </div>
        </div>

    )
}



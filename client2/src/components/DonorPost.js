import React, {useState, useRef, useEffect} from 'react';
import { useAuth } from "../contexts/AuthContext";
import {useHistory} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, FormControlLabel, Checkbox, Container} from '@material-ui/core';

import { CardMedia, Drawer, Button, List, Divider, ListItem, ListItemIcon, ListItemText, AppBar, IconButton, Toolbar, Typography, Collapse, TextField } from '@material-ui/core';

import AboutUsHeading from './Header';

// const photo = [
//     "https://dummyimage.com/600x400/000/fff",
// ];

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
    const [postIDState, setID] = useState("");
    const [authorName, setAuthorName] = useState("");

    useEffect(() => {
        fetch(`/get-own-post/${currentUser.uid}${authorName}`).then((res) => res.json())
        .then((result) => {
            setDonation(result);
            console.log("Your dono: " + yourDonation);
            setID(result._id);
            setAuthorName(result.authorName);
        })
    }, []);

    async function handleUpdate(e) {
        e.preventDefault();
        let newData = {
            _id: postIDState,
            author: {
                id: currentUser.uid,
                name: authorName
            },
            title: titleRef.current.value,
            postalCode: postalRef.current.value,
            type: {
                // plastic: plastic.checked,
                // glass: glass.checked,
                // aluminum: aluminum.checked,
                // other: other.checked,
            },
            totalBottles: bottleRef.current.value,  // number input for bottles. Sent to user Schema
            description: descRef.current.value,
            contact: contactRef.current.value,
            imageURL: null, //We will change this when we figure out image storing
            // postDate: dateRef.current.value
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

    function handleReturn(e) {
        e.preventDefault();
        history.push("/inbox");
    }

    return (
        <div className={classes.background}>
            <AboutUsHeading />
            <div className={classes.overall}>
                {yourDonation.map((dono) => 
                (<Container>
                    
                        <Container />
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
                
                
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="title"
                    label="Title"
                    value={dono.title}
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
                    value={dono.location}
                    name="City"
                    inputRef={cityRef}
                    />

                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="postalCode"
                    label="Postal Code"
                    value={dono.postalCode}
                    name="Postal Code"
                    inputRef={postalRef}
                    />

                    <TextField
                    id="bottleTotal"
                    name="Bottles"
                    type="number"
                    label="Total bottles"
                    value={dono.totalBottles}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    inputRef={bottleRef}
                    />

                    <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox value="plastic" color="primary" id="plastic" checked={dono.type.plastic}/>}
                        label="Plastic"
                    />
                    <FormControlLabel
                        control={<Checkbox value="Glass" color="primary" id="glass" checked={dono.type.glass}/>}
                        label="Glass"
                    />
                    <FormControlLabel
                        control={<Checkbox value="Aluminum" color="primary" id="aluminum" checked={dono.type.aluminum}/>}
                        label="Aluminum"
                    />
                    <FormControlLabel
                        control={<Checkbox value="Other" color="primary" id="other" checked={dono.type.other}/>}
                        label="Other"
                    />
                    </Grid>
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="description"
                    label="Description"
                    value={dono.description}
                    name="Description"
                    inputRef={descRef}
                    />
                    
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="contactInfo"
                    label="Contact Info"
                    value={dono.contact}
                    name="Contact Info"
                    inputRef={contactRef}
                    />
            </Container>
            ))}
                <div className={classes.buttons}>
                    <Button variant="outlined" className={classes.return} onClick={handleReturn}>Return</Button>
                    <Button variant="outlined" className={classes.update} onClick={handleUpdate}>Update</Button>
                </div>
            </div>
        </div>

    )
}



import React, {useState, useRef, useEffect} from 'react';
import { useAuth } from "../contexts/AuthContext";
import {useHistory} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, FormControlLabel, Checkbox, Container} from '@material-ui/core';

import { Button, TextField } from '@material-ui/core';

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
        fetch(`/get-own-post/${currentUser.uid}`).then((res) => res.json())
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
            authorID: currentUser.uid,
            authorName: authorName,
            title: titleRef.current.value,
            postalCode: postalRef.current.value,
            type: {
                plastic: plasticRef.current.checked,
                glass: glassRef.current.checked,
                aluminum: aluminumRef.current.checked,
                other: otherRef.current.checked,
            },
            totalBottles: bottleRef.current.value,  // number input for bottles. Sent to user Schema
            description: descRef.current.value,
            contact: contactRef.current.value,
            imageURL: null, //We will change this when we figure out image storing
        }
        
        await fetch("/update-own-post", {
            method: 'POST',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            },
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(newData)
        });
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
                
                
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="title"
                    label="Title"
                    defaultValue={dono.title}
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
                    defaultValue={dono.location}
                    name="City"
                    inputRef={cityRef}
                    />

                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="postalCode"
                    label="Postal Code"
                    defaultValue={dono.postalCode}
                    name="Postal Code"
                    inputRef={postalRef}
                    />

                    <TextField
                    id="bottleTotal"
                    name="Bottles"
                    type="number"
                    label="Total bottles"
                    defaultValue={dono.totalBottles}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    inputRef={bottleRef}
                    />

                    <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox value="plastic" color="primary" id="plastic" defaultChecked={dono.type.plastic} inputRef={plasticRef}/>}
                        label="Plastic"
                    />
                    <FormControlLabel
                        control={<Checkbox value="Glass" color="primary" id="glass" defaultChecked={dono.type.glass} inputRef={glassRef}/>}
                        label="Glass"
                    />
                    <FormControlLabel
                        control={<Checkbox value="Aluminum" color="primary" id="aluminum" defaultChecked={dono.type.aluminum} inputRef={aluminumRef}/>}
                        label="Aluminum"
                    />
                    <FormControlLabel
                        control={<Checkbox value="Other" color="primary" id="other" defaultChecked={dono.type.other} inputRef={otherRef}/>}
                        label="Other"
                    />
                    </Grid>
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="description"
                    label="Description"
                    defaultValue={dono.description}
                    name="Description"
                    inputRef={descRef}
                    />
                    
                    <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="contactInfo"
                    label="Contact Info"
                    defaultValue={dono.contact}
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



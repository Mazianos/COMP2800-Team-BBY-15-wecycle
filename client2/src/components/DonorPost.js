import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

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
        height: "300px",
        width: "130%",
        marginTop: "4em",
    },
    secondTextfield: {
        height: "80px",
        width: "130%",
        marginTop: "4em",
    },
    thirdTextfield: {
        height: "80px",
        width: "130%",
        marginTop: "4em",
        marginBottom: "4em",
    },
    buttons: {
        marginBottom: "4em",
        flexDirection: "row",
    },
    
}));

export default function DonorPost() {
    const classes = useStyles();

    return (
        <div className={classes.background}>
            <AboutUsHeading />
            <div className={classes.overall}>
                <div className={classes.topHeading}>
                    <p>Posting Date: </p>
                    <p>Status: </p>
                </div>
                <div className={classes.claimNotification}>

                </div>
                <div className={classes.image}>
                    <img src="https://dummyimage.com/600x400/000/fff" width={200} height={100} />
                    <Button variant="outlined" className={classes.updatePhoto}>Update Photo</Button>
                </div>
                <div className={classes.textFieldOne}>
                    <TextField
                        id="text-field-one"
                        label=""
                        placeholder="Description (type, city, etc..)"
                        variant="outlined"
                        InputProps = {{
                            className: classes.firstTextfield
                        }}
                    />
                </div>
                <div className={classes.textFieldTwo}>
                    <TextField
                        id="text-field-two"
                        label=""
                        placeholder="Contact info."
                        variant="outlined"
                        size="small"
                        width="5"
                        columns = "15"
                        multiline={true}
                        InputProps = {{
                            className: classes.secondTextfield
                        }}
                    />
                </div>
                <div className={classes.textFieldThree}>
                    <TextField
                        id="text-field-two"
                        label=""
                        placeholder="General location"
                        variant="outlined"
                        size="small"
                        width="5"
                        columns = "15"
                        multiline={true}
                        InputProps = {{
                            className: classes.thirdTextfield
                        }}
                    />
                </div>
                <div className={classes.buttons}>
                    <Button variant="outlined" className={classes.return}>Return</Button>
                    <Button variant="outlined" className={classes.update}>Update</Button>
                </div>
            </div>
        </div>

    )
}



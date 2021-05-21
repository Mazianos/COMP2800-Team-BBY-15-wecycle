import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Button, List, Divider, ListItem, ListItemIcon, ListItemText, AppBar, IconButton, Toolbar, Typography, Collapse } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import clsx from 'clsx';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import LockOpenIcon from '@material-ui/icons/LockOpen'; // log in
import ExitToAppIcon from '@material-ui/icons/ExitToApp'; // sign out
import AccountCircleIcon from '@material-ui/icons/AccountCircle'; //user profile?
import GroupIcon from '@material-ui/icons/Group'; // team 

import AccountBoxIcon from '@material-ui/icons/AccountBox';
import wecycle from '../images/wecycle_logo.PNG';

const useStyles = makeStyles((theme) => ({
    main: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        /*height: "100vh",*/
        fontFamily: "Roboto",
    },
    navbar: {
        backgroundColor: "white",
    },
    navbarContent: {
        width: "100%",
        margin: "0 auto",
    },
    navbarTitle: {
        fontSize: "2rem",
        flexGrow: '2',
    },
    icon: {
        color: 'black',
        fontSize: "2rem",
    },
    colorText: {
        color: "#5AFF3D",
    },
    container: {
        textAlign: "center",
    },
    title: {
        color: "#fff",
        fontSize: "2.5rem",
    },
    list: { //NEW
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    wecycleLogo: {
        width: "115px",
        height: "50px",
    }
}));

/**
 * The code line 63 to 147 is composed of Material UI Drawer Component code. 
 * Please refer to https://material-ui.com/components/drawers/ for 'Temporary Drawer'
 * 
 * @returns header 
 */
export default function Header() {
    const classes = useStyles();

    const {currentUser, logout } = useAuth();
    const [error, setError] = useState("");
    const history = useHistory();

    function aboutUsRedirect() {
        history.push("/aboutUs");
    }

    function landingRedirect() {
        history.push("/");
    }

    function loginRedirect() {
        history.push("/login");
    }

    function signupRedirect() {
        history.push("/signup");
    }

    function donorPost() {
        history.push("/donorPost");
    }

    function postAd() {
        history.push("/postDono");
    }

    function inbox() {
        history.push("/inbox");
    }

    async function handleLogout() {
        setError('');

        try {
            await logout();
            history.pushState("/");
        } catch {
            setError("Failed to log out");
        }
    }
    
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Home'].map((text, index) => (
                    <ListItem button key={text} onClick = {landingRedirect}>
                        <ListItemIcon>{index == <HomeIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <List>
                {['Log In'].map((text, index) => (
                    <ListItem button key = {text} onClick = {loginRedirect}>
                        <ListItemIcon>{index == <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <List>
                {['Sign Up'].map((text, index) => (
                    <ListItem button key = {text} onClick = {signupRedirect}>
                        <ListItemIcon>{index == <AccountCircleIcon />}</ListItemIcon>
                        <ListItemText primary = {text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Post Bottles'].map((text, index) => (
                    <ListItem button key = {text} onClick = {postAd}>
                        <ListItemIcon>{index == <InboxIcon />}</ListItemIcon>
                        <ListItemText primary = {text} />
                    </ListItem>
                ))}
            </List>
            <List>
                {['Profile'].map((text, index) => (
                    <ListItem button key = {text} onClick = {inbox}>
                        <ListItemIcon>{index == <InboxIcon />}</ListItemIcon>
                        <ListItemText primary = {text} />
                    </ListItem>
                ))}
            </List>
            <List>
                {['About Us'].map((text, index) => (
                    <ListItem button key={text} onClick = {aboutUsRedirect}>
                        <ListItemIcon>{index  == <GroupIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div className={classes.main} id="header">
            <AppBar className={classes.navbar}>
                <Toolbar className={classes.navbarContent}>
                    <div className={classes.navbarTitle} onClick = "/">
                        <img src = {wecycle} className={classes.wecycleLogo} onClick = "/" />
                    </div>
                    <IconButton>

                        {['right'].map((anchor) => (

                            <React.Fragment key={anchor}>
                                <IconButton onClick={toggleDrawer(anchor, true)}>
                                    <SortIcon className={classes.icon} />
                                </IconButton>

                                <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                                    {list(anchor)}
                                </Drawer>
                            </React.Fragment>
                        ))}
                    </IconButton>

                </Toolbar>
            </AppBar>

        </div>
    );
}
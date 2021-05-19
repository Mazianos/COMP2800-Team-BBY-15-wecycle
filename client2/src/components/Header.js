import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Button, List, Divider, ListItem, ListItemIcon, ListItemText, AppBar, IconButton, Toolbar, Typography, Collapse } from '@material-ui/core';

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
                {['Home', 'Log In', 'Sign Up'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <HomeIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Profile', 'About'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <AccountBoxIcon /> : <GroupIcon />}</ListItemIcon>
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
                    <h1 className={classes.navbarTitle}>
                        <img src = {wecycle} className={classes.wecycleLogo} />
                    </h1>
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
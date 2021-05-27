import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, Divider, ListItem, ListItemIcon, ListItemText, AppBar, IconButton, Toolbar } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import clsx from 'clsx';
import SortIcon from '@material-ui/icons/Sort';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GroupIcon from '@material-ui/icons/Group';
import wecycle from '../images/wecycle_logo.PNG';

const useStyles = makeStyles((theme) => ({
    main: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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

/* 
* Used template of copyright blurb from material UI templates and MUI CSS. Lines 120-220.
* @see https://material-ui.com/components/drawers/
*
**/
export default function Header() {
    const classes = useStyles();

    const {currentUser, logout } = useAuth();
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

    function postAd() {
        history.push("/postDono");
    }

    function inbox() {
        history.push("/inbox");
    }

    async function handleLogout() {
        try {
            await logout();
            history.push("/");
        } catch {}
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
                        <ListItemIcon>{index = <HomeIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            
                {currentUser === null ? 
                <List>
                    {['Log In'].map((text, index) => (
                        <ListItem button key = {text} onClick = {loginRedirect}>
                            <ListItemIcon>{index = <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))} 
                </List>: <></>}
            
                {currentUser === null ?
                <List>
                    {['Sign Up'].map((text, index) => (
                        <ListItem button key = {text} onClick = {signupRedirect}>
                            <ListItemIcon>{index = <AccountCircleIcon />}</ListItemIcon>
                            <ListItemText primary = {text} />
                        </ListItem>
                    ))}
                </List> : <></>}
            <Divider />
            <List>
                {['Profile'].map((text, index) => (
                    <ListItem button key = {text} onClick = {postAd}>
                        <ListItemIcon>{index = <InboxIcon />}</ListItemIcon>
                        <ListItemText primary = {text} />
                    </ListItem>
                ))}
            </List>
            
                {currentUser !== null ?
                <List>
                    {['Profile'].map((text, index) => (
                        <ListItem button key = {text} onClick = {inbox}>
                            <ListItemIcon>{index = <InboxIcon />}</ListItemIcon>
                            <ListItemText primary = {text} />
                        </ListItem>
                    ))}
                </List> : <></>}
            <List>
                {['About Us'].map((text, index) => (
                    <ListItem button key={text} onClick = {aboutUsRedirect}>
                        <ListItemIcon>{index  = <GroupIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
                {currentUser !== null ?
                <List>
                    {['Log Out'].map((text, index) => (
                        <ListItem button key={text} onClick = {handleLogout}>
                            <ListItemIcon>{index  = <GroupIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List> : <></>}
            
        </div>
    );

    return (
        <div className={classes.main} id="header">
            <AppBar className={classes.navbar}>
                <Toolbar className={classes.navbarContent}>
                    <div className={classes.navbarTitle} >
                        <img src = {wecycle} className={classes.wecycleLogo} onClick={landingRedirect} alt="Wecycle Logo, redirect's to landing page" />
                    </div>

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

                </Toolbar>
            </AppBar>

        </div>
    );
}
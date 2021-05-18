/*import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Drawer, Button, List, Divider, ListItem, ListItemIcon, ListItemText, AppBar, IconButton, Toolbar, Typography, Collapse } from '@material-ui/core';

import clsx from 'clsx';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles(() => ({
    main: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: "100vh",
        fontFamily: "Roboto",
    },
    navbar: {
        backgroundColor: "grey",
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
        color: '#fff',
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
    arrow: {
        color: '#5AFF3D',
        fontSize: '4rem',
        position: 'relative',
        marginTop: '-10px',
    },
    list: { //NEW
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
}));

export default function DonorPostHeading() {
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
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div className={classes.main}>
            <AppBar className={classes.navbar}>
                <h1 className={classes.navbarTitle}>
                    We<span className={classes.colorText}>cycle</span>
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
            </AppBar>
        </div>
    )
}
*/
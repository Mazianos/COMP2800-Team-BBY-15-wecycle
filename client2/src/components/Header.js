import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Typography, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: "100vh",
        fontFamily: "Roboto",
    },
    appbar:{
        background:"none",
    },
    appbarWrapper: {
        width: "80%",
        margin: "0 auto"
    },
    appbarTitle:{
        
        fontSize: "2rem",
        
        flexGrow: '1',
    },
    icon:{
        color: '#fff',
        fontSize: "2rem",
    },
    colorText: {
        color:"#5AFF3D",
    },
    container: {
        textAlign: "center",
    },
    title: {
        color: "#fff",
        fontSize: "3.5rem",
    },
    goDown: {
        color: '#5AFF3D',
        fontSize: '3rem',
    },
}));

export default function Header() {
    const classes = useStyles();
    return ( 
    <div className = {classes.root}>
        <AppBar className = {classes.appbar} elevation={0}>
            <Toolbar className = {classes.appbarWrapper}>
                <h1 className = {classes.appbarTitle}>
                    Meet <span className = {classes.colorText}> the Team</span>
                </h1>
                <IconButton>
                    <SortIcon className = {classes.icon} />
                </IconButton>
            </Toolbar>
        </AppBar>

        <Collapse in={true} {...(true ? { timeout: 1000 } : {})}> 
            <div className = {classes.container}>
                <h1 className={classes.title}> 
                    Welcome to <br/> <span className = {classes.colorText}>Wecycle </span>
                </h1>
                <IconButton>
                    <ExpandMoreIcon className = {classes.goDown} />
                </IconButton>
            </div>
        </Collapse>
    </div>
    );
}
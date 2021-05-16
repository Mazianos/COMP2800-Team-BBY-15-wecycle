import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: "100vh",
    },
    appbar:{
        background:"none",
        fontFamily: "Roboto",
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
        <div>
            <h1> 
                Welcome to <br/> <span className = {classes.colorText}>Wecycle </span>
            </h1>
        </div>
    </div>
    );
}
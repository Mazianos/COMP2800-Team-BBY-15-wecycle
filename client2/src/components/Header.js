import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';

const useStyles = makeStyles((theme) => ({
    appbar:{
        background:"none",
    },
    appbarTitle:{
        flexGrow;
    },
    icon:{
        color: '#fff',
        fontSize: "2rem",
    }
}));

export default function Header() {
    const classes = useStyles();
    return ( 
    <div>
        <AppBar className = {classes.appbar} elevation={0}>
            <Toolbar>
                <h1 className = {classes.appbarTitle}>Meet the Team</h1>
                <IconButton>
                    <SortIcon className = {classes.icon} />
                </IconButton>
            </Toolbar>
        </AppBar>
    </div>
    );
}
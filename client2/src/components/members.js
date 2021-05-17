import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './MembersInfo';
import membersCollection from "../static/membersCollection";

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

export default function() {
    const classes = useStyles();
    return ( 
    <div className = {classes.root}>
        <ImageCard memberCollection = {membersCollection[0]} />
    </div>
    );
}
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './MembersInfo';
import { useLayoutEffect, useLAyoutEffect, useState } from 'react';
import useWindowPosition from '../hook/useWindowPosition';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
        }
    },
}));

export default function() {
    const classes = useStyles();
    const checked = useWindowPosition('header');
    return (
    <div className = {classes.root} id="place-to-visit">
        <ImageCard checked = {checked} />
    </div>
    );
}
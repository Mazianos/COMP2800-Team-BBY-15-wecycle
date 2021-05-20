import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    main: {
        textAlign: "center",
        marginTop: "50%",
    },
    error: {
        fontSize: "2em",
    },
    unhappy: {
        marginTop: "2em",
    }
}));

export default function Error() {
    const classes = useStyles();

    return(
        <div className = {classes.main}>
            <h5 className = {classes.error}>OH NO! ERROR 404</h5>
            <h4 className = {classes.unhappy}> : ( </h4>
        </div>
    )
}
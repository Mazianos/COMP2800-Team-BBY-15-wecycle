import React from 'react';

import Ray from '../images/ray.jpg';
import Jason from '../images/Jason_Ahn.jpg';
import Johnson from '../images/JLau.png';
import Mazin from '../images/MazM.jpg';
import waterBottle from '../images/water-bottle.jpg';

// Components imported from material-ui
import { Button, Typography, AppBar, Card, CardActions, CardActionArea, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';

// Retrieved photo camera icon from material icons
// See www.material-ui.com/components/material-icons/ to get more icons

import { makeStyles } from '@material-ui/core/styles';

import AboutUsHeading from './Header';

const useStyles = makeStyles(() => ({
    main: {
        maxHeight: '100vh',
        maxWidth: '100vw',
        backgroundSize: 'cover',
        backgroundImage: "url(" + waterBottle + ")",
    },
    root: {
        maxWidth: 645,
        minHeight: '100vh',
        background: "rgba(0,0,0,0.5)",
        margin: '20px',
        marginTop: '5rem',
        
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 500,
    },
    title: {
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: "2rem",
        color: "#fff",
    },
    body: {
        fontFamily: "Roboto",
        fontSize: "1.1rem",
        color: "#ddd",
    },
    linkedin: {
        textDecoration: "none",
        fontSize: "1.0rem",
        padding: "5px",
        border: "1px solid black",
        textAlign: "center",
    }
}));

export default function AboutUs() {
    const classes = useStyles();

    return (
        <div className={classes.main}>
            <AboutUsHeading />
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.image}
                        image={Ray}
                    />
                    <CardContent>
                        <Typography
                            component="h3"
                            className={classes.title}
                            gutterBottom variant="h5">
                            Ray Wong
                        </Typography>
                        <Typography
                            component="h6"
                            className={classes.body} >
                            Ray is a business graduate pursuing a tech career. His specializations are HTML/CSS
                            and JavaScript. He has a passion for giving back and works with Burnaby Neighbourhood House as a
                            digital literacy volunteer.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <a href="https://www.linkedin.com/in/rwong97/" target="_blank">
                        <Button size="small" color="white" className={classes.linkedin}>
                            LinkedIn
                        </Button>
                    </a>
                </CardActions>

                <CardActionArea>
                    <CardMedia
                        className={classes.image}
                        image={Jason}
                    />
                    <CardContent>
                        <Typography
                            component="h3"
                            className={classes.title}
                            gutterBottom variant="h5">
                            Jason Ahn
                        </Typography>
                        <Typography
                            component="h6"
                            className={classes.body} >
                            Jason is an aspiring software engineer motivated by curiosity
                            and driven attitude. Jason holds a Bachelor's degree in Criminology from SFU and worked at
                            three federal government agencies: National Defence, Royal Canadian Mounted Police and Canada Revenue Agency.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <a href="https://www.linkedin.com/in/jasonja-ahn/" target="_blank">
                        <Button size="small" color="white" className={classes.linkedin}>
                            LinkedIn
                        </Button>
                    </a>
                </CardActions>


                <CardActionArea>
                    <CardMedia
                        className={classes.image}
                        image={Johnson}
                    />
                    <CardContent>
                        <Typography
                            gutterBottom variant="h5"
                            component="h1"
                            className={classes.title}>
                            Johnson Lau
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            className={classes.body} >
                            Johnson Lau is a young software developer looking to improve his skills in the field. Fresh
                            from highschool, he is ready to make a lasting impact through his work. Johnson loves to play volleyball, and
                            cook during his free time.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <a href="https://www.linkedin.com/in/johnsonlau/" target="_blank">
                        <Button size="small" color="white" className={classes.linkedin}>
                            LinkedIn
                        </Button>
                    </a>
                </CardActions>

                <CardActionArea>
                    <CardMedia
                        className={classes.image}
                        image={Mazin}
                        title="Wecycle Team"
                    />
                    <CardContent>
                        <Typography
                            gutterBottom variant="h5"
                            component="h1"
                            className={classes.title}>
                            Mazin Marwan
                        </Typography>
                        <Typography
                            color="textSecondary"
                            component="p"
                            className={classes.body} >
                            Mazin Marwan is a software developer from Vancouver BC seeking to create interesting and
                            interactive applications focused on simplifying workflows for himself and those around him. Mazin loves to
                            play various roleplaying games such as Dungeons and Dragons and write when he has the time.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                    <CardActions>
                    <a href="https://www.linkedin.com/in/johnsonlau/" target="_blank">
                        <Button size="small" color="white" className={classes.linkedin}>
                            LinkedIn
                        </Button>
                    </a>
                    </CardActions>
            </Card>
        </div>

    );
}

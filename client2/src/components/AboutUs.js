import React, { useState, useEffect, useRef } from "react";
import Ray from "../images/ray.jpg";
import Jason from "../images/Jason_Ahn.jpg";
import Johnson from "../images/JLau.png";
import Mazin from "../images/MazM.jpg";
import waterBottle from "../images/water-bottle.jpg";
import nature from "../images/nature.jpg";
import rocket from "../images/rocket.jpg";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

// Components imported from material-ui
import {
  Collapse,
  IconButton,
  Button,
  Typography,
  AppBar,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// Retrieved photo camera icon from material icons
// See www.material-ui.com/components/material-icons/ to get more icons

import { makeStyles } from "@material-ui/core/styles";

import AboutUsHeading from "./Header";

const useStyles = makeStyles(() => ({
  main: {
    maxHeight: "100vh",
    maxWidth: "100vw",
    backgroundSize: "cover",
    backgroundImage: "url(" + nature + ")",
  },
  root: {
    maxWidth: 645,
    minHeight: "100vh",
    background: "rgba(0,0,0,0.5)",
    margin: "20px",
    marginTop: "25rem",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 500,
  },
  imageJohnson: {
    height: 700,
  },
  titleHead: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "2rem",
    color: "black",
    position: "absolute",
  },
  titleBar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "15rem",
  },
  arrow: {
    color: "antiquewhite",
    fontSize: "4rem",
    marginTop: "8rem",
  },
  container: {
    textAlign: "center",
  },
  body: {
    fontFamily: "Roboto",
    fontSize: "1.1rem",
    color: "#ddd",
  },
  title: {
    fontWeight: "bold",
  },
  linkedin: {
    textDecoration: "none",
    fontSize: "1.0rem",
    padding: "5px",
    border: "1px solid black",
    textAlign: "center",
  },
}));

export default function AboutUs() {
  const classes = useStyles();
  // const [xPosition, setXPosition] = useState(10);
  // const [yPosition, setYPosition] = useState(10);
  // const [xSpeed, setXSpeed] = useState(10);
  // const [ySpeed, setYSpeed] = useState(10);
  const [runState, setRunState] = useState(false);
  var xPosition = 10;
  var yPosition = 10;
  var xSpeed = 10;
  var ySpeed = 10;

  const FPS = 60;
  const logo = useRef();

  function moveLogo() {
    if (runState === false) {
        return;
    }
    if (
      xPosition + (logo.current || {}).clientWidth >= window.innerWidth ||
      xPosition <= 0
    ) {
      xSpeed = -xSpeed;
    }
    if (
      yPosition + (logo.current || {}).clientHeight >= window.innerHeight ||
      yPosition <= 0
    ) {
      ySpeed = -ySpeed;
    }
    (logo.current || {}).style.left = xPosition + "px";
    (logo.current || {}).style.top = yPosition + "px";
  }

  const handleClickAway = () => {
    setRunState(false);
  };

  const run = () => {
    setRunState((prev) => !prev);  
    console.log(runState);
    if (runState) {
        setInterval(() => {
            xPosition += xSpeed;
            yPosition += ySpeed;
            moveLogo();
          }, 1000 / FPS);
    } else {
        // window.location.reload();
    }
  }

  return (
    <div className={classes.main}>
      <AboutUsHeading />
      <div className={classes.titleBar}>
        <ClickAwayListener onClickAway={handleClickAway}>
          <h1
            className={classes.titleHead}
            ref={logo}
            onClick={run}
            style={{ color: "antiquewhite" }}
          >
            Meet the Team
          </h1>
        </ClickAwayListener>
        {/* <IconButton> */}
        <ExpandMoreIcon className={classes.arrow} />
        {/* </IconButton> */}
      </div>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.image} image={Ray} />
          <CardContent>
            <Typography
              component="h3"
              className={classes.title}
              gutterBottom
              variant="h5"
            >
              Ray Wong
            </Typography>
            <Typography component="h6" className={classes.body}>
              Ray is a business graduate pursuing a tech career. His
              specializations are HTML/CSS and JavaScript. He has a passion for
              giving back and works with Burnaby Neighbourhood House as a
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
          <a href="https://github.com/ray165" target="_blank">
            <Button size="small" color="white" className={classes.linkedin}>
              Github
            </Button>
          </a>
        </CardActions>

        <CardActionArea>
          <CardMedia className={classes.image} image={Jason} />
          <CardContent>
            <Typography
              component="h3"
              className={classes.title}
              gutterBottom
              variant="h5"
            >
              Jason Ahn
            </Typography>
            <Typography component="h6" className={classes.body}>
              Jason is an aspiring software engineer motivated by curiosity and
              driven attitude. Jason holds a Bachelor's degree in Criminology
              from SFU and worked at three federal government agencies: National
              Defence, Royal Canadian Mounted Police and Canada Revenue Agency.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <a href="https://www.linkedin.com/in/jasonja-ahn/" target="_blank">
            <Button size="small" color="white" className={classes.linkedin}>
              LinkedIn
            </Button>
          </a>
          <a href="https://github.com/j-ahn94" target="_blank">
            <Button size="small" color="white" className={classes.linkedin}>
              Github
            </Button>
          </a>
        </CardActions>

        <CardActionArea>
          <CardMedia className={classes.imageJohnson} image={Johnson} />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h1"
              className={classes.title}
            >
              Johnson Lau
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.body}
            >
              Johnson Lau is a young software developer looking to improve his
              skills in the field. Fresh from highschool, he is ready to make a
              lasting impact through his work. Johnson loves to play volleyball,
              and cook during his free time.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <a href="https://www.linkedin.com/in/johnsonlau/" target="_blank">
            <Button size="small" color="white" className={classes.linkedin}>
              LinkedIn
            </Button>
          </a>
          <a href="https://github.com/JohnsonLau" target="_blank">
            <Button size="small" color="white" className={classes.linkedin}>
              Github
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
              gutterBottom
              variant="h5"
              component="h1"
              className={classes.title}
            >
              Mazin Marwan
            </Typography>
            <Typography
              color="textSecondary"
              component="p"
              className={classes.body}
            >
              Mazin Marwan is a software developer from Vancouver BC seeking to
              create interesting and interactive applications focused on
              simplifying workflows for himself and those around him. Mazin
              loves to play various roleplaying games such as Dungeons and
              Dragons and write when he has the time.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <a
            href="https://www.linkedin.com/in/mazin-marwan-0b3409154/"
            target="_blank"
          >
            <Button size="small" color="white" className={classes.linkedin}>
              LinkedIn
            </Button>
          </a>
          <a href="https://github.com/Mazianos" target="_blank">
            <Button size="small" color="white" className={classes.linkedin}>
              Github
            </Button>
          </a>
        </CardActions>
      </Card>
    </div>
  );
}

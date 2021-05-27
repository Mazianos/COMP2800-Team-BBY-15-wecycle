import React, { useState, useRef } from "react";
import Ray from "../images/ray.jpg";
import Jason from "../images/Jason_Ahn.jpg";
import Johnson from "../images/JLau.png";
import Mazin from "../images/MazM.jpg";
import four from "../images/four.jpg";

import {
  Button,
  Typography,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import AboutUsHeading from "./Header";

const useStyles = makeStyles(() => ({
  main: {
    maxHeight: "100vh",
    maxWidth: "100vw",
    backgroundSize: "cover",
    backgroundImage: "url(" + four + ")",
  },
  root: {
    maxWidth: 645,
    minHeight: "100vh",
    background: "#4f772d",
    margin: "20px",
    marginTop: "25rem",
    width: "100%",
    margin: "0 auto",
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
    color: "black",
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
    margin: "0 auto",
    marginBottom: "1.5rem",
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
  const [runState, setRunState] = useState(false);
  var xPosition = 10;
  var yPosition = 10;
  var xSpeed = 10;
  var ySpeed = 10;

  const FPS = 60;
  const logo = useRef();

  /*Referenced a youtube video to make bouncing logo easter egg. Adapted to react
  @author WEB CIFAR
  @see https://www.youtube.com/watch?v=wMIARRCox9k
  */
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
      setTimeout(window.location.reload(), 10000);
    } else {
      clearInterval();
      // window.location.reload();
    }
  };

  return (
    <div className={classes.main}>
      <AboutUsHeading />
      <div className={classes.titleBar}>
        <h1
          className={classes.titleHead}
          ref={logo}
          onClick={run}
          style={{ color: "black" }}
        >
          Meet the Team
        </h1>
        <ExpandMoreIcon className={classes.arrow} />
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
          <a href="https://www.linkedin.com/in/rwong97/">
            <Button size="small" color="white" className={classes.linkedin}>
              LinkedIn
            </Button>
          </a>
          <a href="https://github.com/ray165">
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
          <a href="https://www.linkedin.com/in/jasonja-ahn/">
            <Button size="small" color="white" className={classes.linkedin}>
              LinkedIn
            </Button>
          </a>
          <a href="https://github.com/j-ahn94">
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
          <a href="https://www.linkedin.com/in/johnsonlau/">
            <Button size="small" color="white" className={classes.linkedin}>
              LinkedIn
            </Button>
          </a>
          <a href="https://github.com/JohnsonLau">
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
          <a href="https://www.linkedin.com/in/mazin-marwan-0b3409154/">
            <Button size="small" color="white" className={classes.linkedin}>
              LinkedIn
            </Button>
          </a>
          <a href="https://github.com/Mazianos">
            <Button size="small" color="white" className={classes.linkedin}>
              Github
            </Button>
          </a>
        </CardActions>
      </Card>
    </div>
  );
}

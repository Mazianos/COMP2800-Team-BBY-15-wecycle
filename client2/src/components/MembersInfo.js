import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Collapse from '@material-ui/core/Collapse';

// Team member's image
import ray from '../images/ray.jpg';
import jason from '../images/Jason_Ahn.jpg';
import johnson from '../images/JLau.png';
import mazin from '../images/MazM.jpg';

// All the code has been retrieved from https://material-ui.com/components/cards/#card
const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    minHeight: '100vh',
    background: "rgba(0,0,0,0.5)",
    margin: '20px',
    marginTop: '5rem',
  },
  media: {
    height: 500,
  },
  title: {
      fontFamily: "Roboto",
      fontWeight: "bold",
      fontSize: "2rem",
      color: "#fff",
  },
  desc: {
    fontFamily: "Roboto",
    fontSize: "1.1rem",
    color: "#ddd",
  },
  linkedin: {
      textDecoration: "none",
  }
});

export default function MembersInfo({checked}) {
  const classes = useStyles();

  return (
    <Collapse in = {checked} {...(checked ? { timeout: 1000} : {})}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={ray}
          title="Wecycle Team"
        />
        <CardContent>
          <Typography 
            gutterBottom variant="h5" 
            component="h1" 
            className={classes.title}>
            Ray Wong
          </Typography>
          <Typography 
            variant="body2" 
            color="textSecondary" 
            component="p" 
            className = {classes.desc} >
           Ray is a business graduate pursuing a tech career. His specializations are HTML/CSS
           and JavaScript. He has a passion for giving back and works with Burnaby Neighbourhood House as a
           digital literacy volunteer.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href = "https://www.linkedin.com/in/rwong97/" target="_blank">
            <Button size="small" color="primary" className = {classes.linkedin}>
                LinkedIn
            </Button>
        </a>
     
      </CardActions>

      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={jason}
          title="Wecycle Team"
        />
        <CardContent>
          <Typography 
            gutterBottom variant="h5" 
            component="h1" 
            className={classes.title}>
            Jason Ahn
          </Typography>
          <Typography 
            variant="body2" 
            color="textSecondary" 
            component="p" 
            className = {classes.desc} >
           Jason is an aspiring software engineer motivated by curiosity and driven attitude. Jason holds a Bachelor's degree in Criminology from SFU and worked at three federal government agencies: National Defence, Royal Canadian Mounted Police and Canada Revenue Agency.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href = "https://www.linkedin.com/in/jasonja-ahn/" target="_blank">
            <Button size="small" color="primary">
                LinkedIn
            </Button>
        </a>
     
      </CardActions>

      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={johnson}
          title="Wecycle Team"
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
            className = {classes.desc} >
                Johnson Lau is a young software developer looking to improve his skills in the field. Fresh
                from highschool, he is ready to make a lasting impact through his work. Johnson loves to play volleyball, and
                cook during his free time.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href = "https://www.linkedin.com/in/johnsonlau/" target="_blank">
            <Button size="small" color="primary">
                LinkedIn
            </Button>
        </a>
     
      </CardActions>


      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={mazin}
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
            variant="body2" 
            color="textSecondary" 
            component="p" 
            className = {classes.desc} >
                Mazin Marwan is a software developer from Vancouver BC seeking to create interesting and
                interactive applications focused on simplifying workflows for himself and those around him. Mazin loves to
                play various roleplaying games such as Dungeons and Dragons and write when he has the time.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href = "https://www.linkedin.com/in/johnsonlau/" target="_blank">
            <Button size="small" color="primary">
                LinkedIn
            </Button>
        </a>
     
      </CardActions>
    </Card>
    </Collapse>
    
  );
}
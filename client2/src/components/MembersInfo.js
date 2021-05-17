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

import waterBottle from '../images/ray.jpg';

// All the code has been retrieved from https://material-ui.com/components/cards/#card
const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    minHeight: '100vh',
    background: "rgba(0,0,0,0.5)",
    margin: '20px',
    
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
  }
});

export default function MembersInfo() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={waterBottle}
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
        <a href = "www.google.ca" target="_blank">
            <Button size="small" color="primary">
                LinkedIn
            </Button>
        </a>
     
      </CardActions>

      
    </Card>

    
  );
}
import React from "react";
// import Navbar from './Navbar';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://source.unsplash.com/random"
          title="Random Images"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            My Title {props.title}
          </Typography>
          <Typography gutterBottom variant="subtitle2" component="h6">
            Posting Date: {props.date}
          </Typography>
          <Typography gutterBottom variant="subtitle2" component="h6">
            Status: {props.status}
          </Typography>
          <div>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Return
        </Button>
        <Button size="small" color="primary" variant="contained">
          Claim
        </Button>
      </CardActions>
    </Card>
  );
}

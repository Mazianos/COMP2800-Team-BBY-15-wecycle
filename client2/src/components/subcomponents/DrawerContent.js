import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import { Typography, Grow } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import ContactPhoneOutlinedIcon from "@material-ui/icons/ContactPhoneOutlined";
import { useHistory } from "react-router-dom";

function grabData(inputPostID) {
  fetch(`/postDetails/${inputPostID}`)
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((err) => {
      console.log(err + " data not loaded!");
      alert("Are you sure you have the correct postID?");
      return null;
    });
}

const useStyles = makeStyles({
  list: {
    width: "100%",
    height: "80vh",
  },
  fullList: {
    // width: 'auto',
  },
  root: {
    // maxWidth: 345,
    width: "100%",
    height: "80vh",
  },
  media: {
    height: 100,
  },
  contentCentered: {
    alignContent: "center",
    fontSize: 15,
  },
});

export default function DrawerContent(props) {
  const classes = useStyles();
  const history = useHistory();
  var postData = grabData(props.postID);
  if (postData === null) {
    history.push("/");
  }
  return (
    <div>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="https://source.unsplash.com/random"
          title="Random Images"
        />
        <div className={classes.contentCentered}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Location: 
            </Typography>
            <Typography gutterBottom variant="subtitle2" component="h6">
              Posting Date: 
            </Typography>
            <Typography gutterBottom variant="subtitle2" component="h6">
              Status: 
            </Typography>
            <Typography gutterBottom variant="subtitle2" component="h6">
              Description: 
            </Typography>
            <Typography gutterBottom variant="subtitle2" component="h6">
              Contact: 
            </Typography>
          </CardContent>
        </div>

        {/* <img
                src="https://source.unsplash.com/random"
                title="Placeholder for maps"
              /> */}
        <CardActions>
          <Button
            size="small"
            color="primary"
            variant="contained"
            onClick={() => console.log("hello")}
          >
            Claim
          </Button>
        </CardActions>
      </Card>

      <Divider />
    </div>
  );
}

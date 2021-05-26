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
import DrawerContent from "./subcomponents/DrawerContent";
import { Drawer } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  contentCentered: {
    alignContent: "center",
    fontSize: 15,
  },
});




export default function MediaCard(props) {
  const classes = useStyles();
  const [state, setState] = React.useState(false);
  const history = useHistory();
  const [needsRender, setRender] = React.useState(false);

  const toggleRender = (refresh) => {
    setRender(refresh, () => {
      console.log(needsRender, "parent updated");
    });

  }

  const toggleDrawer = (open) => (event) => {
    setState(open);
  };

  return (
    <>
      <Card className={classes.root}>
        {/* <CardActionArea onClick={()=> window.location.href=`/postDetails/:postID=${props.postID}`}> */}
        <CardActionArea onClick={toggleDrawer(true)}>
          <CardMedia
            className={classes.media}
            image="https://source.unsplash.com/random"
            title="Random Images"
          />
          <div className={classes.contentCentered}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" id="title">
                {props.title}
              </Typography>
              <Typography gutterBottom variant="subtitle2" component="h6" id="date">
                Posting Date: {props.date}
              </Typography>
              <Typography gutterBottom variant="subtitle2" component="h6" id="status">
                Status: {props.status}
              </Typography>
            </CardContent>
          </div>
        </CardActionArea>
        <CardActions>
          {/* <Button size="small" color="primary" variant="contained" onClick={()=> window.location.href=`/postDetails/:postID=${props.postID}`}> */}
          <Button
            size="small"
            color="primary"
            variant="contained"
            onClick={toggleDrawer(true)}
          >
            Details
          </Button>
        </CardActions>
      </Card>
      <Drawer anchor={"bottom"} open={state} onClose={toggleDrawer(false)}>
        {<DrawerContent postID={props.postID} allData={props.allData} onClose={toggleDrawer(false)} reRender={() => {toggleRender(true)}}  openSnackBar={props.openSnackBar} setMsgSnack={props.setMsgSnack}/>}
      </Drawer>
    </>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

/**
 * Retrieved image from https://www.chalearning.ca/news/nutrition-month-2021-food-care/attachment/pnglot-com-twitter-bird-logo-png-139932/
 */
import twitter from "../../images/twitter.png";

/**
 * Retrieved image from https://kernel.sr/facebook-scalable-graphics-icon-facebook-logo-facebook-logo-png-clip-art/
 */
import facebook from "../../images/facebook.png";

function grabData(inputPostID) {
  fetch(`/postDetails/${inputPostID}`)
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((err) => {
      console.log(err + " data not loaded!");
      //   alert("Are you sure you have the correct postID?");
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
  button: {
    backgroundColor: "#4f772d",
    "&:hover": {
      backgroundColor: "#31572C",
    },
  },
});

/**
  * Referenced Drawer component from line 74 to 210 from material UI.
  * Referenced the code on https://material-ui.com/components/
  * 
  * @author Olivier Tassinari, Kristoffer K. & Matt
  * @see https://material-ui.com/components/drawers/
*/

export default function DrawerContent(props) {
  const { currentUser } = useAuth(); // firebase
  const classes = useStyles();
  const history = useHistory();
  var postData = grabData(props.postID);
  if (postData === null) {
    history.push("/");
  }

  function claimRequest() {
    console.log(props);
    if ((currentUser || {}).uid == null) {
      history.push("/login");
      return;
    }

    // Send the data
    let dataToSend = {
      postID: props.allData._id,
      postAuthor: props.allData.author,
      postCollector: (currentUser || {}).uid || "testUser", //if currentUser is null, then make .uid reference an empty object instead to surpress type error
    };
    console.log("your data", dataToSend);

    fetch("/claim_Req", {
      method: "POST",
      body: JSON.stringify(dataToSend), // stringify is needed to send!!!
      headers: {
        "Content-Type": "application/json", // content type is needed as well!!!
      },
    })
      .then((res) => {
        if (res.ok) {
          console.log(res);
          return res.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        console.log("Success:", data);
        props.setMsgSnack("Successfully claimed!");
        props.openSnackBar();
      })
      .catch((e) => {
        console.error("Error:", e);
        props.setMsgSnack("Error! Unable to claim post");
        props.openSnackBar();
      });

    props.onClose();
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
              {props.allData.postalCode || "Oops! This is empty"}
            </Typography>
            <Typography gutterBottom variant="subtitle2" component="h6">
              Posting Date: {props.allData.postDate}
            </Typography>
            <Typography gutterBottom variant="subtitle2" component="h6">
              Status: {props.allData.status}
            </Typography>
            <Typography gutterBottom variant="subtitle2" component="h6">
              Description: {props.allData.description}
            </Typography>
            <Typography gutterBottom variant="subtitle2" component="h6">
              Contact: {props.allData.contact}
            </Typography>
          </CardContent>
        </div>

        {/* <img
                src="https://source.unsplash.com/random"
                title="Placeholder for maps"
              /> */}
        <CardActions>
          <Button
            className={classes.button}
            size="small"
            color="primary"
            variant="contained"
            onClick={() => claimRequest()}
          // onClick={props.openSnackBar}
          >
            Claim
          </Button>
        </CardActions>
      </Card>

      <Divider />
      <div
        color="primary"
        variant="contained"
        size="small"
        class="fb-share-button"
        data-href="http://ec2-34-211-120-230.us-west-2.compute.amazonaws.com:8001/"
        data-layout="button"
        data-size="small"
      >
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fec2-34-211-120-230.us-west-2.compute.amazonaws.com%3A8001%2F&amp;src=sdkpreparse"
          class="fb-xfbml-parse-ignore"
        >
          <img src={facebook} width="64" height="64" alt="facebook button"></img>
        </a>
        <a
          href="https://twitter.com/share?ref_src=twsrc%5Etfw"
          class="twitter-share-button"
          data-text="I just donated bottles thanks to WeCycle!"
          data-url="http://ec2-34-211-120-230.us-west-2.compute.amazonaws.com:8001/"
          data-via="TweetsCycle"
          data-hashtags="Recycling "
          data-related="TweetsCycle"
          data-show-count="false"
        >
          <img src={twitter} width="64" height="64" alt="twitter button"></img>
        </a>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
      </div>
    </div>
  );
}

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
import Snackbar from "@material-ui/core/Snackbar";
import ContactPhoneOutlinedIcon from "@material-ui/icons/ContactPhoneOutlined";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

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

function updateData(myData) {
  console.log("running updateData", myData);
  fetch("/claim_Req", {
    method: "POST", 
    body: (myData),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((e) => {
      console.error("Error:", e);
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
  const { currentUser } = useAuth(); // firebase
  const [open, setOpen] = React.useState(false); // popup alter when 'claimed'
  const classes = useStyles();
  const history = useHistory();
  var postData = grabData(props.postID);
  if (postData === null) {
    history.push("/");
  }

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  function claimRequest() {
    console.log("clicked");
    // Send the data
    let dataToSend = {
      postID: props.allData._id,
      postAuthor: props.allData.author,
      // postCollector: currentUser.uid || "testUser",
      postCollector: "testUser",
    };
    console.log("your data", dataToSend);

    console.log("trying to right before running fetch");
    updateData(dataToSend)
    console.log("runs after the updateData")
    // async function run() {
    //   try {


    //   } catch(err) {
    //     console.log(err);
    //   }
    // }



    handleClick();
    // Close the drawer
    props.onClose();

    // Post some sort of feedback.

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
              Location: {props.allData.postalCode || "oops! this is empty"}
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
            size="small"
            color="primary"
            variant="contained"
            onClick={() => claimRequest()}
            // onClick={() => console.log("hello")}
          >
            Claim
          </Button>
        </CardActions>
      </Card>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        // open={open}
        onClose={handleClose}
        autoHideDuration={6000}
        message="Successfully Claimed!"
      />
      <Divider />
    </div>
  );
}

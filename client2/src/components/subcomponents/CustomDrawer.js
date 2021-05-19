import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Typography, Grow } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import ContactPhoneOutlinedIcon from '@material-ui/icons/ContactPhoneOutlined';
import DrawerContent from "./DrawerContent.js";

const useStyles = makeStyles({
  list: {
    width: "100%",
    height: "80vh",
    background: "red",
  },
  fullList: {
    // width: 'auto',
  },
  root: {
    // maxWidth: 345,
  },
  media: {
    height: 140,
  },
  contentCentered: {
    alignContent: "center",
    fontSize: 15,
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <Button onClick={toggleDrawer("bottom", true)}>{"bottom"}</Button>
      {["bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <DrawerContent />
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

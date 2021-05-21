import React from "react";
import { AuthProvider } from "../contexts/AuthContext";
import Signup from "./Signup";
import { Container } from '@material-ui/core'; //removed react-boostrap
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from "./LandingPage";
import Login from "./Login";
import PrivateRoute from './PrivateRoute';
import AboutUs from "./AboutUs";
import PostAd from "./PostAd";
import DonorPost from "./DonorPost";
// import PostingDetails from "./PostingDetails";
import useStyles from './styles';
import Error from './Error';
import Inbox from "./Inbox";

function App() {
    return (
        <>
            <Router>
            <AuthProvider>
                <Switch>
                    <Route exact path="/" component={Landing}/>
                    <Route path="/signup" component={Signup}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/aboutUs" component={AboutUs}/>
                    <Route path="/error" component={Error}/>
                    <PrivateRoute path="/donorPost" component={DonorPost}/>
                    <PrivateRoute path="/postDono" component={PostAd}/>
                    <PrivateRoute path="/inbox" component={Inbox}/>
                </Switch>
            </AuthProvider>
            </Router>
        </>
    )
};

export default App;
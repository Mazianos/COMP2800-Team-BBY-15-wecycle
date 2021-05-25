import React from "react";
import { AuthProvider } from "../contexts/AuthContext";
import Signup from "./Signup";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from "./LandingPage";
import Login from "./Login";
import PrivateRoute from './PrivateRoute';
import AboutUs from "./AboutUs";
import PostAd from "./PostAd";
import DonorPost from "./DonorPost";
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
                    <PrivateRoute path="/donorPost" component={DonorPost}/>
                    <PrivateRoute path="/postDono" component={PostAd}/>
                    <PrivateRoute path="/inbox" component={Inbox}/>
                    <Route  component={Error}/>
                </Switch>
            </AuthProvider>
            </Router>
        </>
    )
};

export default App;
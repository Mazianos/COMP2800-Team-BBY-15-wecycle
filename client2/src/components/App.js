import React from "react";
import { AuthProvider } from "../contexts/AuthContext";
import Signup from "./Signup";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from "./LandingPage";
import Login from "./Login";
import PrivateRoute from './PrivateRoute';
import AboutUs from "./AboutUs";
import PostAd from "./PostAd";
import Inbox from "./Inbox";

function App() {
    return (
        <Container>
            <Router>
            <AuthProvider>
                <Switch>
                    <Route exact path="/" component={Landing}/>
                    <Route path="/signup" component={Signup}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/aboutUs" component={AboutUs}/>
                    <PrivateRoute path="/postDono" component={PostAd}/>
                    <PrivateRoute path="/inbox" component={Inbox}/>
                </Switch>
            </AuthProvider>
            </Router>
        </Container>
    )
};

export default App;
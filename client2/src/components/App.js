import React from "react";
import { AuthProvider } from "../contexts/AuthContext";
import Signup from "./Signup";
import { Container } from '@material-ui/core'; //removed react-boostrap
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Landing from "./Landing";
import Landing from "./LandingPage";
import Login from "./Login";
import PrivateRoute from './PrivateRoute';
import AboutUs from "./AboutUs";
import PostAd from "./PostAd";
import ProductCard from "./ProductCard";

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
                    <PrivateRoute path="/postAd" component={PostAd}/>
                    <Route path="/postDetails" component={ProductCard}/>
                </Switch>
            </AuthProvider>
            </Router>
        </>
    )
};

export default App;
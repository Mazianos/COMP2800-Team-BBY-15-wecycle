import React from "react";
import { AuthProvider } from "../contexts/AuthContext";
import Signup from "./Signup";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from "./Landing";
import Login from "./Login";
import PrivateRoute from './PrivateRoute';
import AboutUs from "./AboutUs";

function App() {
    return (
        <Container>
            <Router>
            <AuthProvider>
                <Switch>
                    <PrivateRoute exact path="/" component={Landing}/>
                    <Route path="/signup" component={Signup}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/aboutUs" component={AboutUs}/>
                </Switch>
            </AuthProvider>
            </Router>
        </Container>
    )
};

export default App;
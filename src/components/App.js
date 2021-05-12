import React from "react";
import { AuthProvider } from "../contexts/AuthContext";
import Signup from "./Signup";
import {Container} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from "./Landing";
import Login from "./Login";
import PrivateRoute from './PrivateRoute';

function App() {
    return (
        <Container >
            <Router>
            <AuthProvider>
                <Switch>
                    <PrivateRoute exact path="/" component={Dashboard}/>
                    <Route path="/signup" component={Signup}/>
                    <Route path="/login" component={Login}/>
                </Switch>
            </AuthProvider>
            </Router>
        </Container>
    )
};

export default App;
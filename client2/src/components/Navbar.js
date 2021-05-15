import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import '../css/Navbar.css';
import logo from '../images/wecycle_logo.PNG';

export default function Navbar() {
    const { currentUser, logout } = useAuth();
    const [error, setError] = useState("");
    const history = useHistory();

    function aboutUsRedirect() {
        history.push("/aboutUs");
    }

    function landingRedirect() {
        history.push("/");
    }

    function loginRedirect() {
        history.push("/login");
    }

    function signupRedirect() {
        history.push("/signup");
    }

    async function handleLogout() {
        setError('');

        try {
            await logout();
            history.pushState("/");
        } catch {
            setError("Failed to log out");
        }
    }

    return (
        <nav className="NavbarItems">
                <img src = {logo} className = "logo" width = "100" height = "50" />
                <ul id = "buttons">
                    <Button className = "button1" variant="link" onClick={landingRedirect}>Home</Button>
                    <Button className = "button2" variant="link" onClick={loginRedirect}>Log in</Button>
                    <Button className = "button3" variant="link" onClick={signupRedirect}>Sign up</Button>
                    <Button className = "button4" variant="link" onClick={handleLogout}>Log Out</Button>
                    <Button className = "button5" variant="link" onClick={aboutUsRedirect}>Team</Button>
                </ul>
            </nav>
    )
}

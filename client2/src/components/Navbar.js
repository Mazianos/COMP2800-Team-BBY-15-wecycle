import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import '../css/Navbar.css';

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
                <h1 className="navbar-logo">WeCycle</h1>
                <ul>
                    <Button variant="link" onClick={landingRedirect}>Home</Button>
                    <Button variant="link" onClick={aboutUsRedirect}>About Us!</Button>
                    <Button variant="link" onClick={loginRedirect}>Log in!</Button>
                    <Button variant="link" onClick={signupRedirect}>Sign up!</Button>
                    <Button variant="link" onClick={handleLogout}>Log Out</Button>
                </ul>
            </nav>
    )
}

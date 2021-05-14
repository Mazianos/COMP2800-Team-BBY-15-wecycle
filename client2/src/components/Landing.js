import React, { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';


export default function Landing() {
    const { currentUser, logout } = useAuth();
    const [error, setError] = useState("");
    const history = useHistory();
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
        <>
            <Card>
                <Card.Body>
                    <p>why are we forcing people to loginnnnnnn</p>
                    {/* {error && <Alert variant="danger">{error}</Alert>}
                    <strong>ObjectID: </strong> {auth.currentUser.uid} */}
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
              <Button onClick={handleLogout}>Log Out</Button>
            </div>
        </>
    )
}

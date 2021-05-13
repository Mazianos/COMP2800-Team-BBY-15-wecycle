import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from 'react-router-dom';

export default function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const nameRef = useRef();
    const postalRef = useRef();
    const { signup } = useAuth();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords don\'t match');
        }
        try {
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            login(emailRef.current.value, passwordRef.current.value);
            history.push("/");
        } catch {
            setError("Failed to create an account");
        }

        setLoading(false);
    }
    return (
        <>
          <Card>
              <Card.Body>
                  <h2 className="text-center mb-4">Sign up!</h2>
                  {error && <Alert variant="danger">{error}</Alert>}
                  <Form onSubmit={handleSubmit}>
                      <Form.Group id="email">
                          <Form.Control type="email" ref={emailRef} required placeholder="Email"/>
                      </Form.Group>
                      <Form.Group id="password">
                          <Form.Control type="password" ref={passwordRef} required placeholder="Password"/>
                      </Form.Group>
                      <Form.Group id="password-confirm">
                          <Form.Control type="password" ref={passwordConfirmRef} required placeholder="Confirm Password"/>
                      </Form.Group>
                      <Form.Group id="full-name">
                          <Form.Control type="name" ref={nameRef} required placeholder="Full Name"/>
                      </Form.Group>
                      <Form.Group id="postal">
                          <Form.Control type="postalCode" ref={postalRef} required placeholder="Postal Code"/>
                      </Form.Group>
                      <Button disabled={loading} className="w-100" type="submit">Sign Up</Button>
                  </Form>
              </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
              Lets make a stand, together.
          </div>
        </>
    )
}

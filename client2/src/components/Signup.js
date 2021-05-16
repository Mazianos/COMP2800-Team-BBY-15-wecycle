import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from 'react-router-dom';
import $ from 'jquery';

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
    const { currentUser } = useAuth();

    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords don\'t match');
        }
        try {
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            await login(emailRef.current.value, passwordRef.current.value);

            let myData = {
                name: nameRef,
                address: postalRef,
                contactNum: "testNum",
                id: currentUser.uid
            }

            $.ajax({
                url: "/create-user",
                data: myData,
                dataType: "json",
                type: "POST",
                success: function(data) {
                    console.log("Success: ", data);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log("Error:", jqXHR, textStatus, errorThrown);
                },
            });

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
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email" ref={emailRef} required/>
                      </Form.Group>
                      <Form.Group id="password">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" ref={passwordRef} required/>
                      </Form.Group>
                      <Form.Group id="password-confirm">
                          <Form.Label>Password Confirmation</Form.Label>
                          <Form.Control type="password" ref={passwordConfirmRef} required/>
                      </Form.Group>
                      <Form.Group id="full-name">
                          <Form.Label>Full Name</Form.Label>
                          <Form.Control type="name" ref={nameRef} required/>
                      </Form.Group>
                      <Form.Group id="postal">
                          <Form.Label>Postal Code</Form.Label>
                          <Form.Control type="postalCode" ref={postalRef} required/>
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

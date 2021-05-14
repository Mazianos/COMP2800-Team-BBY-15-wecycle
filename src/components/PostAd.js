import React, { useRef, useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export default function PostAd() {
    const titleRef = useRef();
    const cityRef = useRef();
    const postalRef = useRef();
    const descRef = useRef();
    const contactRef = useRef();
    const fileRef = useRef();
    const [imageState, setState] = useState('');
    const [loading, setLoading] = useState(false);

    function handleChange(e) {
        setState({
            file: URL.createObjectURL(e.target.files[0])
        });
    }

    function createAd() {
        //Ajax call wtih all the data to create an ad here.
        {
            
        }
        
    }

    return (
        <>
        <link rel = "shortcut icon" type="image/png" href="../../image/favicon-32x32.png"></link>
            <Card>
                <Card.Body>
                    <Form onSubmit={createAd}>
                        <Form.Group id="title">
                            <Form.Control type="text" ref={titleRef} required placeholder="Title"/>
                        </Form.Group>
                        <Form.Group id="city">
                            <Form.Control type="text" ref={cityRef} required placeholder="City/Neighbourhood"/>
                        </Form.Group>
                        <Form.Group id="postalCode">
                            <Form.Control type="text" ref={postalRef} required placeholder="Postal Code"/>
                        </Form.Group>
                        <Form.Group id="material">
                            <Form.Check inline type="checkbox" label="Plastic" id="plastic"/>
                            <Form.Check inline type="checkbox" label="Glass" id="glass"/>
                            <Form.Check inline type="checkbox" label="Aluminum" id="aluminum"/>
                            <Form.Check inline type="checkbox" label="Other" id="other"/>
                        </Form.Group>
                        <Form.Group id="description">
                            <Form.Control type="text" ref={descRef} required placeholder="Description"/>
                        </Form.Group>
                        <Form.Group id="contactInfo">
                            <Form.Control type="text" ref={contactRef} required placeholder="Contact Information"/>
                        </Form.Group>
                        <Form.Group id="pictures">
                            <Form.Control type="file" ref={fileRef} required onChange={handleChange}/>
                            <img src={imageState.file} id="previewImage"/>
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type="submit">Create New Ad</Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}

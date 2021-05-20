import React, { useRef, useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import PostAdHeading from './Header';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    main: {
        marginTop: '100px',
        backgroundColor: '#EEF9F0',
    },
    title: {
        marginTop: '20px',
    },
    button: {
        marginTop: '20px',
    },
    submit: {
        marginTop: '50px',
        marginBottom: '30px',
    }
}));

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

    const classes = useStyles();

    return (
        <>
        <PostAdHeading />
        <link rel = "shortcut icon" type="image/png" href="../../image/favicon-32x32.png"></link>
            <Card className = {classes.main}>
                <Card.Body>
                    <Form onSubmit={createAd}>
                        <Form.Group id="title" className = {classes.button}>
                            <Form.Control type="text" ref={titleRef} required placeholder="Title"/>
                        </Form.Group>
                        <Form.Group id="city" className = {classes.button}>
                            <Form.Control type="text" ref={cityRef} required placeholder="City/Neighbourhood"/>
                        </Form.Group>
                        <Form.Group id="postalCode" className = {classes.button}>
                            <Form.Control type="text" ref={postalRef} required placeholder="Postal Code"/>
                        </Form.Group>
                        <Form.Group id="material" className = {classes.button}>
                            <Form.Check inline type="checkbox" label="Plastic" id="plastic"/>
                            <Form.Check inline type="checkbox" label="Glass" id="glass"/>
                            <Form.Check inline type="checkbox" label="Aluminum" id="aluminum"/>
                            <Form.Check inline type="checkbox" label="Other" id="other"/>
                        </Form.Group>
                        <Form.Group id="description" className = {classes.button}>
                            <Form.Control type="text" ref={descRef} required placeholder="Description"/>
                        </Form.Group>
                        <Form.Group id="contactInfo" className = {classes.button}>
                            <Form.Control type="text" ref={contactRef} required placeholder="Contact Information"/>
                        </Form.Group>
                        <Form.Group id="pictures" className = {classes.button}>
                            <Form.Control type="file" ref={fileRef} required onChange={handleChange}/>
                            <img src={imageState.file} id="previewImage"/>
                        </Form.Group>
                        <div className = {classes.submit}>
                            <Button disabled={loading} className="w-100" type="submit">Create New Ad</Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}

    function createAd() {
        //Ajax call wtih all the data to create an ad here.
        
    }
    

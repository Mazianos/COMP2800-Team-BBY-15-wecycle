import React, { useRef, useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import $ from 'jquery';

export default function PostAd() {
    const titleRef = useRef();
    const cityRef = useRef();
    const postalRef = useRef();
    const descRef = useRef();
    const contactRef = useRef();
    const fileRef = useRef();
    const bottleRef = useRef();
    const plasticRef = useRef();
    const otherRef = useRef();
    const aluminumRef = useRef();
    const glassRef = useRef();
    const [imageState, setState] = useState('');
    const [loading, setLoading] = useState(false);
    const currentUser = useState();
    const history = useHistory();

    function handleChange(e) {
        setState({
            file: URL.createObjectURL(e.target.files[0])
        });
    }

    async function createAd(e){
        e.preventDefault();

        let plasticBot=false;
        let glassBot=false;
        let aluminumBot=false;
        let otherBot=false;

        if (plasticRef.current.value ==="on") {
            plasticBot = true;
        }

        if (glassRef.current.value ==="on") {
            glassBot = true;
        }

        if (aluminumRef.current.value ==="on") {
            aluminumBot = true;
        }

        if (otherRef.current.value ==="on") {
            otherBot = true;
        }

        console.log("y tho");

        let myData = {
            author: currentUser.id, // from session data
            title: titleRef.current.value,
            postalCode: postalRef.current.value,
            type: {
                plastic: plasticBot,
                glass: glassBot,
                aluminum: aluminumBot,
                other: otherBot
            },
            estimatedBottles: bottleRef.current.value,  // number input for bottles. Sent to user Schema
            description: descRef.current.value,
            contact: contactRef.current.value, // user contact number auto fill?
            postImage: null // upload image, null for now. on client side when rendering. If null --> dummyimage.com
        }
    
    
        try {

            $.ajax({
                url: "/create-ad",
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

            // await fetch('/create-ad', {
            //     method: 'POST', // or 'PUT'
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(myData),
            // })
            // .then(response => response.json())
            // .then(data => {
            //     console.log('Success:', data);
            // })
            // .catch((e) => {
            //     console.error('Error:', e);
            // });
        } catch (err){
            console.error(err);
        }
    
    };

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
                        <Form.Group id="bottleTotal">
                            <Form.Control type="number" ref={bottleRef} required placeholder="0"/>
                        </Form.Group>
                        <Form.Group id="material">
                            <Form.Check inline type="checkbox" label="Plastic" id="plastic" ref={plasticRef}/>
                            <Form.Check inline type="checkbox" label="Glass" id="glass" ref={glassRef}/>
                            <Form.Check inline type="checkbox" label="Aluminum" id="aluminum" ref={aluminumRef}/>
                            <Form.Check inline type="checkbox" label="Other" id="other" ref={otherRef}/>
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

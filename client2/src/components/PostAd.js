import React, { useRef, useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import $ from 'jquery';
//import cssClasses from '*.module.css';


import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';




function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          WeCycle
        </Link>{'.com '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    upload : {
        margin: theme.spacing(1)
    }
  }));

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
    const classes = useStyles();

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
            setLoading(true);
            await $.ajax({
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

            setLoading(false);

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
        {/* <link rel = "shortcut icon" type="image/png" href="../../image/favicon-32x32.png"></link>
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
                        <Button disabled={loading} className="w-100" type="submit">Create New Donation Post</Button>
                    </Form>
                </Card.Body>
            </Card> */}

<link rel = "shortcut icon" type="image/png" href="../../image/favicon-32x32.png"></link>
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div classname={classes.paper}>
            <Typography 
            component="h1" 
            variant= "h5" c
            >
                Create a new donation
            </Typography>
            </div>
            <form className={classes.form} noValidate></form>
            <TextField
             variant="outlined"
             margin="normal"
             required
             fullWidth
             id="title"
             label="Title"
             name="Title"
             autoFocus
             inputRef={titleRef}
             />

            <TextField
             variant="outlined"
             margin="normal"
             required
             fullWidth
             id="City"
             label="City/Neighbourhood"
             name="City"
             autoFocus
             inputRef={cityRef}
             />

             <TextField
             variant="outlined"
             margin="normal"
             required
             fullWidth
             id="postalCode"
             label="Postal Code"
             name="Postal Code"
             autoFocus
             inputRef={postalRef}
             />

        <TextField
          id="bottleTotal"
          name="Bottles"
          type="number"
          label="Total bottles"
          fullWidth
          required
          margin="normal"
          variant="outlined"
          inputRef={bottleRef}
        />

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="plastic" color="primary" inputRef={plasticRef} />}
                label="Plastic"
              />
              <FormControlLabel
                control={<Checkbox value="Glass" color="primary" inputRef={glassRef} />}
                label="Glass"
              />
              <FormControlLabel
                control={<Checkbox value="Aluminum" color="primary" inputRef={aluminumRef} />}
                label="Aluminum"
              />
              <FormControlLabel
                control={<Checkbox value="Other" color="primary" inputRef={otherRef} />}
                label="Other"
              />
            </Grid>
            <TextField
             variant="outlined"
             margin="normal"
             required
             fullWidth
             id="description"
             label="Description"
             name="Description"
             autoFocus
             inputRef={descRef}
             />
             
             <TextField
             variant="outlined"
             margin="normal"
             required
             fullWidth
             id="postalCode"
             label="Contact Info"
             name="Contact Info"
             autoFocus
             inputRef={contactRef}
             />

        <Form.Group id="pictures">
        <Form.Control type="file" ref={fileRef} required onChange={handleChange}/>
        <img src={imageState.file} id="previewImage"/>
        </Form.Group>
       
        <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        >
        Submit Donation
        </Button>

            </Container>
        </>

       

    )
}

import React from 'react';
//import { Card, Container } from 'react-bootstrap';
import '../css/about-us.css';
import Navbar from './Navbar';
import Ray from '../images/rayFiltered.png';
import Jason from '../images/jasonFiltered.png';
import Johnson from '../images/jLauFiltered.png';
import Mazin from '../images/mazFiltered.png';

// Components imported from material-ui
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';

// Retrieved photo camera icon from material icons
// See www.material-ui.com/components/material-icons/ to get more icons
import { PhotoCamera } from '@material-ui/icons';

import { makeStyles } from '@material-ui/core/styles';

import waterBottle from '../images/water-bottle.jpg';
import Header from './Header';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: "url(" + waterBottle + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
    },
}));

export default function AboutUs() {
    const classes = useStyles();

    return ( 
    <div className = {classes.root}>
        <CssBaseline />
        <Header />
    </div>
    
    );
}


// export default function AboutUs() {
//     return (
//         <>
//             <Navbar/>
//             {/* <TextBlock></TextBlock> */}
//             <Container>
//                 <Card>
//                     <a href="https://www.linkedin.com/in/rwong97/">
//                     <img src={Ray} class="card-img-top" alt="https://www.linkedin.com/in/rwong97/"/>
//                     </a>
//                     <Card.Body>
//                         <Card.Title class = "card-title">Raymond Wong</Card.Title>
//                         <Card.Text>Ray is a business graduate pursuing a tech career. His specializations are HTML/CSS
//           and JavaScript. He has a passion for giving back and works with Burnaby Neighbourhood House as a
//           digital literacy volunteer.</Card.Text>
//                     </Card.Body>
//                 </Card>

//                 <Card>
//                     <a href="https://www.linkedin.com/in/jasonja-ahn/">
//                         <img src={Jason} class="card-img-top" alt="https://www.linkedin.com/in/jasonja-ahn/"/>
//                     </a>
//                     <Card.Body>
//                         <Card.Title class = "card-title">Jason Ahn</Card.Title>
//                         <Card.Text>Jason Ahn is an aspiring software engineer with a Bachelor's degree in Criminology from
//           Simon Fraser University. Born in South Korea and raised in British Columbia, Canada, Jason currently resides
//           in Vancouver. In his free time, he enjoys eating lasagna like Garfield.</Card.Text>
//                     </Card.Body>
//                 </Card>

//                 <Card>
//                     <a href="https://www.linkedin.com/in/johnsonlau/">
//                         <img src={Johnson} class="card-img-top-johnson" alt="https://www.linkedin.com/in/johnsonlau/" />
//                     </a>
//                     <Card.Body>
//                         <Card.Title class = "card-title">Johnson Lau</Card.Title>
//                         <Card.Text>Johnson Lau is a young software developer looking to improve his skills in the field. Fresh
//           from highschool, he is ready to make a lasting impact through his work. Johnson loves to play volleyball, and
//           cook during his free time.</Card.Text>
//                     </Card.Body>
//                 </Card>

//                 <Card>
//                     <a href="https://www.linkedin.com/in/mazin-marwan-0b3409154/">
//                         <img src={Mazin} class="card-img-top" alt="https://www.linkedin.com/in/mazin-marwan-0b3409154/"/>
//                     </a>
//                     <Card.Body>
//                         <Card.Title class = "card-title">Mazin Marwan</Card.Title>
//                         <Card.Text>Mazin Marwan is a software developer from Vancouver BC seeking to create interesting and
//           interactive applications focused on simplifying workflows for himself and those around him. Mazin loves to
//           play various roleplaying games such as Dungeons and Dragons and write when he has the time.</Card.Text>
//                     </Card.Body>
//                 </Card>
//             </Container>
//         </>
//     )
// }

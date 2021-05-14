import React from 'react';
import { Card, Container } from 'react-bootstrap';
import '../css/about-us.css';
import Navbar from './Navbar';
<<<<<<< HEAD
// import {jasonFiltered, jLauFiltered, rayFiltered, mazFiltered} from '../images/'
=======
import Ray from '../images/rayFiltered.png';
import Jason from '../images/jasonFiltered.png';
import Johnson from '../images/jLauFiltered.png';
import Mazin from '../images/mazFiltered.png';
>>>>>>> eaed68c6e94301a691ee24b37a1903be278d0110

export default function AboutUs() {
    return (
        <>
            <Navbar/>
            {/* <TextBlock></TextBlock> */}
            <Container>
                <Card>
                    <a href="https://www.linkedin.com/in/rwong97/">
<<<<<<< HEAD
                        <img src={require('../images/rayFiltered.png').default} class="card-img-top" alt="https://www.linkedin.com/in/rwong97/"/>
=======
                    <img src={Ray} class="card-img-top" alt="https://www.linkedin.com/in/rwong97/"/>
>>>>>>> eaed68c6e94301a691ee24b37a1903be278d0110
                    </a>
                    <Card.Body>
                        <Card.Title>Raymond Wong</Card.Title>
                        <Card.Text>Ray is a business graduate pursuing a tech career. His specializations are HTML/CSS
          and JavaScript. He has a passion for giving back and works with Burnaby Neighbourhood House as a
          digital literacy volunteer.</Card.Text>
                    </Card.Body>
                </Card>

                <Card>
                    <a href="https://www.linkedin.com/in/jasonja-ahn/">
<<<<<<< HEAD
                        <img src={require('../images/jasonFiltered.png').default} class="card-img-top" alt="https://www.linkedin.com/in/jasonja-ahn/"/>
=======
                        <img src={Jason} class="card-img-top" alt="https://www.linkedin.com/in/jasonja-ahn/"/>
>>>>>>> eaed68c6e94301a691ee24b37a1903be278d0110
                    </a>
                    <Card.Body>
                        <Card.Title>Jason Ahn</Card.Title>
                        <Card.Text>Jason Ahn is an aspiring software engineer with a Bachelor's degree in Criminology from
          Simon Fraser University. Born in South Korea and raised in British Columbia, Canada, Jason currently resides
          in Vancouver. In his free time, he enjoys eating lasagna like Garfield.</Card.Text>
                    </Card.Body>
                </Card>

                <Card>
                    <a href="https://www.linkedin.com/in/johnsonlau/">
<<<<<<< HEAD
                        <img src={require('../images/jLauFiltered.png').default} class="card-img-top" alt="https://www.linkedin.com/in/johnsonlau/"/>
=======
                        <img src={Johnson} class="card-img-top" alt="https://www.linkedin.com/in/johnsonlau/"/>
>>>>>>> eaed68c6e94301a691ee24b37a1903be278d0110
                    </a>
                    <Card.Body>
                        <Card.Title>Johnson Lau</Card.Title>
                        <Card.Text>Johnson Lau is a young software developer looking to improve his skills in the field. Fresh
          from highschool, he is ready to make a lasting impact through his work. Johnson loves to play volleyball, and
          cook during his free time.</Card.Text>
                    </Card.Body>
                </Card>

                <Card>
                    <a href="https://www.linkedin.com/in/mazin-marwan-0b3409154/">
<<<<<<< HEAD
                        <img src={require('../images/mazFiltered.png').default}class="card-img-top" alt="https://www.linkedin.com/in/mazin-marwan-0b3409154/"/>
=======
                        <img src={Mazin} class="card-img-top" alt="https://www.linkedin.com/in/mazin-marwan-0b3409154/"/>
>>>>>>> eaed68c6e94301a691ee24b37a1903be278d0110
                    </a>
                    <Card.Body>
                        <Card.Title>Mazin Marwan</Card.Title>
                        <Card.Text>Mazin Marwan is a software developer from Vancouver BC seeking to create interesting and
          interactive applications focused on simplifying workflows for himself and those around him. Mazin loves to
          play various roleplaying games such as Dungeons and Dragons and write when he has the time.</Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

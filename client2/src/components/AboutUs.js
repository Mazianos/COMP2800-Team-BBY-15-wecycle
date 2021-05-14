import React from 'react';
import { Card, Container } from 'react-bootstrap';
import "../css/about-us.css";
import Navbar from './Navbar';
import {jasonFiltered, jLauFiltered, rayFiltered, mazFiltered} from '../images/images'

export default function AboutUs() {
    return (
        <>
            <Navbar/>
            {/* <TextBlock></TextBlock> */}
            <Container>
                <Card>
                    <a href="https://www.linkedin.com/in/rwong97/">
                        <img src={rayFiltered} class="card-img-top" alt="https://www.linkedin.com/in/rwong97/"/>
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
                        <img src={jasonFiltered} class="card-img-top" alt="https://www.linkedin.com/in/jasonja-ahn/"/>
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
                        <img src={jLauFiltered} class="card-img-top" alt="https://www.linkedin.com/in/johnsonlau/"/>
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
                        <img src={mazFiltered} class="card-img-top" alt="https://www.linkedin.com/in/mazin-marwan-0b3409154/"/>
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

import React from 'react'

export default function AboutUs() {
    return (
        <>
            <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24"class="d-inline-block align-text-top"/>
                wecycle
            </a>
            </div>

        <div class="textBlock">
            <h1>Meet The Team!</h1>
            <h4>We are a global team of nearly 4 professionals.<br /> We have offices in Vancouver, Surrey, Port Moody, and
            Coquitlam</h4>
        </div>

        <div class="container" id="grid-container">


            <div class="card">
            <a href="https://www.linkedin.com/in/rwong97/">
                <img src=".../public/rayFiltered.png" class="card-img-top" alt="https://www.linkedin.com/in/rwong97/"/>
            </a>
            <div class="card-body">
                <h5 class="card-title">Raymond Wong</h5>
                <p class="card-text">Ray is a business graduate pursuing a tech career. His specializations are HTML/CSS
                and JavaScript. He has a passion for giving back and works with Burnaby Neighbourhood House as a
                digital literacy volunteer.</p>
            </div>
            </div>
            <div class="card">
            <a href="https://www.linkedin.com/in/jasonja-ahn/">
                <img src="/images/jasonFiltered.png" class="card-img-top" alt="https://www.linkedin.com/in/jasonja-ahn/"/>
            </a>

            <div class="card-body">
                <h5 class="card-title">Jason Ahn</h5>
                <p class="card-text">Jason Ahn is an aspiring software engineer with a Bachelor's degree in Criminology from
                Simon Fraser University. Born in South Korea and raised in British Columbia, Canada, Jason currently resides
                in Vancouver. In his free time, he enjoys eating lasagna like Garfield.</p>
            </div>
            </div>

            <div class="card">
            <a href="https://www.linkedin.com/in/johnsonlau/">
                <img src="/images/jLauFiltered.png" class="card-img-top" alt="..."/>
            </a>
            <div class="card-body">
                <h5 class="card-title">Johnson Lau</h5>
                <p class="card-text">Johnson Lau is a young software developer looking to improve his skills in the field. Fresh
                from highschool, he is ready to make a lasting impact through his work. Johnson loves to play volleyball, and
                cook during his free time.</p>
            </div>
            </div>
            <div class="card">
            <a href="https://www.linkedin.com/in/mazin-marwan-0b3409154/">
                <img src="..." class="card-img-top" alt="..."/>
            </a>
            <div class="card-body">
                <h5 class="card-title">Mazin Marwan </h5>
                <p class="card-text">Mazin Marwan is a software developer from Vancouver BC seeking to create interesting and
                interactive applications focused on simplifying workflows for himself and those around him. Mazin loves to
                play various roleplaying games such as Dungeons and Dragons and write when he has the time.</p>
            </div>
            </div>
        </div>
    </>
    )
}

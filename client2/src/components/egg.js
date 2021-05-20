const logo = document.querySelector('.bottleLogo');
const section = document.querySelector('section');
const html = document.querySelector('html');
const FPS = 60;

section.style.height = window.innerHeight + 'px';
section.style.width = window.innerWidth + 'px';

//velocity variables for logo

let xPosition = 10;
let yPosition = 10;
let xSpeed = 5;
let ySpeed = 5;

function moveLogo() {

    if (xPosition + logo.clientWidth >= window.innerWidth || xPosition <= 0) {
        xSpeed = -xSpeed;
        section.style.fill = colourChange();
    }
    if (yPosition + logo.clientHeight >= window.innerHeight || yPosition <= 0) {
        ySpeed = -ySpeed;
        section.style.fill = colourChange();
    }
    logo.style.left = xPosition + 'px';
    logo.style.top = yPosition + 'px';

}

setInterval(() => {
    xPosition += xSpeed;
    yPosition += ySpeed;
    moveLogo();

}, 1000 / FPS);


function colourChange() {
    let colour = "#";
    colour += Math.random().toString(16).slice(2, 8).toUpperCase();
    console.log(colour);
    return colour;
}

window.addEventListener('resize', () => {

    xPosition = 10;
    yPosition = 10;


    section.style.height = window.innerHeight + 'px';
    section.style.width = window.innerWidth + 'px';
})
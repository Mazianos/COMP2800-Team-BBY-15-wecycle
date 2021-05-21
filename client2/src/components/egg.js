/*Referenced a youtube video to make bouncing logo easter egg.
@author WEB CIFAR
@see https://www.youtube.com/watch?v=wMIARRCox9k
*/

import { useHistory } from "react-router-dom";

const history = useHistory();
const logo = document.querySelector('.bottleLogo');
const section = document.querySelector('section');
const html = document.querySelector('html');
const FPS = 60;

section.style.height = window.innerHeight + 'px';
section.style.width = window.innerWidth + 'px';

//velocity variables for logo

let xPosition = 10;
let yPosition = 10
let xSpeed = 10;
let ySpeed = 10;

function moveLogo() {

    if (xPosition + logo.clientWidth >= window.innerWidth || xPosition <= 0) {
        xSpeed = -xSpeed;
   
    }
    if (yPosition + logo.clientHeight >= window.innerHeight || yPosition <= 0) {
        ySpeed = -ySpeed;
       
    }
    logo.style.left = xPosition + 'px';
    logo.style.top = yPosition + 'px';
    
}

// interval of how many pixels the logo moves by 
setInterval(()=> {
    xPosition += xSpeed;
    yPosition += ySpeed;
    moveLogo();
    
},1000 / FPS);

//Whenever you resize the screen, logo is reset into the corner and remaps the size of the box the logo can bounce around in
window.addEventListener('resize', () =>{
    
xPosition = 10;
yPosition = 10;


section.style.height = window.innerHeight + 'px';
section.style.width = window.innerWidth + 'px';
})
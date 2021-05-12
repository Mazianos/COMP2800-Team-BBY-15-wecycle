document.querySelector("#finish").addEventListener("click", sendData);

async function sendData(){

    let myData = {
        author: null, // from session data
        title: document.querySelector("#posting-title-form").val(),
        location: document.querySelector("#posting-city-form").val(),
        postalCode: document.querySelector("#postal-code-form").val(),
        type: {
            plastic: document.querySelector("#plastic-description").checked(),
            glass: document.querySelector("glass-description").checked(),
            aluminum: document.querySelector("aluminum-description").checked(),
            other: document.querySelector( "other-description").checked()
        },
        estimatedBottles: document.querySelector("text-estimated-bottle").val(),  // number input for bottles. Sent to user Schema
        description: document.querySelector("post-description").val(),
        contact: document.querySelector("post-contact").val(), // user contact number auto fill?
        postImage: null // upload image, null for now. on client side when rendering. If null --> dummyimage.com
    }


    try {
        const send = await fetch('/create-ad', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(myData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((e) => {
            console.error('Error:', error);
        });
    } catch (err){
        console.error(err);
    }

};



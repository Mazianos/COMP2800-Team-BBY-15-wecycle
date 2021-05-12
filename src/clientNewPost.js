document.querySelector("#finish").addEventListener("click", sendData);

async function sendData(){

    let myData = {
        author: null, // from session data
        title: document.querySelector("#posting-title-form").value,
        location: document.querySelector("#posting-city-form").value,
        postalCode: document.querySelector("#postal-code-form").value,
        type: {
            plastic: document.querySelector("#plastic-checkbox").checked = true|false,
            glass: document.querySelector("#glass-checkbox").checked = true|false,
            aluminum: document.querySelector("#aluminum-checkbox").checked = true|false,
            other: document.querySelector( "#other-checkbox").checked = true|false
        },
        estimatedBottles: document.querySelector("#text-estimated-bottle").value,  // number input for bottles. Sent to user Schema
        description: document.querySelector("#post-description").value,
        contact: document.querySelector("#post-contact").value, // user contact number auto fill?
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



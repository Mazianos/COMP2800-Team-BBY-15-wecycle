document.querySelector("#finish").addEventListener("click", sendData);

// To do: after sending the data, then redirect to ad details or product gallery. 

async function sendData(){

    let myData = {
        author: null, // from session data
        title: document.querySelector("#posting-title-form").value,
        location: document.querySelector("#posting-city-form").value,
        postalCode: document.querySelector("#postal-code-form").value,
        type: {
            plastic: document.querySelector("#plastic-checkbox").checked,
            glass: document.querySelector("#glass-checkbox").checked,
            aluminum: document.querySelector("#aluminum-checkbox").checked,
            other: document.querySelector( "#other-checkbox").checked
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



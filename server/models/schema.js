'use strict';

// load the things we need
var mongoose = require('mongoose');

//var bcrpyt = rquire('bcrypt-nodejs);


var postSchema = new mongoose.Schema({
    author: String, //userID FK in this 
    title: String,
    location: String,
    postalCode: String,
    type: {
        plastic: Boolean,
        glass: Boolean,
        aluminum: Boolean,
        other: Boolean
    },
    estimatedBottles: Number,  // number input for bottles. Sent to user Schema
    description: String,
    contact: String, // user contact number auto fill?
    postImage: String, // upload image
    status: { type: String, default: "Open"},
    postDate: { type: Date, default: Date.now } // need date for the history of ad posting
});


    
var userSchema = new mongoose.Schema({
    name: String,
    contactNumber: String,      
    bottlesDonated: Number,     // updates to the respective donor/collecotr
    bottlesTaken: Number,       // only updated when 'finished' is clicked
    address: String,
    _id: String,
    email: String
});

// create the model for users and expose it to our app
module.exports = {
    Post: mongoose.model('Post', postSchema),  // add a third parameter to specify collection... creates new if it doesnt exist
    User: mongoose.model('User', userSchema)
};
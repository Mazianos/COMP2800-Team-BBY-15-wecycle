'use strict';

const PORT = process.env.PORT || 8001;  // 3001 for react
const express = require("express");
const mongoose = require('mongoose');
const app = express();
const fs = require("fs");
const bodyParser  = require('body-parser');
const credentials = fs.readFileSync("./server/cert.pem");
const url = "mongodb+srv://wecycle-vancouver.2hson.mongodb.net/WecycleMain?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority";

// IMPORT SCHEMAS
const myModels = require('./models/schema.js');
const path = require('path');

// mongoose.connect comes first
async function connectToDB(){
  try {
    await mongoose.connect(url, {
      sslKey: credentials,
      sslCert: credentials,
      useNewUrlParser: true, 
      useUnifiedTopology: true}
    );
  } catch (err){
    console.error(err);
  };
};
connectToDB();

const db = mongoose.connection;
// line code 22-25 retrieved from https://www.mongoosejs.com/docs/

db.on('error',  console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("mongoose running");
});



// For hosting  ** THIS IS REQUIRED*** 
app.use(express.static(path.resolve(__dirname, '../client2/build')));
// app.use(express.static(path.resolve(__dirname, '../client2/public')));

app.use("/src", express.static("./src/"));
app.use("/css", express.static("css"));
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());


// EXPRESS METHODS

app.post("/create-ad", async function (req, res){
  res.setHeader('Content-Type', 'application/json');
  var newPost = new myModels.Post({
    author: req.body.author, //userID FK in this 
    title: req.body.title,
    postalCode: req.body.postalCode,
    type: {
        plastic: req.body.type.plastic,
        glass: req.body.type.glass,
        aluminum: req.body.type.aluminum,
        other: req.body.type.other
    },
    // estimatedBottles: req.body.estimatedBottles,  // number input for bottles. Sent to user Schema
    description: req.body.description,
    contact: req.body.contact, // user contact number auto fill?
    postImage: null // upload image, null for now. on client side when rendering. If null --> dummyimage.com
    // status: req.body. unused, default open
  })

  newPost.save(function(err, newPost){
    if (err) return console.error(err);
  });
  
  res.send({ status: "success", msg: "post created." });
});

app.post("/create-user", async function (req, res) {
  var newUser = new myModels.User({
    name: req.body.name,
    contactNumber: req.body.contactNumber,
    bottlesDonated: 0,
    bottlesTaken: 0,
    address: req.body.address,
    _id: req.body.id
  });

  newUser.save(function(err, newUser) {
    if (err) return console.error(err);
  })
});

// when landing page loads, then run this request to determine the # of cards we need to dynamically generate. -Ray
app.post("/get-count-records", function (req, res) {
  res.setHeader('Content-Type', 'application/json');

  let count = db.collection("posts").countDocuments({
    status: 'open' || 'pending'
  });

  res.send({ records: `${count}` });

})

// get all open or pending records
app.get("/get-landing-records", function (req, res) {
  // res.setHeader('Content-Type', 'application/json');

  getData().catch((err) => console.error(err));

  async function getData() {
    let dataToSend = await db.collection("posts").find({
      status: 'Open' //|| 'pending'
    }).toArray();

    console.log(dataToSend);

    res.json(dataToSend);
  
  }
})

// Similar to loading all the landing recording. But only one record... and complete info displayed
app.get("/postDetails/:postID", function(req, res) {
  getData().catch((err) => console.error(err));

  async function getData() {
    let dataToSend = await db.collection("posts")
      .findByID(req.params.postID)
      .toArray();

    console.log(dataToSend);

    res.json(dataToSend);
  
  }
})


// **May 13, 2021 Ray: If above routes arent captured then we send to React's index.html as / 
// this is for aws hosting
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client2/build', 'index.html'));
  // res.sendFile(path.resolve(__dirname, '../client2/public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
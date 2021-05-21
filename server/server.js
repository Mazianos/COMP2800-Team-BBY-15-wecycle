'use strict';

const PORT = process.env.PORT || 8001;  // 3001 for react
const express = require("express");
const mongoose = require('mongoose');
const app = express();
const fs = require("fs");
const bodyParser  = require('body-parser');
const credentials = fs.readFileSync("./cert.pem");
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

//Add a new ad
app.post("/create-ad", async function (req, res){
  console.log(req.file);
  res.setHeader('Content-Type', 'application/json');
  myModels.User.findOne({

  })
  var newPost = new myModels.Post({
    authorID: req.body.authorID, //userID FK in this 
    authorName: req.body.authorName,
    title: req.body.title,
    location: req.body.location,
    postalCode: req.body.postalCode,
    type: {
        plastic: req.body.type.plastic,
        glass: req.body.type.glass,
        aluminum: req.body.type.aluminum,
        other: req.body.type.other
    },
    description: req.body.description,
    contact: req.body.contact, // user contact number auto fill?
    postImage: null, //req.file.postImage, //May 18th Changed to an image that user can post
    totalBottles: req.body.estimatedBottles
  })

  app.post("/", (req, res) => {
    image.findById(req.params.id)
    .then((image) => {
      image.title = req.body.title,
      image.image = req.body.image,
      image.author = req.body.author,
      image.postImage = req.file.path
    })
  });

  newPost.save(function(err, newPost){
    if (err) return console.error(err);
  });
  
  res.send({ status: "success", msg: "post created." });
});

app.post("/create-user", function (req, res) {
  console.log("Call to server successful");
  let newUser = new myModels.User({
    name: req.body.name,
    contactNumber: req.body.contactNumber,
    bottlesDonated: 0,
    bottlesTaken: 0,
    address: req.body.address,
    _id: req.body.id,
    email: req.body.email
  });

  newUser.save(function(err, newUser) {
    if (err) return console.error(err);
  })
});



app.get("/generate-active-donations/:id", function (req, res) {
  console.log("Call to query db successful, returning active donations");
  
  async function getData() {
    let dataToSend = await db.collection("posts")
      .find({collectorID: req.params.id, status: "Open"}).toArray();

    console.log(dataToSend);

    res.json(dataToSend);
  
  }
  getData().catch((err) => console.error(err));

})


app.get("/generate-complete-donations/:id", function (req, res) {
  console.log("Call to query db successful, returning completed donations");
  
  async function getData() {
    let dataToSend = await db.collection("posts")
      .find({collectorID: req.params.id, status: "Closed"}).toArray();

    console.log(dataToSend);

    res.json(dataToSend);
  
  }
  
  getData().catch((err) => console.error(err));

});


app.get("/getName/:id", function (req, res) {
  console.log("Call to server for user's name successful");
  async function getData() {
    let response = await db.collection("users").findOne({_id: req.params.id});
    console.log("Returned document: " + response);
    res.send(response);
  }
  getData();
});


// when landing page loads, then run this request to determine the # of cards we need to dynamically generate. -Ray
app.post("/get-count-records", function (req, res) {

  res.setHeader('Content-Type', 'application/json');

  let count = db.collection("posts").countDocuments({
    status: 'Open' || 'pending'
  });

  res.send({ records: `${count}` });

})

// get all open or pending records
app.get("/get-landing-records", function (req, res) {
  // res.setHeader('Content-Type', 'application/json');


  async function getData() {
    let dataToSend = await db.collection("posts").find({
      status: 'Open' //|| 'pending'
    }).toArray();

    console.log(dataToSend);

    res.json(dataToSend);
  
  }
  getData().catch((err) => console.error(err));
})

// Similar to loading all the landing recording. But only one record... and complete info displayed
app.get("/postDetails/:postID", function(req, res) {

  const _postID = req.params.postID;
  console.log(_postID, "server side is called")
  
  getData().catch((err) => console.error(err));
  async function getData() {
    let dataToSend = await db.collection("posts")
      .find({_id: mongoose.Types.ObjectId(_postID)})
      .toArray();

    console.log(dataToSend);

    res.json(dataToSend);
  
  }
})


app.post("/claim_Req", (req, res) => {
  // console.log("Claim Request received", req.body.myData, req.body.myData._id); 
  res.setHeader('Content-Type', 'application/json');


  async function updatePost() {
    db.collection("posts")
      .updateOne({_id: mongoose.Types.ObjectId(req.body.postID)},
      { $set: {"collectorID": `${req.body.postCollector}`, "status": "Closed"}})
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
      console.log(req.body.postID, req.body.status, req.params.postID, "testing on the backend");
  }
  updatePost();


  res.send({ records: `claim req success` });
})

app.post("update-own-post", (req, res) => {
  db.collection("posts").replaceOne({
    _id: mongoose.Types.ObjectId(req.body._id),
    }, {
      authorID: req.body.authorID,
      authorName: req.body.authorName,
      title: req.body.title,
      postalCode: req.body.postalCode,
      type: {
        plastic: req.body.plastic,
        glass: req.body.glass,
        aluminum: req.body.aluminum,
        other: req.body.other
      },
      totalBottles: req.body.totalBottles,
      description: req.body.description,
      contact: req.body.contact,
      postImage: req.body.imageURL,
      collectorID: null,
      status: "Open",
      postDate: req.body.date
    });
})

app.get('/get-own-post/:id', (req, res) => {
  console.log("Call to server for user's own post successful");
  async function getOwnPost(){
    let dataToSend = await db.collection("posts").find({
      authorID: req.params.id,
      status: "Open"
    }).toArray();
    console.log("Returning own post: " + dataToSend);
    res.send(dataToSend);
  }
  getOwnPost();

  
});

// **May 13, 2021 Ray: If above routes arent captured then we send to React's index.html as / 
// this is for aws hosting
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client2/build', 'index.html'));
  // res.sendFile(path.resolve(__dirname, '../client2/public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
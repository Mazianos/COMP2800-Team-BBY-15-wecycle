'use strict';

const PORT = process.env.PORT || 8001;  // 3001 for react
const express = require("express");
const mongoose = require('mongoose');
const app = express();
const fs = require("fs");
const bodyParser  = require('body-parser');
const credentials = fs.readFileSync("./cert.pem");
const url = "mongodb+srv://wecycle-vancouver.2hson.mongodb.net/WecycleMain?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority";
const multer = require("multer");
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


const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "../client2/src/images/uploads"); 
  },
  filename: (req, file, callback) => {
    callback(null, file.originalName);
  }
})

const upload = multer({storage: storage});



// For hosting  ** THIS IS REQUIRED*** 
app.use(express.static(path.resolve(__dirname, '../client2/build')));
// app.use(express.static(path.resolve(__dirname, '../client2/public')));

app.use("/src", express.static("./src/"));
app.use("/css", express.static("css"));
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());


// EXPRESS METHODS

//Add a new ad
app.post("/create-ad", upload.single("postImage"), async function (req, res){
  console.log(req.file);
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
    description: req.body.description,
    contact: req.body.contact, // user contact number auto fill?
    postImage: req.file.postImage //May 18th Changed to an image that user can post
  });

  app.post("/", upload.single("postImage"), (req, res) => {
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

app.post("/create-user", async function (req, res) {
  console.log("accessing server side");
  var newUser = new myModels.User({
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
  console.log(req.params.postID, "server side is called")
  async function getData() {
    let dataToSend = await db.collection("posts")
      .find({id: req.params.postID})
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
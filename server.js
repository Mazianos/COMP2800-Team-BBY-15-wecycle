'use strict';

const PORT = process.env.PORT || 8000;  // 3001 for node
const express = require("express");
const mongoose = require('mongoose');
const app = express();
const fs = require("fs");
const bodyParser  = require('body-parser');
const credentials = fs.readFileSync("./cert.pem");
const url = "mongodb+srv://wecycle-vancouver.2hson.mongodb.net/WecycleMain?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority";
// IMPORT SCHEMAS
const myModels = require('./models/schema.js');

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
  // we're connected!
  // var testPost = new myModels.Post({
  //   title: "this is just a test"
  // })
  // // THIS IS TAKING WAY TOO LONG. WHY/?? 
  // console.log(testPost.title); 
  // // test send data to mongodb atlas 
  // // Expectation2: creates collection if it doesnt exit
  // // Expectation: only title, everything else null.
  // // try to send test post to mongodb.


  // testPost.save(function(err, testPost){
  //   if (err) return console.error(err);
  // });


});


const {
  MongoClient,
  ObjectID  // we may actually ned the object id
} = require("mongodb");

app.use("/src", express.static("./src/"));
app.use("/css", express.static("css"));
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());



const client = new MongoClient(
  "mongodb+srv://wecycle-vancouver.2hson.mongodb.net/myFirstDatabase?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority", {
  sslKey: credentials,
  sslCert: credentials,
  useUnifiedTopology: true
}
);

client.connect().then(function () {
  console.log("check before the db run");
});


// EXPRESS METHODS

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/post_ad_page_1.html"); //"/public/index.html" <-- change this back in dev.
  // res.sendFile(__dirname + "/src/index.js");
});


app.post("/create-ad", async function (req, res){
  res.setHeader('Content-Type', 'application/json');
  var newPost = new myModels.Post({
    author: req.body.author, //userID FK in this 
    title: req.body.title,
    location: req.body.location,
    postalCode: req.body.postalCode,
    type: {
        plastic: req.body.type.plastic,
        glass: req.body.type.glass,
        aluminum: req.body.type.aluminum,
        other: req.body.type.other
    },
    estimatedBottles: req.body.estimatedBottles,  // number input for bottles. Sent to user Schema
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


// THIS POST CREATES A TABLE DATA WITH USE OF MONGODB
app.post("/create-table", function (req, res) {

  res.setHeader('Content-Type', 'application/json');

  console.log(req.body.name);

  // The values added stores into MongoDB collections
  function addToUsersCollection(
    nameValue = req.body.name,
    contactNumberValue = req.body.contactNumber,
    bottlesDonatedValue = req.body.bottlesDonated,
    bottlesTakenValue = req.body.bottlesTaken,
    addressValue = req.body.address,
  ) {
    client.db("WecycleMain").collection("Users").insertOne({
      name: nameValue,
      contactNumber: contactNumberValue,
      bottlesDonated: bottlesDonatedValue,
      bottlesTaken: bottlesTakenValue,
      address: addressValue,
    });
  }
  addToUsersCollection();

  res.send({ status: "success", msg: "Recorded updated." });

});

app.get('/', function (req, res) {
  let doc = fs.readFileSync('./index.html', "utf8");
  res.send(doc);
});


app.get("/read-table", function (req, res) {
  res.setHeader("Content-Type", "application/json");

  // where 'client' is a constant of the mongodb atlas url + SSL certificates


  async function grabData() {
    client.db("WecycleMain").collection("Users")
      .find()
      .toArray()
      .then((data) => {
        res.json(data); //is this part wrong?
      })
      .catch((error) => console.error(error));
  };


  try {
    grabData();
  } catch (err) {
    throw new Error("grab data didnt execute properly");
  }


});

//when updating, use number.parseInt()
app.post("/update-table/", function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  async function update() {
    client.db("WecycleMain").collection("Users").updateOne(
      {_id: ObjectID(req.body.id)},
      {$set: req.body.data}).catch((error) => console.log(error));
  };
  update();

    res.send({ status: "success", msg: "Update worked" });    
});

app.post("/delete-row/:id", function (req, res) {
  //Find the id of the user from the parameters in the request. Use that id to find it and delete it
  let id = req.params.id;
  client.db("WecycleMain").collection("Users").findOneAndDelete({
    _id: ObjectID(id)
  });
  //Respond with the remaining users in the db as a json array.
  client.db("WecycleMain").collection("Users")
    .find()
    .toArray()
    .then((data) => {
      res.json(data);
    })
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
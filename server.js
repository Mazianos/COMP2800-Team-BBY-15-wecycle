'use strict';

const PORT = 8000;
const express = require("express");
const mongoose = require('mongoose');
const app = express();
const fs = require("fs");
const bodyParser  = require('body-parser');
const url = "mongodb+srv://wecycle-vancouver.2hson.mongodb.net/myFirstDatabase?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority";


mongoose.connect(url, {
  sslKey: credentials,
  sslCert: credentials,
  useNewUrlParser: true, 
  useUnifiedTopology: true}
);

const {
  MongoClient,
  ObjectID
} = require("mongodb");

app.use("/js", express.static("js"));
app.use("/css", express.static("css"));
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

const credentials = fs.readFileSync("./cert.pem");

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
  res.sendFile(__dirname + "/html/index.html");
});

app.post("/create-ad", function (req, res){
  res.setHeader('Content-Type', 'application/json');

  async function newPosting() {
    try {
      client.db("WecycleMain").collection("AdPost").insertOne({
        author: null, //from session cache
        title: req.body.title,
        location: req.body.location,
        postalCode: req.body.postalCode,
        type: {
          plastic: req.body.plastic, // checkbox true or false
          glass: req.body.glass,
          aluminum: req.body.aluminum,
          other: req.body.other
        },
        description: req.body.description, //in html, the id's of description and ocntact info are same
        contact: req.body.contact,
        
      });
    } catch (err){
      console.log(err);
    };
  };
  newPosting();
  res.send({ status: "success", msg: "Recorded updated." });
})

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
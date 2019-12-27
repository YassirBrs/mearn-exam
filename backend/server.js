var express = require("express");
var http = require("http");
var path = require("path");
const cors = require("cors");

var mongoose = require("mongoose");
const usersRouter = require("./routes/users");

var config = require("./config");

// connect to mongoDB
mongoose.connect(config.dbUrl);
mongoose.connection.on("connected", () => {
  console.log("Connection Established to MongoDB database");
});

mongoose.connection.on("error", err => {
  console.log("Error at mongoDB: " + err);
});

var port = 5000;
var app = express();
app.use(cors());
app.use(express.json());
app.use("/users", usersRouter);

// set public resoures folder
app.use(express.static(__dirname + "/public"));

// set your first route
app.get("/main", (req, res) => {
  // res.send('Hello Nodemon!');
  res.sendFile(path.join(__dirname, "public/index.html"));
});

var server = http.createServer(app);
server.listen(port, () => {
  console.log("Server is starting = " + port);
});

const express = require("express"),
  {
    secret,
    mongoUri,
    mongo: { user, port: mongoPort, host, db }
  } = require("./server.config.js"),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  port = 3001,
  app = express(),
  mongoose = require("mongoose"),
  session = require("express-session"),
  { getTodos, addTodo } = require("./ctrl");

var whitelist = ["http://localhost:4200", "http://live-website.com"];
var corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
};
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(
  session({
    secret,
    resave: true,
    saveUninitialized: true
  })
);
app.get("/todos", getTodos);
// app.use("/", express.static(__dirname + "/build"));
mongoose.connect(mongoUri, { useNewUrlParser: true }, () => {
  console.log("Connected to mongo database.");
});

app.listen(port, () => {
  console.log("Server listening on port", port);
});

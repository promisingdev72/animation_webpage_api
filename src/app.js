const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

const corsOptions = {
  origin: "http://localhost:3000",
  live: "http://alitheia-studios.ch",
};

app.use(cors(corsOptions.origin));
app.use(cors(corsOptions.live));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
require("./routes/request.routes")(app);

module.exports = app;

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const server = express();
const port = 4200;

server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, "../client/public")));

server.listen(port, () => console.log("client server listening to " + port));

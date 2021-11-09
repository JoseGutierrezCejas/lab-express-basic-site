const express = require("express");
const app = express();


app.use(express.static("public"));


app.get("/", (request, response) => {
  '
  res.sendFile(__dirname + "/views/home.html");
});


app.get("/about", (request, response) => {
  res.sendFile(__dirname + "/views/about.html");
});


app.get("/gallery", (request, response) => {
  res.sendFile(__dirname + "/views/gallery.html");
});

app.listen(3000, () => {
});
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

const contactRoutes = require("./routes/Contact");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

app.use(contactRoutes);

app.get("/", (req, res, next) => {
  res.send("<h1>Welcome to my backend. Now git out!</h1>");
});

mongoose
  .connect(process.env.MONGODB_ID)
  .then(() => console.log("Server started"))
  .catch((err) => console.log("err is", err));
app.listen(process.env.PORT || 8080, console.log("Listening on port 8080"));

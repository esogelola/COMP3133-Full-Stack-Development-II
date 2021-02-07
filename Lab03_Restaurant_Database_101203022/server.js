const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const RestaurantRoute = require("./routes/RestaurantRoute.js");
const dotenv = require("dotenv");
dotenv.config();

const DB_URL = `mongodb+srv://ameroft:${process.env.DB_PASSWORD}@cluster0.dcuv4.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(RestaurantRoute);

mongoose.Promise = global.Promise;

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.send(
    "<h1>Welcome to Restaurant taking application - Week06 Exercise</h1>"
  );
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});

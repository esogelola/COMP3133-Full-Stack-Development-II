const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoutes.js");
const dotenv = require("dotenv");
dotenv.config();
const DB_URL = `mongodb+srv://ameroft:${process.env.DB_PASSWORD}@cluster0.dcuv4.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const app = express();
app.use(express.json()); // Make sure it comes back as json

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
app.get("/messages", (req, res) => {
  if (req.query.room) {
    Message.find({ room: req.query.room }, (err, messages) => {
      res.send(messages);
    });
  } else {
    res.sendStatus(500);
  }
});

app.use(userRouter);

var server = app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});

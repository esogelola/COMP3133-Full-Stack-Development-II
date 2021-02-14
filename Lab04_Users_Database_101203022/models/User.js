const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a name"],
    trim: true,
    lowercase: true,
  },
  username: {
    type: String,
    required: [true, "Please enter a username"],
    trim: true,
    minLength: [4, "minimum username length is 4"],
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Duplicate Email Not allowed"],
    trim: true,
    uppercase: true,

    validate: function (value) {
      var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      return emailRegex.test(value);
    },
  },
  address: {
    street: {
      type: String,
      required: [true, "Please enter a street"],
      trim: true,
      lowercase: true,
    },
    suite: {
      type: String,
      required: [true, "Please enter a street"],
      trim: true,
      lowercase: true,
    },
    city: {
      type: String,
      required: [true, "Please enter a street"],
      trim: true,
      lowercase: true,
    },
    zipcode: {
      type: String,
      required: [true, "Please enter a street"],
      trim: true,
      lowercase: true,
      validate: {
        validator: function (v) {
          return /\d{5}-\d{4}/.test(v);
        },
        message: (props) => `${props.value} is not a valid zip code!`,
      },
    },
    geo: {
      lat: {
        type: Number,
        required: true,
      },
      lng: {
        type: Number,
        required: true,
      },
    },
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /\d{1}-\d{3}-\d{3}-\d{3}/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
  website: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/.test(
          v
        );
      },
      message: "Invalid Website",
    },
  },
  company: {
    name: {
      type: String,
      required: true,
    },
    catchPhrase: {
      type: String,
      required: true,
    },
    bs: {
      type: String,
      required: true,
    },
  },
});
const User = mongoose.model("User", UserSchema);
module.exports = User;

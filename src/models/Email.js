const mongoose = require("mongoose");

const { Schema } = mongoose;

const emailSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  hashedPassword: {
    type: String,
    required: true,
  },
  linked: {
    type: [String],
    default: [],
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  profilePicture: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  lastLoginAt: {
    type: Date,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  isSold: {
    type: Boolean,
    default: false,
  },
  soldAt: {
    type: Date,
  },
});

const Email = mongoose.model("Email", emailSchema);

module.exports = Email;

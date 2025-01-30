const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  googleId: { type: String, required: true, unique: true },
  username: { type: String, required: true, default: "web.lab player" },
  profilePicture: { type: String, default: "/foxegg.png" }, 
  correctGuesses: { type: Number, default: 0 }
});


// compile model from schema
module.exports = mongoose.model("user", UserSchema);

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  googleId: { type: String, required: true, unique: true },
  username: { type: String, required: true, default: "web.lab player" },
  profilePicture: { type: String, default: "/srcimages/foxegg.png" }, // ✅ Correct way
  correctGuesses: { type: Number, default: 0 } // ✅ Correct way
});


// compile model from schema
module.exports = mongoose.model("user", UserSchema);

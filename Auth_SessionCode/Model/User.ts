import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
});

userSchema.pre("save", function (next) {
  var userModel = this;
  console.log("here");
  if (!userModel.isModified("password")) return next();
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);
    bcrypt.hash(userModel.get("password"), salt, (err, hash) => {
      if (err) return next(err);
      userModel.set("password", hash);
      next();
    });
  });
});

const User = mongoose.model("User", userSchema);
export default User;

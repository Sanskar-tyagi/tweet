const mongo = require("mongoose");

const userSchema = new mongo.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    maxlength: 50,
  },
  Tweets: [
    {
      imageURL: {
        type: String,
      },
      message: {
        type: String,
        required: true,
      },
      LikesCount: {
        type: Number,
        default: 0,
      },
      reTweetCount: {
        type: Number,
        default: 0,
      },
    },
  ],
});
const UserTable = new mongo.model("users", userSchema);
module.exports = UserTable;

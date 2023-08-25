const express = require("express");

const cors = require("cors");
const app = express();
const UserTable = require("./Models/UserModel");
const mongo = require("mongoose");
const mongoURI =
  "mongodb+srv://Tyagi:VsiZ6iyBA4TZy2ep@cluster0.nmn9br7.mongodb.net/?retryWrites=true&w=majority";
app.use(express.json());
app.use(cors());
app.post("/CreatePost", async (req, res) => {
  try {
    const tweetData = req.body.tweetData;

    const user = await UserTable.findOne({ email: tweetData.email });
    if (user) {
      const updateRes = await UserTable.updateOne(
        {
          email: tweetData.email,
        },
        {
          $push: {
            Tweets: tweetData.Tweets,
          },
        }
      );
      res.send({ message: "TweetAdded" });
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
app.post("/SignUp", async (req, res) => {
  try {
    const userData = req.body.userData;
    const newUser = new UserTable({
      email: userData.email,
      name: userData.name,
      Tweets: [],
    });
    await newUser.save();
    res.send({ message: "User created successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
mongo
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Your DB is connected.");
    app.listen(5000, () => {
      console.log("Server served at 5000");
    });
  })
  .catch((err) => {
    console.log("Error connecting to DB", err);
  });

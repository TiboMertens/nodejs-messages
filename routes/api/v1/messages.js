//require express
const express = require("express");
const mongoose = require("mongoose");
const schema = mongoose.Schema;
const messageSchema = new schema({
  id: Number,
  user: String,
  message: String,
});
const Message = mongoose.model("Message", messageSchema);

//create router
const router = express.Router();

router.post("/", async (req, res) => {
  // Create a new instance of the Message model
  const message = new Message();
  message.message = req.body.message.text;
  message.user = req.body.message.user;

  try {
    // Save the message using async/await
    const savedMessage = await message.save();
    res.json({
      status: "success",
      message: `POSTING a new message for user ${message.user}`,
      data: savedMessage,
    });
  } catch (err) {
    // Handle any errors
    console.error(err);
    res
      .status(500)
      .json({ status: "error", message: "Error saving the message" });
  }
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const message = req.body.message;

  res.json({
    status: "success",
    message: `UPDATE message with id ${id}`,
  });
});

router.delete("/:id", (req, res) => {
  let id = req.params.id;

  res.json({
    status: "success",
    message: `DELETE message with id ${id}`,
  });
});

router.get("/", async (req, res) => {
  try {
    // Find all messages with username in the url, otherwise return all messages
    const username = req.query.user;
    if (username) {
      const messages = await Message.find({ user: username });
      res.json({
        status: "success",
        message: `GET all messages with username ${username}`,
        data: messages,
      });
    } else {
      const messages = await Message.find();
      res.json({
        status: "success",
        message: "GET all messages",
        data: messages,
      });
    }
  } catch (err) {
    // Handle any errors
    console.error(err);
    res
      .status(500)
      .json({ status: "error", message: "Error getting messages" });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const message = await Message.find({ id: id });
    res.json({
      status: "success",
      message: `GET message with id ${id}`,
    });
  } catch (err) {
    // Handle any errors
    console.error(err);
    res
      .status(500)
      .json({ status: "error", message: "Error getting messages" });
  }
});

module.exports = router;

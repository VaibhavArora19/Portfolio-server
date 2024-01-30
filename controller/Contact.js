require("dotenv").config();
const Message = require("../model/message");

exports.postContact = async (req, res, next) => {
  const { firstName, lastName, email, message } = req.body;

  const newMessage = new Message({
    name: firstName + lastName,
    email,
    message,
  });

  await newMessage.save();

  res.send({ message: "Successfully sent" });
};

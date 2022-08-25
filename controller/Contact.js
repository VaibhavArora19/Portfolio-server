require("dotenv").config();
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");

exports.postContact = async (req, res, next) => {
  const { firstName, lastName, email, message } = req.body;

  const transporter = nodemailer.createTransport(
    sendgridTransport({
      auth: {
        api_key: process.env.SENDGRID_KEY,
      },
    })
  );

  const info = await transporter.sendMail({
    from: "aroravaibhav817@gmail.com",
    to: email,
    subject: "Thanks for reaching out",
    html: `Hello ${firstName}, Thanks for reaching out. I have received your mail and will reach out to you as soon as I can 😀 <br /><br/>Thanks for having patience. <br/><br/>If your message is urgent don't hesitate to contact me on <a href = "https://twitter.com/Vaibhavtwts">Twitter</a> 🤝<br/><br/> Likewise you can also connect with me on <a href = "https://www.instagram.com/vaibhavarora.19/">Instagram</a> and we will have some chit-chat while eating noodles 🍜 with some nice tea ☕`,
  });

  const details = await transporter.sendMail({
    from: "aroravaibhav817@gmail.com",
    to: "kingkratos767@gmail.com",
    subject: "Vaibhav someone just contacted you!",
    html: `Their name is ${firstName} ${lastName} \n Their email is ${email} \n Thier message is ${message}`,
  });

  res.send({ message: "Successfully sent" });
};

// server.js

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors(
  {
    origin: ['https://ayadzakaria.vercel.app/','https://ayadzakaria-git-main-ayadzakaria.vercel.app/'],
    methods: ['GET','POST','PUT']
  }
));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configure nodemailer with your email service provider
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "electrobrahim651@gmail.com",
    pass: "klai wbbp nlan bkjo",
  },
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

// API endpoint to send emails
app.post("/sendEmail", (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: "electrobrahim651@gmail.com",
    to: "ayadzakaria.pro@gmail.com",
    subject: subject,
    text: ` Message From Portfolio :\n Name: ${name}\n Email: ${email}\n Message: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Failed to send email" });
    } else {
      console.log("Email sent: " + info.response);
      res.json({ success: true, message: "Email sent successfully" });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

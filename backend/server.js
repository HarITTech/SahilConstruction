const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Contact API
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your-email@gmail.com",   // replace
      pass: "your-app-password"       // Gmail App Password
    }
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "your-email@gmail.com",
      subject: `New Message from ${name}`,
      text: message,
    });
    res.status(200).json({ success: true, message: "Message sent successfully" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));

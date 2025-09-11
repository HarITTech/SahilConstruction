const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Email transporter setup (Gmail with App Password)
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "piyushninawe17@gmail.com",
        pass: "wzxw vxkg ujxr rmhk", // ⚠️ Use Gmail App Password, not your real password
    },
});

// Route to send email
app.post("/send-mail", async (req, res) => {
    const { name, email, phone, message } = req.body;

    const mailOptions = {
        from: '"Sahil Construction Contact" <piyushninawe17@gmail.com>', // always your email
        to: "piyushninawe17@gmail.com", // where you want to receive the message
        subject: "📬 New Contact Mail Received",
        text: `You received a new contact message:

Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
    `,
        replyTo: email, // so you can reply directly to the user
    };

    try {
        await transporter.sendMail(mailOptions);
        res.send({ success: true, message: "Mail sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).send({ success: false, message: "Email failed to send" });
    }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});

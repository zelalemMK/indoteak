const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cros = require("cors");
const password = require("./password");

const app = express();
const port = process.env.PORT || 3001;


// Replace the following with your own email details
const EMAIL_USER = "zelliott33@gmail.com";
const EMAIL_PASS = password;
const RECEIVER_EMAIL = "mekonnenzs99@gmail.com";

app.use(bodyParser.json());
app.use(cros())

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

app.post("/send-form", (req, res) => {
  const { name, email, firm, project, address, city, state, zip } = req.body;
  const mailOptions = {
    from: EMAIL_USER,
    to: RECEIVER_EMAIL,
    subject: "New Form Submission",
    html: `
            <h1>Form Details</h1>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Firm:</strong> ${firm}</p>
            <p><strong>Project:</strong> ${project}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>City:</strong> ${city}</p>
            <p><strong>State:</strong> ${state}</p>
            <p><strong>ZIP:</strong> ${zip}</p>
        `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).send("Error sending email");
    }
    res.status(200).send("Email sent successfully: " + info.response);
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

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
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Form Submission Details</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        line-height: 1.6;
                        color: #333;
                        padding: 20px;
                        background-color: #f4f4f4;
                    }
                    h1 {
                        color: #333;
                        margin-bottom: 20px;
                    }
                    table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-top: 20px;
                    }
                    th, td {
                        padding: 10px;
                        text-align: left;
                        border-bottom: 1px solid #ddd;
                    }
                    th {
                        background-color: #333;
                        color: white;
                    }
                    tr:nth-child(even) {
                        background-color: #f2f2f2;
                    }
                </style>
            </head>
            <body>
                <h1>Form Submission Details</h1>
                <table>
                    <tr>
                        <th>Field</th>
                        <th>Value</th>
                    </tr>
                    <tr>
                        <td><strong>Name</strong></td>
                        <td>${name}</td>
                    </tr>
                    <tr>
                        <td><strong>Email</strong></td>
                        <td>${email}</td>
                    </tr>
                    <tr>
                        <td><strong>Firm</strong></td>
                        <td>${firm}</td>
                    </tr>
                    <tr>
                        <td><strong>Project</strong></td>
                        <td>${project}</td>
                    </tr>
                    <tr>
                        <td><strong>Address</strong></td>
                        <td>${address}</td>
                    </tr>
                    <tr>
                        <td><strong>City</strong></td>
                        <td>${city}</td>
                    </tr>
                    <tr>
                        <td><strong>State</strong></td>
                        <td>${state}</td>
                    </tr>
                    <tr>
                        <td><strong>ZIP</strong></td>
                        <td>${zip}</td>
                    </tr>
                </table>
            </body>
            </html>
          `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).send("Error sending email");
    }
    res.status(200).send("Email sent successfully: " + info.response);
    console.log("Email sent");
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

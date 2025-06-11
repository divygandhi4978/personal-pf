import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "codewithease4978@gmail.com",
    pass: process.env.appKey, // not the password of the id generate password for app
  },
});

const mailOptions = {
  from: "codewithease4978@gmail.com",
  to: "divygandhi4978@gmail.com",
  subject: "Someone submitted on PersonalPortfolio form",
  text: "Someone submitted on PersonalPortfolio form",
};

const info = () =>
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });

module.exports = info;

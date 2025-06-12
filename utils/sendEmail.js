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

const sendMail = async ({ senderName, senderEmail, senderOrg, senderMsg }) => {
  try {
    // To owner
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: "divygandhi4978@gmail.com",
      subject: `New message from ${senderName}`,
      html: `
        <h2>New Message from Contact Form of PersonalPortfolio</h2>
        <p><strong>Name:</strong> ${senderName}</p>
        <p><strong>Email:</strong> ${senderEmail}</p>
        <p><strong>Organization : </strong> ${senderOrg}</p>
        <p><strong>Message:</strong> ${senderMsg}</p>
        <p><strong><a href="https://personal-pf-alpha.vercel.app/">Website-Link</a></strong></p>
      `,
    });

    // To client
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: senderEmail,
      subject: `New message from ${senderName}`,
      html: `<div style="background-color:#191a1f; border-radius: 10px; ">
        <div style="font-family: monospace, Arial, sans-serif; line-height: 1.6; padding: 5px; padding-left: 10px; padding-right: 10px;">
            <h2 style="color: #5b62b1;">Hello ${senderName}, Thank you for getting in touch!</h2>
            <p style="color: #adabbd;">I've received your message and appreciate you reaching out.</p>
            <p style="color: #adabbd; background-color: #30303d ;padding:15px;border-radius: 10px;"><strong>Your Message :</strong> ${senderMsg} </p>
            <p style="color: #adabbd;">Looking forward to speaking with you soon!</p>
        </div>
    </div>
 `,
    });

    console.log("Email sent successfully to ",senderEmail);
  } catch (err) {
    console.error("Failed to send email", err);
  }
};

export default sendMail;

import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "codewithease4978@gmail.com",
    pass: process.env.appKey,
  },
});

const sendMail = async ({ senderName, senderEmail, senderOrg, senderMsg }) => {
  const accent = "#562e66"; // New Deep Violet Accent
  const baseUrl = "https://personal-pf-alpha.vercel.app/";

  const htmlHead = `
    <head>
      <style>
        body{margin:0;background:#000;color:#fff;font-family:Arial,Helvetica,sans-serif;-webkit-font-smoothing:antialiased}
        .wrapper{max-width:600px;margin:0 auto;padding-bottom:60px;background:#000;border: 1px solid #1a1a1a;}
        .header{padding:60px 40px 40px}
        .logo{font-size:24px;font-weight:900;text-transform:uppercase;letter-spacing:-1px}
        .hero{font-size:48px;font-weight:900;line-height:1;margin:40px 0;letter-spacing:-2px;text-transform:uppercase}
        .content{padding:0 40px}
        .divider{height:1px;background:#1a1a1a;margin:32px 0;border:none}
        .label{font-size:10px;color:#444;text-transform:uppercase;letter-spacing:2px;margin-bottom:8px}
        .value{font-size:18px;font-weight:700;color:#fff}
        .highlight{color:${accent}}
        .message-box{background:#0a0a0a; padding:20px; border-radius:4px; border-left:2px solid ${accent}; margin-top:10px;}
        .btn-primary{display:block;background:${accent};color:#ffffff;padding:20px;text-align:center;
          font-weight:900;text-decoration:none;margin-top:40px;text-transform:uppercase;letter-spacing:2px;font-size:12px;border-radius:4px}
        .footer{padding:60px 40px;border-top:1px solid #1a1a1a;font-size:10px;color:#333;line-height:1.8;text-transform:uppercase;letter-spacing:1px}
      </style>
    </head>
  `;

  try {
    /* ================= 1. ADMIN NOTIFICATION ================= */
    await transporter.sendMail({
      from: `"Portfolio Alert" <${process.env.EMAIL_USER}>`,
      to: "divygandhi4978@gmail.com",
      subject: `🟣 New Inquiry: ${senderName}`,
      html: `
        <!DOCTYPE html>
        <html>
        ${htmlHead}
        <body>
          <div class="wrapper">
            <div class="header">
              <div class="logo">PORTFOLIO<span style="color:${accent}">PRO</span></div>
              <div class="hero">New<br/>Contact<span style="color:${accent}">.</span></div>
            </div>
            <div class="content">
              <div class="label">From</div>
              <div class="value">${senderName}</div>
              <div style="font-size:12px;color:#444;margin-top:4px;text-transform:uppercase">${senderOrg || "N/A"}</div>
              
              <div class="divider"></div>

              <div class="label">Email Address</div>
              <div class="value highlight">${senderEmail}</div>

              <div class="divider"></div>

              <div class="label">Message Content</div>
              <div class="message-box">
                <p style="color:#888; font-style:italic; margin:0; line-height:1.6;">"${senderMsg}"</p>
              </div>

              <a href="mailto:${senderEmail}" class="btn-primary">Initiate Response</a>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    /* ================= 2. CLIENT CONFIRMATION ================= */
    await transporter.sendMail({
      from: `"Divy Gandhi" <${process.env.EMAIL_USER}>`,
      to: senderEmail,
      subject: `Message Received - Divy Gandhi`,
      html: `
        <!DOCTYPE html>
        <html>
        ${htmlHead}
        <body>
          <div class="wrapper">
            <div class="header">
              <div class="logo">DIVY<span style="color:${accent}">GANDHI</span></div>
              <div class="hero">Thank<br/>You<span style="color:${accent}">.</span></div>
              <p style="color:#555;font-size:14px;line-height:1.5;">Hello ${senderName}, your message has been transmitted successfully. I'll review the details and get back to you shortly.</p>
            </div>
            <div class="content">
              <div class="label">Delivery Status</div>
              <div class="value highlight">Received</div>

              <div class="divider"></div>

              <div class="label">Your Inquiry</div>
              <div class="message-box">
                <p style="color:#666; font-size:13px; margin:0; line-height:1.6;">${senderMsg}</p>
              </div>

              <a href="${baseUrl}" class="btn-primary">Return to Site</a>
            </div>
            <div class="footer">
              DIVY GANDHI • Digital Solutions<br/>
              © 2026 All Rights Reserved
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log("Violet-accented dark theme emails sent.");
  } catch (err) {
    console.error("Error sending mail:", err);
  }
};

export default sendMail;
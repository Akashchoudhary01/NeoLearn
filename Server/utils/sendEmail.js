import nodemailer from "nodemailer";

const sendEmail = async function(email, subject, message) {
  // Use Brevo SMTP credentials
  let transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false, // true for 465, false for 587
    auth: {
      user: process.env.SMTP_USERNAME, // Your Brevo SMTP Login Email
      pass: process.env.SMTP_PASSWORD, // The SMTP Key you generated
    },
  });

  await transporter.sendMail({
    // IMPORTANT: 'from' must match a registered/verified sender in Brevo
    from: process.env.SMTP_FROM_EMAIL, 
    to: email,
    subject: subject,
    html: message,
  });
};

export default sendEmail;
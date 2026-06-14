import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async function(email, subject, message) {
  try {
    await resend.emails.send({
      from: 'akashkrchoudhary0007@gmail.com', // Replace with your verified domain
      to: email,
      subject: subject,
      html: message,
    });
    console.log("Email sent successfully via Resend");
  } catch (error) {
    console.error("Resend error:", error);
    throw error;
  }
};

export default sendEmail;
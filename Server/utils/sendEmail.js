import  nodemailer  from "nodemailer";

const sendEmail = async function(email , subject , message){
    // create reusable transporter object using the default SMTP transport

    let transporter = await  nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false, // true for port 465, false for other ports
       auth: {
            user:process.env.SMTP_USERNAME ,
            pass: process.env.SMTP_PASSWORD,
  },
  
});

await transporter.verify();
console.log("SMTP VERIFIED");

console.log("HOST:", process.env.SMTP_HOST);
console.log("PORT:", process.env.SMTP_PORT);
console.log("USER:", process.env.SMTP_USERNAME);
// async..await is not allowed in global scope, must use a wrapper

// send mail with defined transport object

await transporter.sendMail({
    from: process.env.SMTP_FROM_EMAIL, // sender address
    to: email, // list of receivers
    subject: subject, // Subject 
    html: message, // html body
  });
};

export default sendEmail;

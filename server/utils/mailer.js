import nodeMailer from "nodemailer";

function SMail(to, subject, htmlContent) {
  const transporter = nodeMailer.createTransport({
    service: process.env.SERVICE_MAIL,
    auth: {
      user: process.env.USER_MAIL,
      pass: process.env.PASSWORD_MAIL,
    },
  });

  const mailOptions = {
    from: process.env.USER_MAIL,
    to: to,
    subject: subject,
    html: htmlContent,
  };

  return transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

export default SMail;

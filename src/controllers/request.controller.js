const nodemailer = require("nodemailer");

exports.sendEmail = (req, res) => {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: "outlook",
    auth: {
      user: "nermine.makrem@alitheia-editions.com",
      pass: "Integrity11!",
    },
  });

  const mailOptions = {
    from: "nermine.makrem@alitheia-editions.com",
    to: email,
    subject: "Sending Email From Nermine",
    text: message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

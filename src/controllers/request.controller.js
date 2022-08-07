const nodemailer = require("nodemailer");

exports.sendEmail = (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    port: 465,
    secure: true,
    auth: {
      user: "nermine.makrem@alitheia-studios.ch",
      pass: "Integrity11!",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const messageHtml = `<div>This is a request sent from the website alitheia-studios.ch</div><br/><div>${message}</div><br/><div>This is ${name} sending a request from alitheia-studios.ch</div>`;

  const mailOptions = {
    from: "nermine.makrem@alitheia-studios.ch",
    to: "nermine.makrem@alitheia-studios.ch",
    subject: "Sending Email From Nermine",
    html: messageHtml,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).send({ sent: false, error: error });
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send({ sent: true, result: info.response });
    }
  });
};

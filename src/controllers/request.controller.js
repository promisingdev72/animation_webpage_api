const nodemailer = require("nodemailer");

exports.sendEmail = (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
   host: "smtp.gmail.com",
   port: 465,
   secure: true,
   auth: {
     user: "fofilovvladislav@gmail.com",
     pass: "yyuyrydyramdhcgy"
   }
});

  const mailOptions = {
    from: email,
    to: "fofilovvladislav@gmail.com",
    subject: "Sending Email From Nermine",
    text: message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).send({'sent':false})
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send({'sent':true})
    }
  });
};

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: '',
    auth: {
      user: '',
      pass: ''
    }
  });
  
  var mailOptions = {
    from: '',
    to: 'sanabaf410@mitigado.com',
    subject: 'testing nodemailer for checkpoint',
    text: 'email sent successfully'
  };
  
  transporter.sendMail(mailOptions, function(err, info){
    if (err) {
      console.log(err);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
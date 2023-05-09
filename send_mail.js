
console.log("sending mail")
const nodemailer = require('nodemailer');

// create transporter object with SMTP options
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'sadiktamboli57@gmail.com',
        pass: 'dueamiuorbccvkdg'
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: '"Your Name" sadiktamboli57@gmail.com>', // sender address
    to: 'biradarkaustubh@gmail.com', // list of receivers
    subject: 'Hello from Node.js', // Subject line
    text: 'Hello, this is a test email sent from Node.js!', // plain text body
    html: '<b>Hello, this is a test email sent from Node.js!</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
});

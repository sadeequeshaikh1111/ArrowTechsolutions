const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

// Configure CORS middleware
app.use(cors());

// Configure body parsing middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Create transporter object with SMTP options
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'sadiktamboli57@gmail.com',
        pass: 'dueamiuorbccvkdg'
    }
});

// Send email route
app.post('/send', (req, res) => {
    const mailOptions = {
        from: req.body.name + ' <' + req.body.email + '>', // sender address
        to: 'recipientemail@example.com', // list of receivers
        subject: req.body.subject, // Subject line
        text: req.body.message, // plain text body
        html: '<p>' + req.body.message + '</p>' // html body
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error occurred while sending message');
        } else {
            console.log('Message sent: %s', info.messageId);
            res.status(200).send('Message sent successfully');
        }
    });
});

// Start server
app.listen(port, () => {
    console.log(`mail_service Server started on port ${port}`);
});

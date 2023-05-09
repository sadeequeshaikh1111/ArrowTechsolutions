const api_key = 'YOUR_API_KEY';
const domain = 'YOUR_DOMAIN_NAME';
const mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

const data = {
  from: 'Sender Name <sender@mailgun.org>',
  to: 'Recipient Name <recipient@example.com>',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomeness!'
};

mailgun.messages().send(data, (error, body) => {
  if (error) {
    console.log(error);
  } else {
    console.log(body);
  }
});

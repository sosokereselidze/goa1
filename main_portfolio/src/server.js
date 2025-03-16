// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');

// const app = express();
// const port = 5000;

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.post('/send-email', (req, res) => {
//     const { name, email, message } = req.body;

//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'your-email@gmail.com', // Your email
//             pass: 'your-email-password',  // Your email password (use environment variables for security)
//         },
//     });

//     const mailOptions = {
//         from: email,
//         to: 'soso.kereselidze1@gmail.com', // Your email where the contact form will be sent
//         subject: `New message from ${name}`,
//         text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             return res.status(500).send('Error sending email');
//         }
//         res.status(200).send('Email sent successfully');
//     });
// });

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password'
    }
});

app.post('/send-email', (req, res) => {
    const { email, subject, message } = req.body;
    
    const mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: subject,
        text: message
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ success: false, error: error.toString() });
        }
        res.json({ success: true });
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

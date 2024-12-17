const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Contact form API route
app.post('/api/contact', (req, res) => {
  const { name, email, phone, message } = req.body;

  // Nodemailer transporter setup
  const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use other services like SendGrid or SMTP
    auth: {
      user: 'woods.blake03@gmail.com', // Your email address
      pass: 'bcla gcif utdh xcgj',  // Your email password or App Password
    },
  });

  const mailOptions = {
    from: email, // User's email
    to: 'woods.blake03@gmail.com', // Your email address where you receive the messages
    subject: `New Contact Form Submission from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Failed to send email', error });
    }
    console.log('Email sent successfully:', info.response);
    res.status(200).json({ message: 'Email sent successfully' });
  });
});

// Test API route
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});


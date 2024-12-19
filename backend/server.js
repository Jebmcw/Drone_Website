const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Contact form API route
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Validate input fields
  if (!name || !email || !message) {
    console.error('Validation error: Missing required fields');
    return res.status(400).json({ message: 'Name, email, and message are required.' });
  }

  try {
    // Nodemailer transporter setup
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'woods.blake03@gmail.com', // Your email address
        pass: 'bcla gcif utdh xcgj', // App Password
      },
    });

    const mailOptions = {
      from: email,
      to: 'woods.blake03@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'N/A'} 
        Message: ${message}
      `,
    };

    // Send the email using async/await
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.response);
    res.status(200).json({ message: 'Email sent successfully' });

  } catch (error) {
    console.error('Error sending email:', error.message);
    res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
});

// Test API route
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});


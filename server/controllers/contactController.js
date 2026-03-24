const Contact = require('../models/Contact');
const sendEmail = require('../utils/sendEmail');

const createContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const contact = await Contact.create({
      name,
      email,
      phone,
      message,
    });

    // Send email notification to owner
    try {
      await sendEmail({
        email: process.env.OWNER_EMAIL,
        subject: `New Contact Form Submission from ${name}`,
        message: `You have a new contact form submission.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      });
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      // We still return 201 since the db save was successful
    }

    res.status(201).json({ success: true, data: contact });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { createContact };

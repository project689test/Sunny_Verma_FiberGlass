const Quote = require('../models/Quote');
const sendEmail = require('../utils/sendEmail');

const createQuote = async (req, res) => {
  try {
    const { name, phone, service, details } = req.body;

    const quote = await Quote.create({
      name,
      phone,
      service,
      details,
    });

    // Send email notification to owner
    try {
      await sendEmail({
        email: process.env.OWNER_EMAIL,
        subject: `New Quote Request from ${name}`,
        message: `You have a new quote request.\n\nName: ${name}\nPhone: ${phone}\nService: ${service}\nDetails: ${details}`,
      });
    } catch (emailError) {
      console.error('Error sending quote email:', emailError);
    }

    res.status(201).json({ success: true, data: quote });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { createQuote };

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const server = require('http').createServer(app);
const nodemailer = require('nodemailer');
const PORT = process.env.PORT||5001;
app.use(cors());
app.use(bodyParser.json());
require('./connection');
const formData = require('./models/formData');


app.post('/submit-form', async (req, res) => {
    try {
      console.log('Incoming Request:', req.body);
  
      const { user_name, user_email, contactNo, whatsappNo } = req.body;
  
      if (!user_name || !user_email || !contactNo || !whatsappNo) {
        console.log('Validation failed: Missing fields');
        return res.status(400).json({ message: 'All fields are required.' });
      }
  
      const newForm = new formData({ user_name, user_email, contactNo, whatsappNo });
      await newForm.save();
  
      res.status(201).json({ message: 'Form data saved successfully!' });
    } catch (error) {
      console.error('Error saving form data:', error.message);
      res.status(500).json({ message: 'An error occurred', error: error.message });
    }


    
  });
  
server.listen(PORT, ()=> {
    console.log('listening to port', PORT)
  })
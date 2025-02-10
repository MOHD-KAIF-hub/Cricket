const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  user_name: { type: String, required: true },
  user_email: { type: String, required: true },
  contactNo: { type: String, required: true },
  whatsappNo: { type: String, required: true },
});

const formData = mongoose.model('formData', formSchema);

module.exports = formData;

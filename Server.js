const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a MongoDB schema for your bookings
const bookingSchema = new mongoose.Schema({
  book_name: String,
  book_phone: String,
  book_people: Number,
  book_tables: Number,
  user_id: String,
  book_when: Date,
  book_note: String,
});

const Booking = mongoose.model('Booking', bookingSchema);

// Set up your Express routes here
// ...

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

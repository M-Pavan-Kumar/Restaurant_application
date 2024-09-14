const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  
  name: { type: String, required: true },
  message: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  photo: { type: String, default: 'default-image-path.jpg' }, // Ensure this default is valid
  date: { type: Date, default: Date.now }
});

// Indexes for performance improvements
reviewSchema.index({ rating: 1 });
reviewSchema.index({ date: -1 });

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;

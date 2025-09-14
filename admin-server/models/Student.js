 
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
  {
    collegeId: {
      type: String,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    couponType: {
      type: String,
      enum: ['Individual', 'Team'],
      required: true,
    },
    couponCode: {
      type: String,
      sparse: true,
    },
    used: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Student', studentSchema);

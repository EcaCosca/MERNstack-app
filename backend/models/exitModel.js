const mongoose = require('mongoose');

const exitPointSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    altitude: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
    coordinates: {
      type: {
        type: String,
        enum: ['Point'],
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
    jumps: {
      type: Number,
      default: 0,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  
  // Index the coordinates field for geospatial queries
  exitPointSchema.index({ coordinates: '2dsphere' });
  
  // Create a model for the exit points using the schema
  module.exports = mongoose.model('ExitPoint', exitPointSchema);

  // TEST 
  // {
  //   "name": "High Cliff",
  //   "location": "Mountain Peak",
  //   "altitude": 2400,
  //   "description": "A popular exit point with stunning views.",
  //   "coordinates": {
  //     "type": "Point",
  //     "coordinates": [-118.789012, 34.123456]
  //   }
  // }
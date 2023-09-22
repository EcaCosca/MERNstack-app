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
    type: {
      type: String,
      enum: ['building', 'antenna', 'span', 'earth'],
      required: true,
    },
    jumps: {
      type: Number,
      default: 0,
    },
    parking: {
      type: {
        type: String,
        enum: ['Point'],
      },
      coordinates: {
        type: [Number],
      },
      altitude: {
        type: Number,
      },
    },
    landing: {
      type: {
        type: String,
        enum: ['Point'],
      },
      coordinates: {
        type: [Number],
      },
      altitude: {
        type: Number
      },
    },
  sliderConfiguration: [{
    type: String,
    enum: ['down', 'up'],
    required: true,
  }],
  suitRequired: [{
    type: String,
    enum: ['slick', 'two-piece tracking suit', 'mono-piece tracking suit', 'wingsuit'],
  }],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  }, { timestamps: true });
  
  // Index the coordinates field for geospatial queries
  exitPointSchema.index({ coordinates: '2dsphere' });

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
  //   },
  //   "type": "earth",
  //   "jumps": 0,
  //   "parking": {
  //     "type": "Point",
  //     "coordinates": [-118.790000, 34.120000]
  //   },
  //   "landing": {
  //     "type": "Point",
  //     "coordinates": [-118.787000, 34.125000],
  //     "altitude": 1600
  //   },
  // "sliderConfiguration": ["down", "up"],
  // "suitRequired": ["slick", "wingsuit"]
  // }
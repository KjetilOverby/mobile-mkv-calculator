const mongoose = require("mongoose");

const PosterSchema = new mongoose.Schema({
  startRings: [
    {
      input: {
        type: Number,
      },
    },
  ],
  rawInput: [
    {
      input: {
        type: Number,
      },
      ring: {
        type: Number,
      },
      shims: {
        type: Number,
      },
      shims2: {
        type: Number,
      },
      shims3: {
        type: Number,
      },
    },
  ],
  endRings: [
    {
      input: {
        type: Number,
      },
    },
  ],
  blades: {
    bladStamme: {
      type: Number,
    },
  },
  header: {
    type: String,
  },
  date: {
    type: Date,
  },
});

module.exports = mongoose.models.Posts || mongoose.model("Posts", PosterSchema);
// const mongoose = require('mongoose');

// const PosterSchema = new mongoose.Schema({
//   type: {
//     name: {
//       type: String
//     }
//   },
//   bladtype: {
//     type: String,
//   },
//   bladeThickness: {
//     type: [String],
//   },
//   sagsnitt: {
//     type: [Number],
//   },
//   percent: {
//      type: String
//   },

//   startRings: [{
//    input: {
//      type: Number
//    }
//   }],
//   rawInput: [{
//     input: {
//       type: Number
//     },
//     ring: {
//       type: Number
//     },
//     shims: {
//       type: Number
//     },
//     shims2: {
//       type: Number
//     },
//     shims3: {
//       type: Number
//     }
//   }],
//   endRings: [{
//     input: {
//       type: Number
//     }
//    }],
//   sagsnitt: {
//     type: [Number],
//   },

// });

// module.exports = mongoose.models.Posts || mongoose.model('Posts', PosterSchema);

const mongoose = require("mongoose");

const amanteSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    edad: {
      type: Number,
      required: true,
      min: 18,
    },
    intereses: {
      type: [String],
      required: true,
      validate: {
        validator: function (value) {
          return Array.isArray(value) && value.length > 0;
        },
        message: "Debe haber al menos un interés",
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Amante", amanteSchema);

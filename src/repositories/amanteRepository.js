const Amante = require("../models/amanteModel");

const crear = async (data) => {
  return await Amante.create(data);
};

const buscarPorInteres = async (interes) => {
  return await Amante.find({
    intereses: { $regex: new RegExp(`^${interes}$`, "i") },
  });
};

const contar = async () => {
  return await Amante.countDocuments();
};

module.exports = {
  crear,
  buscarPorInteres,
  contar,
};
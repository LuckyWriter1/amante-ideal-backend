const amanteRepository = require("../repositories/amanteRepository");

const crearAmante = async (data) => {
  const amanteNormalizado = {
    nombre: data.nombre.trim(),
    edad: data.edad,
    intereses: data.intereses.map((interes) => interes.trim()),
  };

  return await amanteRepository.crear(amanteNormalizado);
};

const obtenerPorInteres = async (interes) => {
  return await amanteRepository.buscarPorInteres(interes.trim());
};

module.exports = {
  crearAmante,
  obtenerPorInteres,
};
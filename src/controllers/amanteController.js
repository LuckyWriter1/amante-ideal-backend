const amanteService = require("../services/amanteService");
const {
  validarCrearAmanteDto,
  validarBuscarPorInteresDto,
} = require("../dtos/amanteDto");

const crearAmante = async (req, res) => {
  try {
    validarCrearAmanteDto(req.body);
    const amanteCreado = await amanteService.crearAmante(req.body);

    res.status(201).json(amanteCreado);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const buscarPorInteres = async (req, res) => {
  try {
    validarBuscarPorInteresDto(req.query);
    const resultados = await amanteService.obtenerPorInteres(req.query.interes);

    res.status(200).json(resultados);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = {
  crearAmante,
  buscarPorInteres,
};
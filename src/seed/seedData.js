const amanteRepository = require("../repositories/amanteRepository");

const seedData = async () => {
  const cantidad = await amanteRepository.contar();

  if (cantidad > 0) {
    return;
  }

  await amanteRepository.crear({
    nombre: "Ana",
    edad: 25,
    intereses: ["cine", "viajes", "musica"],
  });

  await amanteRepository.crear({
    nombre: "Luis",
    edad: 28,
    intereses: ["deporte", "musica", "lectura"],
  });

  await amanteRepository.crear({
    nombre: "Maria",
    edad: 23,
    intereses: ["arte", "cafe", "cine"],
  });

  console.log("Seed inicial cargada");
};

module.exports = seedData;
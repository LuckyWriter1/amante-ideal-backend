const validarCrearAmanteDto = ({ nombre, edad, intereses }) => {
  if (!nombre || typeof nombre !== "string" || nombre.trim().length < 2) {
    throw new Error("El nombre es obligatorio y debe tener al menos 2 caracteres.");
  }

  if (!Number.isInteger(edad) || edad < 18) {
    throw new Error("La edad debe ser un número entero mayor o igual a 18.");
  }

  if (!Array.isArray(intereses) || intereses.length === 0) {
    throw new Error("Los intereses deben ser un arreglo con al menos un valor.");
  }

  const interesesValidos = intereses.every(
    (interes) => typeof interes === "string" && interes.trim().length > 0
  );

  if (!interesesValidos) {
    throw new Error("Todos los intereses deben ser textos no vacíos.");
  }
};

const validarBuscarPorInteresDto = ({ interes }) => {
  if (!interes || typeof interes !== "string" || interes.trim().length === 0) {
    throw new Error("El parámetro 'interes' es obligatorio.");
  }
};

module.exports = {
  validarCrearAmanteDto,
  validarBuscarPorInteresDto,
};
# Amante Ideal - Backend

Backend del proyecto **Amante Ideal**, desarrollado con **Node.js**, **Express** y **MongoDB local**, siguiendo una arquitectura en capas.

## Tecnologías utilizadas

- Node.js
- Express
- MongoDB Community Server
- Mongoose
- dotenv
- cors
- nodemon

## Arquitectura

El backend fue desarrollado con una arquitectura en capas:

- **controllers**: reciben las peticiones HTTP y devuelven respuestas
- **services**: contienen la lógica de negocio
- **repositories**: gestionan el acceso a la base de datos
- **models**: definen la estructura de los datos en MongoDB
- **dtos**: validan los datos de entrada

## Estructura del proyecto

```text
src/
 ├── config/
 ├── controllers/
 ├── services/
 ├── repositories/
 ├── models/
 ├── dtos/
 ├── routes/
 ├── seed/
 ├── app.js
 └── server.js
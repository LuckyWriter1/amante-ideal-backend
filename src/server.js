require("dotenv").config();
const connectDB = require("./config/db");
const app = require("./app");
const seedData = require("./seed/seedData");

const PORT = process.env.PORT || 3000;

const start = async () => {
  await connectDB();
  await seedData();

  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
};

start();
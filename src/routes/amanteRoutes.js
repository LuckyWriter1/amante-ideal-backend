const express = require("express");
const router = express.Router();
const amanteController = require("../controllers/amanteController");

router.post("/amantes", amanteController.crearAmante);
router.get("/amantes", amanteController.buscarPorInteres);

module.exports = router;
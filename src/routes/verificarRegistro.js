var express = require("express");
var router = express.Router();

var verificarRegistroController = require("../controllers/verificarRegistroController");

router.post("/verificar", function (req, res) {
    verificarRegistroController.verificarRegistro(req, res);
});

module.exports = router;
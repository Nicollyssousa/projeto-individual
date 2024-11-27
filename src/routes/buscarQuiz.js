var express = require("express");
var router = express.Router();

var buscarQuizController = require("../controllers/buscarQuizController");

router.post("/buscarQuiz/", function (req, res) {
    buscarQuizController.buscarQuizController(req, res);
});

router.post("/kpiNomePersonagem", function (req, res) {
    buscarQuizController.kpiNomePersonagem(req, res);
});

router.post("/kpiPersonagemMaisPontuada", function (req, res) {
    buscarQuizController.kpiPersonagemMaisPontuada(req, res);
});

module.exports = router;
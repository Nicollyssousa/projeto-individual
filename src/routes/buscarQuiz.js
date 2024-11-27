var express = require("express");
var router = express.Router();

var buscarQuizController = require("../controllers/buscarQuizController");

router.post("/buscarQuiz/", function (req, res) {
    buscarQuizController.buscarQuizController(req, res);
});

module.exports = router;
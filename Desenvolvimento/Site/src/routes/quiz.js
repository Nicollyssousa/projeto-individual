var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.get("/plotagemBancoDados", function (req, res) {
    quizController.plotagemBancoDados(req, res);
});

module.exports = router;
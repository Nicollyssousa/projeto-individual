var quizModel = require("../models/buscarQuizModel");

function buscarQuizController(req, res) {

    quizModel.buscarQuizModel()
    .then(
        function(resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro enviar sua pontuação: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}

module.exports = {
    buscarQuizController

}
var quizModel = require("../models/buscarQuizModel");

function buscarQuizController(req, res) {
    var usuario = req.body.idUsuarioServer;

    console.log(usuario, 'usuario')
    quizModel.buscarQuizModel(usuario)
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

function kpiNomePersonagem(req, res) {
    var usuario = req.body.idUsuarioServer;
    quizModel.kpiNomePersonagem(usuario)
    .then(
        function(resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao enviar o nome da personagem: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage)
        }
    );
}

function kpiPersonagemMaisPontuada(req, res) {
    quizModel.kpiPersonagemMaisPontuada()
    .then(
        function(resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao enviar o nome da personagem mais pontuada: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage)
        }
    );
}

module.exports = {
    buscarQuizController,
    kpiNomePersonagem,
    kpiPersonagemMaisPontuada
}
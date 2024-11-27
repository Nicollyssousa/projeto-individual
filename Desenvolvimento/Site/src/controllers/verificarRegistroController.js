var verificarRegistroModel = require("../models/verificarRegistroModel");

function verificarRegistro(req, res) {
    const idUsuario = req.body.idUsuarioServer;
    console.log(idUsuario);

    verificarRegistroModel.verificarRegistro(idUsuario)
    .then(
        function(resultado){

            if(resultado.length >= 1){
                console.log(resultado);
                res.json(resultado);
            }
            else if(resultado.length == 0) {
                res.status(403).send("Usuario sem nenhuma pontuação registrada");
            }
        })
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao buscar registros Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    verificarRegistro
}
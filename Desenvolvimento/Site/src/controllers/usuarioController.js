var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var nomeUsuario = req.body.nomeServer;
    var senha = req.body.senhaServer;
    const idUsuario = req.body.idUsuarioServer;

    if (nomeUsuario == undefined) {
        res.status(400).send("Seu nome está indefinido!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(nomeUsuario, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        res.json({
                            idUsuario: resultadoAutenticar[0].idUsuario,
                            idade: resultadoAutenticar[0].idade,
                            tipoMonstro: resultadoAutenticar[0].tipoMonstro,
                            nomeUsuario: resultadoAutenticar[0].nomeUsuario,
                            senha: resultadoAutenticar[0].senha
                        });
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Nome e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo nome e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nomeUsuario = req.body.nomeServer;
    var idade = req.body.idadeServer;
    var senha = req.body.senhaServer;
    var tipoMonstro = req.body.criaturaServer;

    // Faça as validações dos valores
    if (nomeUsuario == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (idade == undefined) {
        res.status(400).send("Sua idade está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    }else if(tipoMonstro == undefined){
        res.status(400).send("Seu tipo criatura está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nomeUsuario, idade, tipoMonstro, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    autenticar,
    cadastrar
}
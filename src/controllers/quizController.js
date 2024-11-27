var quizModel = require("../models/quizModel");
const { verificarRegistro } = require("../models/verificarRegistroModel");

function plotagemBancoDados(req, res) {
    const resultados = req.body.resultados;  // Aqui deve vir um array de objetos com nomePersonagem e pontuacao
    const idUsuario = req.params.idUsuario;

    if (!resultados || resultados.length === 0) {
        console.error("Nenhum dado enviado ao backend!");
        return res.status(400).send("Nenhum dado enviado ao backend!");
    }

    // Processa cada resultado (nome + pontuação) e salva no banco
    const promessas = resultados.map((resultado) =>
        quizModel.plotagemBancoDados(resultado.nomePersonagem, resultado.pontuacao, idUsuario)
    );

    // Espera todas as inserções concluírem
    Promise.all(promessas)
        .then(() => res.status(200).send("Resultados salvos com sucesso!"))
        .catch((erro) => {
            console.error("Erro ao salvar os dados:", erro);
            res.status(500).send("Erro ao salvar os dados no banco.");
        });
}

module.exports = {
    plotagemBancoDados
}
var quizModel = require("../models/quizModel");

function plotagemBancoDados(req, res) {
    const resultados = req.body.resultados;  // Aqui deve vir um array de objetos com nomePersonagem e pontuacao
    const idUsuario = req.params.idUsuario;
    console.log(resultados)

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


// function buscarUltimosResultados(req, res) {
//     var idResultadoQuiz = req.params.idResultadoQuiz;
//     const limiteLinhas = 5;

//     console.log(`Recuperando resultados`);

//     quizModel.buscarUltimosResultados(idResultadoQuiz, limiteLinhas).then(function (resultado) {
//         if (resultado.length > 0) {
//             res.status(200).json(resultado);
//         } else {
//             res.status(204).send("Nenhum resultado encontrado!")
//         }
//     }).catch(function (erro) {
//         console.log(erro);
//         console.log("Houve um erro ao buscar os ultimos resultados.", erro.sqlMessage);
//         res.status(500).json(erro.sqlMessage);
//     });
// }

module.exports = {
    plotagemBancoDados
    // buscarUltimosResultados
}
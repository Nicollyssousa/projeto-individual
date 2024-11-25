var database = require("../database/config");

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function plotagemBancoDados(nomePersonagem, pontuacao, idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function plotarBancoDados():", nomePersonagem, pontuacao);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO resultadoQuiz (nomePersonagem, pontuacao, fkUsuario)
        VALUES ('${nomePersonagem}', '${pontuacao}', ${idUsuario}); 
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// function buscarUltimosResultados(idResultadoQuiz, limiteLinhas) {

//     var instrucaoSql = `SELECT
//         personagens as "Nome Personagem", 
//         porcentagem as Porcentagem
//                     FROM resultadoQuiz
//                     JOIN usuario
//                     WHERE fkResultadoQuiz = ${idResultadoQuiz}
//                     ORDER BY id DESC LIMIT ${limiteLinhas}`;

//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

module.exports = {
    plotagemBancoDados
    // buscarUltimosResultados
}

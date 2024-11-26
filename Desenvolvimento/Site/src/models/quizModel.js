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

// function updateBancoDados(nomePersonagem, pontuacao, idUsuario) {
//     console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function plotarBancoDados():", nomePersonagem, pontuacao);
    
//     // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
//     //  e na ordem de inserção dos dados.
//     var instrucaoSql = `
//         UPDATE resultadoQuiz SET nomePersonagem = ${nomePersonagem}', pontuacao = '${pontuacao}', WHERE idUsuario = ${idUsuario}; 
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

module.exports = {
    plotagemBancoDados
    // updateBancoDados
}

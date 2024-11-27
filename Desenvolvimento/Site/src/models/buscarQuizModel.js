var database = require("../database/config");

function buscarQuizModel(idUsuario) {

    var instrucaoSql = `
        SELECT nomePersonagem AS Personagem, 
        pontuacao AS Porcentagem 
        FROM resultadoQuiz
        JOIN usuario
        ON fkUsuario = idUsuario
        where fkUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function kpiNomePersonagem(idUsuario) {

    var instrucaoSql = `
        SELECT nomePersonagem
        FROM resultadoQuiz
        WHERE fkUsuario = ${idUsuario}
        GROUP BY nomePersonagem
        ORDER BY MAX(pontuacao) DESC
        LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function kpiPersonagemMaisPontuada() {

        var instrucaoSql = `
        SELECT nomePersonagem
        FROM resultadoQuiz
        GROUP BY nomePersonagem
        ORDER BY SUM(pontuacao) DESC
        LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarQuizModel,
    kpiNomePersonagem,
    kpiPersonagemMaisPontuada
}
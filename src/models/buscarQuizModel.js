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

module.exports = {
    buscarQuizModel
}
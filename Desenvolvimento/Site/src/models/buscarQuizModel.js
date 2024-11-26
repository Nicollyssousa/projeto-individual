var database = require("../database/config");

function buscarQuizModel() {
    
    var instrucaoSql = `
        select nomePersonagem as Personagem, 
        pontuacao as Porcentagem 
        from resultadoQuiz
        join usuario
        on fkUsuario = idUsuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarQuizModel
}
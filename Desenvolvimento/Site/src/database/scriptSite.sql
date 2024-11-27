create database monsterHigh;
use monsterHigh;

CREATE TABLE usuario (
idusuario INT AUTO_INCREMENT PRIMARY KEY,
nomeUsuario VARCHAR(45) NOT NULL,
tipoMonstro VARCHAR(45),
idade INT,
senha CHAR(10),
dtRegistro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE resultadoQuiz (
idresultadoQuiz INT AUTO_INCREMENT PRIMARY KEY,
nomePersonagem VARCHAR(45),                     
pontuacao DECIMAL(5,2),                     
dataResultado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
fkUsuario INT,
FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

select * from resultadoQuiz;

insert into usuario (nomeUsuario, tipoMonstro, idade, senha) values 
('Nick', 'Lobisomen', 19, 'nick1234');


truncate table resultadoQuiz;

/*Selects*/
select * from resultadoQuiz;
select * from usuario;

/*Select para enviar os dados para a Dashboard*/
select nomePersonagem as Personagem, 
	pontuacao as Porcentagem 
    from resultadoQuiz
    join usuario
    on fkUsuario = idUsuario
    limit 5;

/*Select para so fazer o quiz uma vez*/
select * from resultadoQuiz where fkUsuario = 2;

/*puxando maior resultado para exibir nome personagem*/
SELECT nomePersonagem
FROM resultadoQuiz
WHERE fkUsuario = 4
GROUP BY nomePersonagem
ORDER BY MAX(pontuacao) DESC
LIMIT 1;

/*puxando a personagem mais pontuada pelos usuarios*/
SELECT nomePersonagem
FROM resultadoQuiz
GROUP BY nomePersonagem
ORDER BY SUM(pontuacao) DESC
LIMIT 1;

/*puxando personagem menos pontuada pelos usuarios*/ 
SELECT nomePersonagem
FROM resultadoQuiz
GROUP BY nomePersonagem
ORDER BY AVG(pontuacao) ASC
LIMIT 1;
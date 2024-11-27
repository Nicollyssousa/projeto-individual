create database monsterHigh;
use monsterHigh;

create table usuario (
idUsuario int primary key auto_increment,
nomeUsuario varchar(45) not null unique, 
tipoCriatura varchar(45) not null,
idade int not null,
senha char(10) not null,
dtRegistro datetime
);

create table resultadoQuiz (
idResultado int auto_increment,
personagem varchar(45),
porcentagemSimilaridade decimal (5,2),
dataResultado datetime,
fkUsuario int,
primary key (idResultado, fkUsuario),
constraint fkResultadoUsuario foreign key (fkUsuario)
	references usuario(idUsuario)
);


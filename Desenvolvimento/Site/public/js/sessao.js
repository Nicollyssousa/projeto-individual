// sessão
function validarSessao() {
    var idade = sessionStorage.IDADE_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var tipoMonstro = sessionStorage.CRIATURA_USUARIO;

    var b_usuario = document.getElementById("b_usuario");
    var b_idade = document.getElementById("b_idade");
    var b_monstro = document.getElementById("b_monstro");

    if (idade != null && nome != null && tipoMonstro != null) {
        b_usuario.innerHTML = nome;
        b_idade.innerHTML = idade;
        b_monstro.innerHTML = tipoMonstro;
    } else {
        window.location = "../navegacao.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../navegacao.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}


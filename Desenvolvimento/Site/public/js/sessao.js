// sessão
function validarSessao() {
    var idade = sessionStorage.IDADE_USUARIO;
    var nomeUsuario = sessionStorage.NOME_USUARIO;
    var tipoMonstro = sessionStorage.CRIATURA_USUARIO;

    var b_usuario = document.getElementById("b_usuario");
    var b_idade = document.getElementById("b_idade");
    var b_monstro = document.getElementById("b_monstro");

    if (idade != null && (nomeUsuario != null) && (tipoMonstro != null)) {
        b_usuario.innerHTML = nomeUsuario;
        b_idade.innerHTML = idade;
        b_monstro.innerHTML = tipoMonstro;
    } else {
        window.location = "../index.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../index.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    var divLogin = document.getElementById("login");

    if (divAguardar) { // Verifica se o elemento existe
        divLogin.style.display = "none";
        divAguardar.style.display = "flex";
    } else {
        console.error("Elemento com ID 'div_aguardar' não encontrado.");
    }
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


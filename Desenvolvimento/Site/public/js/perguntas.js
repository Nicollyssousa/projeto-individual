const perguntas = [
    {
        questão: "O que te melhor define?",
        respostas: [
            { texto: "Minha bondade e capacidade de cuidar dos outros", alternativa: ("A") },
            { texto: "Minha inteligência e curiosidade pelo novo", alternativa: ("B") },
            { texto: "Minha força e coragem diante das dificuldades", alternativa: ("C") },
            { texto: "Minha determinação em sempre alcançar o melhor", alternativa: ("D") },
            { texto: "Meu equilíbrio e conexão com a natureza", alternativa: ("E") },
        ]
    },
    {
        questão: "Com qual tipo de desafio você mais se identifica?",
        respostas: [
            { texto: "Ajudar os outros a superar dificuldades emocionais", alternativa: ("A") },
            { texto: "Resolver problemas complicados com criatividade", alternativa: ("B") },
            { texto: "Enfrentar obstáculos físicos ou sociais com coragem", alternativa: ("C") },
            { texto: "Liderar em situações de pressão e ser exemplo para os outros", alternativa: ("D") },
            { texto: "Encontrar harmonia em momentos de caos", alternativa: ("E") },
        ]
    },
    {
        questão: "O que mais inspira suas escolhas na vida?",
        respostas: [
            { texto: "Fazer o bem para quem está ao meu redor", alternativa: ("A") },
            { texto: "Descobrir coisas novas e inovadoras", alternativa: ("B") },
            { texto: "Defender o que acredito, independentemente das consequências", alternativa: ("C") },
            { texto: "Buscar reconhecimento e respeito pelas minhas ações", alternativa: ("D") },
            { texto: "Cuidar da natureza e das pessoas que amo", alternativa: ("E") },
        ]
    },
    {
        questão: "Como você descreveria seu jeito de se expressar?",
        respostas: [
            { texto: "Doce e acolhedor, sempre pensando no próximo", alternativa: ("A") },
            { texto: "Racional e direto, com ideias bem planejadas", alternativa: ("B") },
            { texto: "Intenso e apaixonado, mostrando minha força interior", alternativa: ("C") },
            { texto: "Elegante e assertivo, sempre deixando minha marca", alternativa: ("D") },
            { texto: "Tranquilo e flexível, valorizando a conexão com os outros", alternativa: ("E") },
        ]
    },
    {
        questão: "O que você mais busca em sua vida?",
        respostas: [
            { texto: "Felicidade e harmonia para todos", alternativa: ("A") },
            { texto: "Avanço e inovação que possam mudar o mundo", alternativa: ("B") },
            { texto: "Superação e autenticidade em tudo o que faço", alternativa: ("C") },
            { texto: "Sucesso e reconhecimento pelas minhas conquistas", alternativa: ("D") },
            { texto: "Paz e equilíbrio com o mundo ao meu redor", alternativa: ("E") },
        ]
    },
    {
        questão: "Como você lida com desafios em sua vida?",
        respostas: [
            { texto: "Tento encontrar soluções criativas enquanto ajudo os outros", alternativa: ("A") },
            { texto: "Uso minha lógica e raciocínio para superar qualquer obstáculo", alternativa: ("B") },
            { texto: "Enfrento de frente, sem medo de errar", alternativa: ("C") },
            { texto: "Uso minha autoconfiança para transformar dificuldades em oportunidades", alternativa: ("D") },
            { texto: "Tento manter a calma e encontrar harmonia na situação", alternativa: ("E") },
        ]
    },
    {
        questão: "O que mais importa para você em uma amizade?",
        respostas: [
            { texto: "Lealdade e apoio emocional", alternativa: ("A") },
            { texto: "Compartilhar ideias e interesses intelectuais", alternativa: ("B") },
            { texto: "Aventura e companheirismo", alternativa: ("C") },
            { texto: "Admiração e respeito mútuo", alternativa: ("D") },
            { texto: "Empatia e conexão emocional", alternativa: ("E") },
        ]
    },
    {
        questão: "Como você reage quando precisa liderar um grupo?",
        respostas: [
            { texto: "Tento criar um ambiente acolhedor para todos", alternativa: ("A") },
            { texto: "Uso minha inteligência para propor estratégias eficazes", alternativa: ("B") },
            { texto: "Tomo a iniciativa e motivo os outros com minha energia", alternativa: ("C") },
            { texto: "Gosto de organizar e garantir que tudo saia perfeitamente", alternativa: ("D") },
            { texto: "Procuro equilibrar as opiniões e unir o grupo", alternativa: ("E") },
        ]
    },
    {
        questão: "Qual seria sua abordagem para lidar com um conflito?",
        respostas: [
            { texto: "Tento compreender o lado de todos e trazer paz", alternativa: ("A") },
            { texto: "Analiso as causas e busco soluções práticas", alternativa: ("B") },
            { texto: "Defendo o que acredito sem medo de confrontos", alternativa: ("C") },
            { texto: "Uso minha persuasão para convencer os outros", alternativa: ("D") },
            { texto: "Procuro uma solução que beneficie a todos de maneira justa", alternativa: ("E") },
        ]
    },
    {
        questão: "O que te faz se sentir mais realizado(a) na vida?",
        respostas: [
            { texto: "Fazer as pessoas ao meu redor feliz", alternativa: ("A") },
            { texto: " Resolver problemas e alcançar grandes realizações", alternativa: ("B") },
            { texto: "Superar desafios e viver intensamente", alternativa: ("C") },
            { texto: "Ser admirado(a) e reconhecido(a) pelos meus feitos", alternativa: ("D") },
            { texto: "Sentir-me conectado(a) com a natureza e com os outros", alternativa: ("E") },
        ]
    }

];

// Mapa de correspondência entre alternativas e personagens
const personagens = {
    A: "Draculaura",
    B: "Frankie Stein",
    C: "Clawdeen Wolf",
    D: "Cleo de Nile",
    E: "Lagoona Blue",
};

//Mapa Descricao para personagem correspondente 
const descricao = {
    draculaura: 
      "Draculaura é alegre, gentil e muito amorosa." +
      " Sempre vê o lado positivo das coisas e valoriza suas amizades acima de tudo." +
      " Com um estilo romântico e colorido, ela adora espalhar energia boa por onde passa." +
      " Assim como ela, você tem um coração enorme e é um(a) verdadeiro(a) amigo(a)!",
      
    frankie: 
      "Frankie é curiosa, inteligente e cheia de energia!" +
      " Apesar de ser nova em Monster High, ela está sempre disposta a aprender e a se aventurar." +
      " Seu estilo é cheio de personalidade, misturando modernidade e tradição." +
      " Assim como ela, você é único(a), está sempre explorando o mundo e não tem medo de ser você mesmo(a)!",
      
    clawdeen: 
      "Clawdeen é destemida, criativa e super leal aos seus amigos." +
      " Sempre pronta para ajudar, ela também adora moda e tem um talento incrível para criar looks únicos." +
      " Assim como ela, você é cheio(a) de atitude e sabe como brilhar em qualquer situação!",
      
    cleo: 
      "Cleo é confiante, ambiciosa e adora estar no controle." +
      " Com um estilo glamouroso e cheio de personalidade, ela sabe o que quer e sempre busca alcançar seus objetivos." +
      " Assim como ela, você é determinado(a), charmoso(a) e adora um toque de elegância!",
      
    lagoona: 
      "Lagoona é gentil, descontraída e está sempre disposta a ajudar quem precisa." +
      " Assim como ela, você é acolhedor(a), transmite calma e tem uma conexão especial com a natureza e as pessoas."
};  

// Elementos HTML
const questaoElemento = document.getElementById("questao");
const descricaoPersonagem = document.getElementById("descricao");
const botoesDeRespostas = document.getElementById("respostas-btns");
const proximaPerguntaBtn = document.getElementById("proxima-questao");

// Variáveis de estado
let perguntaAtualPosicao = 0;
let pontuacao = { A: 0, B: 0, C: 0, D: 0, E: 0 }; // Contadores de pontos para cada personagem

function iniciarQuiz() {
    perguntaAtualPosicao = 0;
    pontuacao = { A: 0, B: 0, C: 0, D: 0, E: 0 };
    proximaPerguntaBtn.innerHTML = "Próxima pergunta";
    exibirPergunta();
}

function exibirPergunta() {
    resetarSituacao();
    const perguntaAtual = perguntas[perguntaAtualPosicao];
    const numeroPergunta = perguntaAtualPosicao + 1;
    questaoElemento.innerHTML = `${numeroPergunta}/${perguntas.length}.<br>${perguntaAtual.questão}`;

    perguntaAtual.respostas.forEach((resposta) => {
        const botao = document.createElement("button");
        botao.innerHTML = resposta.texto;
        botao.classList.add("btn");
        botao.dataset.alternativa = resposta.alternativa;
        botoesDeRespostas.appendChild(botao);

        botao.addEventListener("click", selecionarResposta);
    });
}

function resetarSituacao() {
    proximaPerguntaBtn.style.display = "none";
    while (botoesDeRespostas.firstChild)
        botoesDeRespostas.removeChild(botoesDeRespostas.firstChild);
}

function selecionarResposta(e) {
    const botaoSelecionado = e.target;

    // Verifica se há outro botão já selecionado e remove a seleção
    const botaoAnteriorSelecionado = botoesDeRespostas.querySelector(".respostaUsuario");
    if (botaoAnteriorSelecionado) {
        botaoAnteriorSelecionado.classList.remove("respostaUsuario");
    }

    // Marca o botão atual como selecionado
    botaoSelecionado.classList.add("respostaUsuario");

    // Incrementa a pontuação com base na alternativa
    const alternativaSelecionada = botaoSelecionado.dataset.alternativa;
    pontuacao[alternativaSelecionada]++;

    proximaPerguntaBtn.style.display = "block";
}

function exibirResultado() {
    resetarSituacao();

    // Determina o personagem com maior pontuação
    const personagemLetra = Object.keys(pontuacao).reduce((a, b) =>
        pontuacao[a] > pontuacao[b] ? a : b
    );

    // Obtém o nome da personagem correspondente
    const personagemNome = personagens[personagemLetra];

    // Exibe o personagem final
    questaoElemento.innerHTML = `Parabéns! Você completou o quiz, acesse a dashbord para ver o resultado!`;
    descricaoPersonagem.innerHTML = `${descricao}`;

    // Cria o botão de redirecionamento
    const botaoRedirecionar = document.createElement("button");
    botaoRedirecionar.innerHTML = "Ver a dashboard";
    botaoRedirecionar.classList.add("btn2");
    botaoRedirecionar.style.marginTop = "20px";

    botaoRedirecionar.addEventListener("click", () => {
        window.location.href = "dashboard.html";
    });

    botoesDeRespostas.appendChild(botaoRedirecionar);

    // Enviando os pontos de cada personagem para armazenar no banco
    fetch(`/quiz/plotagemBancoDados/${JSON.parse(sessionStorage.ID_USUARIO)}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            resultados: Object.entries(pontuacao).map(([letra, pontos]) => ({
                nomePersonagem: personagens[letra],
                pontuacao: pontos,
            })),
        }),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Erro ao enviar os dados para o backend.");
            }
            return response.json();
        })
        .then((data) => {
            console.log("Dados enviados com sucesso:", data);
        })
        .catch((error) => {
            console.error("Erro no envio:", error);
        });
}

function encaminharProximaPergunta() {
    perguntaAtualPosicao++;

    if (perguntaAtualPosicao < perguntas.length) {
        exibirPergunta();
    } else {
        exibirResultado();
    }
}

proximaPerguntaBtn.addEventListener("click", () => {
    if (perguntaAtualPosicao < perguntas.length) {
        encaminharProximaPergunta();
    } else {
        iniciarQuiz();
    }
});

iniciarQuiz();
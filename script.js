var elementoTabela = document.getElementById("tabelaJogadores");
var jogadores = [];  // Uma lista para armazenar todos os jogadores

function exibirNaTela() {
    // Limpa a tabela antes de exibir os jogadores
    elementoTabela.innerHTML = "";

    // Itera sobre a lista de jogadores e adiciona cada um à tabela
    for (var i = 0; i < jogadores.length; i++) {
        var jogador = jogadores[i];
        elementoTabela.innerHTML +=  `
            <tr>
                <td>${jogador.nome}</td>
                <td>${jogador.vitoria}</td>
                <td>${jogador.empate}</td>
                <td>${jogador.derrota}</td>
                <td>${jogador.pontos}</td>
                <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
                <td><button onClick="adicionarEmpate(${i})">Empate</button></td>
                <td><button onClick="adicionarDerrota(${i})">Derrota</button></td>
            </tr>
        `;
    }
}

function adicionarVitoria(index) {
    jogadores[index].vitoria++;
    jogadores[index].pontos = jogadores[index].pontos + 3;
    exibirNaTela();
}

function adicionarEmpate(index) {
    jogadores[index].empate++;
    jogadores[index].pontos++;
    exibirNaTela();
}

function adicionarDerrota(index) {
    jogadores[index].derrota++;
    exibirNaTela();
}

function adicionarNovoJogador(nome) {
    var novoJogador = {
        nome: nome,
        vitoria: 0,
        empate: 0,
        derrota: 0,
        pontos: 0
    };

    jogadores.push(novoJogador);  // Adiciona o novo jogador à lista
    console.log("adicionarNovoJogador: " + novoJogador.nome)
    exibirNaTela();
    return novoJogador;
}

function adicionarJogador() {
    var nomeJogador = document.getElementById("inputJogador").value;
    adicionarNovoJogador(nomeJogador);
    document.getElementById("inputJogador").value = ""; // Limpa o input
}


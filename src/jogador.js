class Jogador {
    constructor(nome, posicao, idade) {
        this.nome = nome;
        this.posicao = posicao;
        this.idade = idade;
        this.gols = 0;
        this.assistencias = 0;
        this.cartoesAmarelos = 0;
        this.cartoesVermelhos = 0;
        this.jogos = 0;
        this.vitorias = 0;
        this.derrotas = 0;
        this.empates = 0;
        this.minutosJogados = 0;
        this.faltas = 0;
        this.impedimentos = 0;
        this.finalizacoes = 0;
        this.finalizacoesNoGol = 0;
        this.dribles = 0;
        this.desarmes = 0;
        this.passesCertos = 0;
    }

    // 1
    marcarGol() {
        this.gols++;
    }

    // 2
    registrarAssistencia() {
        this.assistencias++;
    }

    // 3
    receberCartaoAmarelo() {
        this.cartoesAmarelos++;
    }

    // 4
    receberCartaoVermelho() {
        this.cartoesVermelhos++;
    }

    // 5
    obterInfo() {
        return `${this.nome}, Posição: ${this.posicao}, Idade: ${this.idade}, Gols: ${this.gols}, Assistências: ${this.assistencias}`;
    }

    // 6
    registrarJogo() {
        this.jogos++;
    }

    // 7
    registrarVitoria() {
        this.vitorias++;
    }

    // 8
    registrarDerrota() {
        this.derrotas++;
    }

    // 9
    registrarEmpate() {
        this.empates++;
    }

    // 10
    adicionarMinutos(minutos) {
        this.minutosJogados += minutos;
    }

    // 11
    registrarFalta() {
        this.faltas++;
    }

    // 12
    registrarImpedimento() {
        this.impedimentos++;
    }

    // 13
    registrarFinalizacao() {
        this.finalizacoes++;
    }

    // 14
    registrarFinalizacaoNoGol() {
        this.finalizacoesNoGol++;
    }

    // 15
    registrarDrible() {
        this.dribles++;
    }

    // 16
    registrarDesarme() {
        this.desarmes++;
    }

    // 17
    registrarPasseCerto() {
        this.passesCertos++;
    }

    // 18
    obterTotalCartoes() {
        return this.cartoesAmarelos + this.cartoesVermelhos;
    }

    // 19
    obterParticipacoesEmGols() {
        return this.gols + this.assistencias;
    }

    // 20
    obterAproveitamentoVitorias() {
        if (this.jogos === 0) {
            return 0;
        }

        return (this.vitorias / this.jogos) * 100;
    }
}

module.exports = Jogador;
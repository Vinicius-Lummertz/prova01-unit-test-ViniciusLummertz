class Jogador {
    constructor(nome, posicao, numeroCamisa, idade) {
        this.nome = nome;
        this.posicao = posicao;
        this.numeroCamisa = numeroCamisa;
        this.idade = idade;
        this.gols = 0;
        this.assistencias = 0;
        this.cartoesAmarelos = 0;
        this.cartaoVermelho = false;
        this.partidasJogadas = 0;
        this.emCampo = false;
    }

    obterInfo() {
        return `${this.nome} (#${this.numeroCamisa}) - ${this.posicao}, ${this.idade} anos`;
    }

    marcarGol(quantidade = 1) {
        if (quantidade > 0) {
            this.gols += quantidade;
        }
        return this.gols;
    }

    darAssistencia(quantidade = 1) {
        if (quantidade > 0) {
            this.assistencias += quantidade;
        }
        return this.assistencias;
    }

    jogarPartida() {
        this.partidasJogadas += 1;
        this.emCampo = true;
        return this.partidasJogadas;
    }

    receberCartaoAmarelo() {
        if (this.cartaoVermelho) {
            return 'Jogador já está expulso.';
        }
        this.cartoesAmarelos += 1;
        if (this.cartoesAmarelos >= 2) {
            this.cartaoVermelho = true;
            this.emCampo = false;
            return 'Jogador expulso por dois cartões amarelos.';
        }
        return 'Cartão amarelo aplicado.';
    }

    receberCartaoVermelho() {
        this.cartaoVermelho = true;
        this.emCampo = false;
        return 'Jogador expulso de campo.';
    }

    estaExpulso() {
        return this.cartaoVermelho;
    }

    mediaGolsPorPartida() {
        if (this.partidasJogadas === 0) {
            return 0;
        }
        return Number((this.gols / this.partidasJogadas).toFixed(2));
    }

    transferir(novoNumeroCamisa) {
        if (novoNumeroCamisa < 1 || novoNumeroCamisa > 99) {
            throw new Error('Número de camisa inválido.');
        }
        this.numeroCamisa = novoNumeroCamisa;
        return this.numeroCamisa;
    }

    fazerAniversario() {
        this.idade += 1;
        return this.idade;
    }

    isVeterano() {
        return this.idade >= 33;
    }

    totalParticipacoesEmGols() {
        return this.gols + this.assistencias;
    }

    resetarEstatisticas() {
        this.gols = 0;
        this.assistencias = 0;
        this.cartoesAmarelos = 0;
        this.cartaoVermelho = false;
        this.partidasJogadas = 0;
        this.emCampo = false;
    }
}

module.exports = Jogador;

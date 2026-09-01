const Jogador = require('../src/jogador');

describe('Testes da classe Jogador', () => {
    let jogador;

    beforeEach(() => {
        jogador = new Jogador('Vinicius', 'Atacante', 7, 24);
    });

    test('01 - Deve criar um jogador com os dados corretos', () => {
        expect(jogador.nome).toBe('Vinicius');
        expect(jogador.posicao).toBe('Atacante');
        expect(jogador.numeroCamisa).toBe(7);
        expect(jogador.idade).toBe(24);
    });

    test('02 - Deve iniciar com estatísticas zeradas', () => {
        expect(jogador.gols).toBe(0);
        expect(jogador.assistencias).toBe(0);
        expect(jogador.partidasJogadas).toBe(0);
        expect(jogador.cartoesAmarelos).toBe(0);
        expect(jogador.cartaoVermelho).toBe(false);
        expect(jogador.emCampo).toBe(false);
    });

    test('03 - Deve retornar as informações formatadas do jogador', () => {
        expect(jogador.obterInfo()).toBe('Vinicius (#7) - Atacante, 24 anos');
    });

    test('04 - Deve marcar um gol por padrão', () => {
        expect(jogador.marcarGol()).toBe(1);
        expect(jogador.gols).toBe(1);
    });

    test('05 - Deve marcar vários gols de uma vez', () => {
        jogador.marcarGol(3);
        expect(jogador.gols).toBe(3);
    });

    test('06 - Não deve marcar gols com quantidade zero ou negativa', () => {
        jogador.marcarGol(0);
        jogador.marcarGol(-5);
        expect(jogador.gols).toBe(0);
    });

    test('07 - Deve registrar uma assistência por padrão', () => {
        expect(jogador.darAssistencia()).toBe(1);
    });

    test('08 - Não deve registrar assistência com quantidade inválida', () => {
        jogador.darAssistencia(-2);
        expect(jogador.assistencias).toBe(0);
    });

    test('09 - Deve incrementar partidas jogadas e colocar o jogador em campo', () => {
        expect(jogador.jogarPartida()).toBe(1);
        expect(jogador.emCampo).toBe(true);
    });

    test('10 - Deve contabilizar várias partidas jogadas', () => {
        jogador.jogarPartida();
        jogador.jogarPartida();
        jogador.jogarPartida();
        expect(jogador.partidasJogadas).toBe(3);
    });

    test('11 - Deve aplicar um cartão amarelo sem expulsar', () => {
        const resultado = jogador.receberCartaoAmarelo();
        expect(resultado).toBe('Cartão amarelo aplicado.');
        expect(jogador.cartoesAmarelos).toBe(1);
        expect(jogador.estaExpulso()).toBe(false);
    });

    test('12 - Deve expulsar o jogador com dois cartões amarelos', () => {
        jogador.jogarPartida();
        jogador.receberCartaoAmarelo();
        const resultado = jogador.receberCartaoAmarelo();
        expect(resultado).toBe('Jogador expulso por dois cartões amarelos.');
        expect(jogador.estaExpulso()).toBe(true);
        expect(jogador.emCampo).toBe(false);
    });

    test('13 - Não deve aplicar cartão amarelo em jogador já expulso', () => {
        jogador.receberCartaoVermelho();
        expect(jogador.receberCartaoAmarelo()).toBe('Jogador já está expulso.');
        expect(jogador.cartoesAmarelos).toBe(0);
    });

    test('14 - Deve expulsar o jogador com cartão vermelho direto', () => {
        jogador.jogarPartida();
        expect(jogador.receberCartaoVermelho()).toBe('Jogador expulso de campo.');
        expect(jogador.estaExpulso()).toBe(true);
        expect(jogador.emCampo).toBe(false);
    });

    test('15 - Deve retornar zero na média de gols sem partidas jogadas', () => {
        jogador.marcarGol(5);
        expect(jogador.mediaGolsPorPartida()).toBe(0);
    });

    test('16 - Deve calcular a média de gols por partida', () => {
        jogador.jogarPartida();
        jogador.jogarPartida();
        jogador.jogarPartida();
        jogador.marcarGol(5);
        expect(jogador.mediaGolsPorPartida()).toBe(1.67);
    });

    test('17 - Deve transferir o jogador alterando o número da camisa', () => {
        expect(jogador.transferir(10)).toBe(10);
        expect(jogador.obterInfo()).toBe('Vinicius (#10) - Atacante, 24 anos');
    });

    test('18 - Deve lançar erro ao transferir com número de camisa inválido', () => {
        expect(() => jogador.transferir(0)).toThrow('Número de camisa inválido.');
        expect(() => jogador.transferir(100)).toThrow('Número de camisa inválido.');
    });

    test('19 - Deve envelhecer o jogador e identificar veterano', () => {
        expect(jogador.isVeterano()).toBe(false);
        for (let i = 0; i < 9; i += 1) {
            jogador.fazerAniversario();
        }
        expect(jogador.idade).toBe(33);
        expect(jogador.isVeterano()).toBe(true);
    });

    test('20 - Deve somar participações em gols e resetar estatísticas', () => {
        jogador.marcarGol(4);
        jogador.darAssistencia(2);
        jogador.jogarPartida();
        expect(jogador.totalParticipacoesEmGols()).toBe(6);

        jogador.resetarEstatisticas();
        expect(jogador.totalParticipacoesEmGols()).toBe(0);
        expect(jogador.partidasJogadas).toBe(0);
        expect(jogador.estaExpulso()).toBe(false);
    });
});

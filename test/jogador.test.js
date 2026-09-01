const Jogador = require('../src/jogador');

describe('Testes da classe Jogador', () => {

    test('1. Deve marcar um gol', () => {
        const jogador = new Jogador('Vini. Jr', 'Atacante', 34);

        jogador.marcarGol();

        expect(jogador.gols).toBe(1);
    });


    test('2. Deve registrar uma assistência', () => {
        const jogador = new Jogador('Vini. Jr', 'Atacante', 34);

        jogador.registrarAssistencia();

        expect(jogador.assistencias).toBe(1);
    });


    test('3. Deve registrar um cartão amarelo', () => {
        const jogador = new Jogador('Vini. Jr', 'Atacante', 34);

        jogador.receberCartaoAmarelo();

        expect(jogador.cartoesAmarelos).toBe(1);
    });


    test('4. Deve registrar um cartão vermelho', () => {
        const jogador = new Jogador('Vini. Jr', 'Atacante', 34);

        jogador.receberCartaoVermelho();

        expect(jogador.cartoesVermelhos).toBe(1);
    });


    test('5. Deve retornar as informações do jogador', () => {
        const jogador = new Jogador('Vini. Jr', 'Atacante', 34);

        expect(jogador.obterInfo()).toBe(
            'Vini. Jr, Posição: Atacante, Idade: 34, Gols: 0, Assistências: 0'
        );
    });


    test('6. Deve registrar um jogo', () => {
        const jogador = new Jogador('Vini. Jr', 'Atacante', 34);

        jogador.registrarJogo();

        expect(jogador.jogos).toBe(1);
    });


    test('7. Deve registrar uma vitória', () => {
        const jogador = new Jogador('Vini. Jr', 'Atacante', 34);

        jogador.registrarVitoria();

        expect(jogador.vitorias).toBe(1);
    });


    test('8. Deve registrar uma derrota', () => {
        const jogador = new Jogador('Vini. Jr', 'Atacante', 34);

        jogador.registrarDerrota();

        expect(jogador.derrotas).toBe(1);
    });


    test('9. Deve registrar um empate', () => {
        const jogador = new Jogador('Vini. Jr', 'Atacante', 34);

        jogador.registrarEmpate();

        expect(jogador.empates).toBe(1);
    });


    test('10. Deve adicionar minutos jogados', () => {
        const jogador = new Jogador('Vini. Jr', 'Atacante', 34);

        jogador.adicionarMinutos(90);

        expect(jogador.minutosJogados).toBe(90);
    });


    test('11. Deve registrar uma falta', () => {
        const jogador = new Jogador('Vini. Jr', 'Atacante', 34);

        jogador.registrarFalta();

        expect(jogador.faltas).toBe(1);
    });


    test('12. Deve registrar um impedimento', () => {
        const jogador = new Jogador('Vini. Jr', 'Atacante', 34);

        jogador.registrarImpedimento();

        expect(jogador.impedimentos).toBe(1);
    });


    test('13. Deve registrar uma finalização', () => {
        const jogador = new Jogador('Vini. Jr', 'Atacante', 34);

        jogador.registrarFinalizacao();

        expect(jogador.finalizacoes).toBe(1);
    });


    test('14. Deve registrar uma finalização no gol', () => {
        const jogador = new Jogador('Vini. Jr', 'Atacante', 34);

        jogador.registrarFinalizacaoNoGol();

        expect(jogador.finalizacoesNoGol).toBe(1);
    });


    test('15. Deve registrar um drible', () => {
        const jogador = new Jogador('Vini. Jr', 'Atacante', 34);

        jogador.registrarDrible();

        expect(jogador.dribles).toBe(1);
    });


    test('16. Deve registrar um desarme', () => {
        const jogador = new Jogador('Vini. Jr', 'Atacante', 34);

        jogador.registrarDesarme();

        expect(jogador.desarmes).toBe(1);
    });


    test('17. Deve registrar um passe certo', () => {
        const jogador = new Jogador('Vini. Jr', 'Atacante', 34);

        jogador.registrarPasseCerto();

        expect(jogador.passesCertos).toBe(1);
    });


    test('18. Deve retornar o total de cartões', () => {
        const jogador = new Jogador('Vini. Jr', 'Atacante', 34);

        jogador.receberCartaoAmarelo();
        jogador.receberCartaoVermelho();

        expect(jogador.obterTotalCartoes()).toBe(2);
    });


    test('19. Deve retornar o total de participações em gols', () => {
        const jogador = new Jogador('Vini. Jr', 'Atacante', 34);

        jogador.marcarGol();
        jogador.registrarAssistencia();

        expect(jogador.obterParticipacoesEmGols()).toBe(2);
    });


    test('20. Deve retornar o aproveitamento de vitórias', () => {
        const jogador = new Jogador('Vini. Jr', 'Atacante', 34);

        jogador.registrarJogo();
        jogador.registrarJogo();
        jogador.registrarVitoria();

        expect(jogador.obterAproveitamentoVitorias()).toBe(50);
    });

});
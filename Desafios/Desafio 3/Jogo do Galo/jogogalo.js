class JogoDoGalo {
    constructor() {
        this.tabuleiro = [
            ["_", "_", "_"],
            ["_", "_", "_"],
            ["_", "_", "_"],
        ]
        this.jogadorAtual = "X"
    }
    adicionarJogada(linha, coluna) {
        if (this.tabuleiro[linha][coluna] === "_") {
            this.tabuleiro[linha][coluna] === this.jogadorAtual;
            (this.jogadorAtual === "X")
            this.jogadorAtual = this.jogadorAtual === "X" ? "O" : "X";
        }
        return this;
    }
    obterJogadasPossiveis() {
        const jogadas = [];
        for (let i = 0; i < this.tabuleiro.length; i++) {
            const linha = this.tabuleiro[i];
            if (linha[0] === "_") {
                jogadas.push({ linha: i, colunas: 0 })
            }
            if (linha[1] === "_") {
                jogadas.push({ linha: i, colunas: 1 })
            }
            if (linha[2] === "_") {
                jogadas.push({ linha: i, colunas: 2 })
            }
        } return jogadas
    }

    verificarVencedor() {
        const diagonal1 = [[0, 0], [1, 1], [2, 2]]
        const diagonal2 = [[0, 2], [1, 1], [2, 0]]

        for (let i = 0; i < this.tabuleiro.length; i++) {
            const linha = this.tabuleiro[i];
            const colunaT = this.tabuleiro[0][i]
            const colunaM = this.tabuleiro[1][i]
            const colunaB = this.tabuleiro[2][i]
            if ((linha[0] === "X") || (linha[1] === "X") || (linha[2] === "X") || (colunaB === "X") || (colunaM === "X") || (colunaT === "X") || (diagonal1[0] === "X" && diagonal1[1] === "X" && diagonal1[2] === "X") || (diagonal2[0] === "X" && diagonal2[1] === "X" && diagonal2[2] === "X")) {

                return "X"
            }
            if ((linha[0] === "O") || (linha[1] === "O") || (linha[2] === "O") || (colunaB === "O") || (colunaM === "O") || (colunaT === "O") || (diagonal1[0] === "O" && diagonal1[1] === "O" && diagonal1[2] === "O") || (diagonal2[0] === "O" && diagonal2[1] === "O" && diagonal2[2] === "O")) {

                return "O"
            }
        } return undefined

    }

    verificarFimDoJogo() {
        return this.tabuleiro
            .flat()
            .every((e) => e !== "_" || this.verificarVencedor(e) !== undefined);
    }
}

//const jogo = new JogoDoGalo();
//console.log(Jogo)
//Cria aqui o teu componente
import { useJogoDoGalo } from "../hooks/useJogoDoGalo";
import styles from "../styles/JogoDoGalo.module.css"

const casaVazia = " "
export function JogoDoGalo() {
    const {
        jogo,
        verificarFimDoJogo,
        adicionarJogada,
        verificarVencedor, 
        reiniciarJogo,
    } = useJogoDoGalo()
    
    function handleCellClick(jogo, jogadorAtual, indiceLinha, indiceColuna) {
      const casaSelecionada = jogo.tabuleiro[indiceLinha][indiceColuna];

      if (!verificarFimDoJogo(jogo) && casaSelecionada === casaVazia) {
        adicionarJogada(jogo, jogadorAtual, indiceLinha, indiceColuna);
      }     
    }


    return (
        <div className={styles.wrapper} >
          <div className={styles.bgImage}>
            <img src="/ironman.png"/>
          </div>
            <div className={styles.info}>
            {verificarFimDoJogo(jogo) ? (
              <p>
                {verificarVencedor(jogo)
                  ? `${verificarVencedor(jogo)} venceu!`
                  : "Empate!"}
              </p>
            ) : (
              <p>Jogador atual: {jogo.jogadorAtual}</p>
            )}
          </div>
            <div className={styles.tabuleiroContainer}>
                {jogo.tabuleiro.map((linha, indiceLinha) => (
                    <div key={indiceLinha} className={styles.tabuleiro}>
                        {linha.map((valor, indiceColuna) => (
                            <button
                                key={`${indiceLinha}-${indiceColuna}`}
                                className={styles.cell}
                                onClick={() => handleCellClick(jogo, jogo.jogadorAtual, indiceLinha, indiceColuna)}
                            >
                                {valor}
                            </button>
                        ))}
                    </div>
                ))}
            </div>
            <div className={styles.buttonWrapper}>
                <button className={styles.buttonWrapper} onClick={() => reiniciarJogo()}>Reiniciar Jogo</button>
            </div>
        </div>
    )
}






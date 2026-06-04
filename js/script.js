/**
 * SYS.GAME - Lógica Principal
 * Controla a exibição das linhas do tempo na página de Evolução.
 */

function mostrarLinhagem(idLinhagem) {
    // 1. Busca todos os elementos que têm a classe 'linhagem'
    const todasLinhagens = document.querySelectorAll('.linhagem');
    
    // 2. Remove a classe 'ativa' de todos eles (escondendo qualquer um que esteja aberto)
    todasLinhagens.forEach(elemento => {
        elemento.classList.remove('ativa');
    });

    // 3. Pega a linhagem específica que o usuário clicou (baseado no ID passado)
    const linhagemEscolhida = document.getElementById(idLinhagem);
    
    // 4. Se a linhagem existir, adiciona a classe 'ativa' para exibi-la
    if (linhagemEscolhida) {
        linhagemEscolhida.classList.add('ativa');
        
        // 5. Rola a página suavemente para baixo para focar no conteúdo recém-aberto
        linhagemEscolhida.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }
}
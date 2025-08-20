document.addEventListener('DOMContentLoaded', function () {
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')

    botaoDeAcessibilidade.addEventListener('click', function () {
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista')

    })

    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })

    diminuiFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })

    // Tentar iniciar música ao carregar. Se bloqueado, iniciar na primeira interação do usuário.
    const bgMusic = document.getElementById('bg-music');
    function tryPlayMusic() {
        if (!bgMusic) return;
        bgMusic.loop = true;
        bgMusic.volume = 0.6;
        const playPromise = bgMusic.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                // Autoplay bloqueado: aguarda primeira interação
                const startOnInteraction = () => {
                    bgMusic.play().catch(() => {});
                    window.removeEventListener('click', startOnInteraction);
                    window.removeEventListener('keydown', startOnInteraction);
                };
                window.addEventListener('click', startOnInteraction, { once: true });
                window.addEventListener('keydown', startOnInteraction, { once: true });
            });
        }
    }

    tryPlayMusic();
})
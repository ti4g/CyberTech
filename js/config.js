document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.menu-list a');
    const tabContents = document.querySelectorAll('.tab-content');

    // Função para alternar entre as abas
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();

            // Remove a classe ativa de todos os tabs
            tabs.forEach(t => t.classList.remove('is-active'));
            tabContents.forEach(tc => tc.classList.add('is-hidden'));

            // Adiciona a classe ativa ao tab clicado
            tab.classList.add('is-active');
            document.getElementById(tab.dataset.tab).classList.remove('is-hidden');
        });
    });

    // Função para aplicar o tema
    const aplicarTemaBtn = document.getElementById('aplicar-tema');
    aplicarTemaBtn.addEventListener('click', () => {
        const temaSelecionado = document.querySelector('input[name="tema"]:checked').value;

        // Aplica o tema ao body
        document.body.classList.remove('tema-claro', 'tema-escuro');
        document.body.classList.add(`tema-${temaSelecionado}`);

        // Salva a preferência no localStorage
        localStorage.setItem('tema', temaSelecionado);
        alert(`Tema ${temaSelecionado} aplicado com sucesso!`);
    });

    // Função para aplicar o idioma
    const aplicarIdiomaBtn = document.getElementById('aplicar-idioma');
    aplicarIdiomaBtn.addEventListener('click', () => {
        const idiomaSelecionado = document.getElementById('selecionar-idioma').value;

        // Salva a preferência no localStorage
        localStorage.setItem('idioma', idiomaSelecionado);
        alert(`Idioma alterado para ${idiomaSelecionado === 'pt-br' ? 'Português' : idiomaSelecionado === 'en' ? 'Inglês' : 'Espanhol'}. Recarregue a página para ver as mudanças.`);
    });

    // Aplicar tema salvo ao carregar a página
    const temaSalvo = localStorage.getItem('tema');
    if (temaSalvo) {
        document.body.classList.add(`tema-${temaSalvo}`);
        document.querySelector(`input[value="${temaSalvo}"]`).checked = true;
    }
});
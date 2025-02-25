document.addEventListener('DOMContentLoaded', () => {
    const isConfigPage = window.location.pathname.includes('config.html');

    // nav bar para aparecer em telas pequenas
    
    document.addEventListener('DOMContentLoaded', () => {
        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    
        // Add a click event on each of them
        if ($navbarBurgers.length > 0) {
            $navbarBurgers.forEach(el => {
                el.addEventListener('click', () => {
                    // Get the target from the "data-target" attribute
                    const target = el.dataset.target;
                    const $target = document.getElementById(target);
    
                    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                    el.classList.toggle('is-active');
                    $target.classList.toggle('is-active');
                });
            });
        }
    });


    // ==================== SISTEMA DE TRADUÇÕES ====================
    const traducoes = {
        'pt-br': {
            'logo': 'CyberStore',
            'inicio': 'Início',
            'produtos': 'Produtos',
            'sobre': 'Sobre Nós',
            'contato': 'Contato',
            'config': 'Configurações',
            'bem_vindo': 'Bem-vindo à CyberStore',
            'slogan': 'As melhores tecnologias pelo melhor preço',
            'ver_produtos': 'Ver Produtos',
            'nossos_produtos': 'Nossos Produtos',
            'comprar': 'Comprar',
            'sobre_titulo': 'Sobre Nós',
            'nossa_historia': 'Nossa História',
            'historia_texto': 'Fundada em 2020...',
            'contato_titulo': 'Contato',
            'nome': 'Nome',
            'enviar': 'Enviar',
            'info_contato': 'Informações de Contato',
            'endereco': 'Endereço:',
            'direitos': '© 2023 CyberStore',
            'configuracoes': 'Configurações',
            'preferencias': 'Preferências',
            'tema': 'Tema',
            'idioma': 'Idioma',
            'selecionar_idioma': 'Selecione o idioma',
            'aplicar_tema': 'Aplicar Tema',
            'aplicar_idioma': 'Aplicar Idioma',
            'tema_claro': 'Tema Claro',
            'tema_escuro': 'Tema Escuro',
            'tema_azul': 'Tema Azul',
            'tema_verde': 'Tema Verde',
            'tema_vermelho': 'Tema Vermelho',
            'tema_roxo': 'Tema Roxo',
            'tema_laranja': 'Tema Laranja',
            'tema_cyber': 'Tema Cyber',
            'tema_rosa': 'Tema Rosa',
            'tema_vintage': 'Tema Vintage',
            'tema_contraste': 'Alto Contraste',
            'lingua_pt': 'Português (Brasil)',
            'lingua_en': 'Inglês',
            'lingua_es': 'Espanhol',
            'nome_placeholder': 'Seu nome',
            'email_placeholder': 'Seu e-mail',
            'mensagem_placeholder': 'Sua mensagem'
        },
        'en': {
            'logo': 'CyberStore',
            'inicio': 'Home',
            'produtos': 'Products',
            'sobre': 'About Us',
            'contato': 'Contact',
            'config': 'Settings',
            'bem_vindo': 'Welcome to CyberStore',
            'slogan': 'Best technologies for the best price',
            'ver_produtos': 'View Products',
            'nossos_produtos': 'Our Products',
            'novidades': 'News',
            'comprar': 'Buy',
            'sobre_titulo': 'About Us',
            'nossa_historia': 'Our History',
            'historia_texto': 'Founded in 2020, CyberStore has been revolutionizing the tech market...',
            'nossos_valores': 'Our Values',
            'contato_titulo': 'Contact',
            'nome': 'Name',
            'enviar': 'Send',
            'info_contato': 'Contact Information',
            'endereco': 'Address:',
            'direitos': '© 2023 CyberStore - All rights reserved',
            'nome_placeholder': 'Your name',
            'email_placeholder': 'Your email',
            'mensagem_placeholder': 'Your message',
            'endereco_texto': 'Tech Street, 123 - São Paulo/SP',
            'telefone': 'Phone:',
            'email': 'Email:',
            'email_placed': 'Email',
            'preferencias': 'Preferences',
            'tema': 'Theme',
            'idioma': 'Language',
            'selecionar_idioma': 'Select language',
            'aplicar_tema': 'Apply Theme',
            'aplicar_idioma': 'Apply Language',
            'tema_claro': 'Light Theme',
            'tema_escuro': 'Dark Theme',
            'tema_azul': 'Blue Theme',
            'tema_verde': 'Green Theme',
            'tema_vermelho': 'Red Theme',
            'tema_roxo': 'Purple Theme',
            'tema_laranja': 'Orange Theme',
            'tema_cyber': 'Cyber Theme',
            'tema_rosa': 'Pink Theme',
            'tema_vintage': 'Vintage Theme',
            'tema_contraste': 'High Contrast',
            'lingua_pt': 'Portuguese (Brazil)',
            'lingua_en': 'English',
            'lingua_es': 'Spanish'
        },
        'es': {
            'logo': 'CyberStore',
            'inicio': 'Inicio',
            'produtos': 'Productos',
            'sobre': 'Sobre Nosotros',
            'contato': 'Contacto',
            'config': 'Configuración',
            'bem_vindo': 'Bienvenido a CyberStore',
            'slogan': 'Las mejores tecnologías al mejor precio',
            'ver_produtos': 'Ver Productos',
            'nossos_produtos': 'Nuestros Productos',
            'novidades': 'Novedad',
            'comprar': 'Comprar',
            'sobre_titulo': 'Sobre Nosotros',
            'nossa_historia': 'Nuestra Historia',
            'historia_texto': 'Fundada en 2020, CyberStore ha revolucionado el mercado tecnológico...',
            'nossos_valores': 'Nuestros Valores',
            'contato_titulo': 'Contacto',
            'nome': 'Nombre',
            'enviar': 'Enviar',
            'info_contato': 'Información de Contacto',
            'endereco': 'Dirección:',
            'direitos': '© 2023 CyberStore - Todos los derechos reservados',
            'nome_placeholder': 'Tu nombre',
            'email_placeholder': 'Tu correo electrónico',
            'mensagem_placeholder': 'Tu mensaje',
            'endereco_texto': 'Calle de la Tecnología, 123 - São Paulo/SP',
            'telefone': 'Teléfono',
            'email': 'E-mail:',
            'email_placed': 'Email',
            'preferencias': 'Preferencias',
            'tema': 'Tema',
            'idioma': 'Idioma',
            'selecionar_idioma': 'Seleccionar idioma',
            'aplicar_tema': 'Aplicar Tema',
            'aplicar_idioma': 'Aplicar Idioma',
            'tema_claro': 'Tema Claro',
            'tema_escuro': 'Tema Oscuro',
            'tema_azul': 'Tema Azul',
            'tema_verde': 'Tema Verde',
            'tema_vermelho': 'Tema Rojo',
            'tema_roxo': 'Tema Púrpura',
            'tema_laranja': 'Tema Naranja',
            'tema_cyber': 'Tema Cyber',
            'tema_rosa': 'Tema Rosa',
            'tema_vintage': 'Tema Vintage',
            'tema_contraste': 'Alto Contraste',
            'lingua_pt': 'Portugués (Brasil)',
            'lingua_en': 'Inglés',
            'lingua_es': 'Español'
        }
    };

     // ==================== FUNÇÕES GLOBAIS ====================
     const aplicarTraducoes = (idioma) => {
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.dataset.translate;
            
            if (key.startsWith('[placeholder]')) {
                const realKey = key.replace('[placeholder]', '');
                el.placeholder = traducoes[idioma][realKey] || el.placeholder;
            } else {
                el.textContent = traducoes[idioma][key] || el.textContent;
            }
        });

        if (isConfigPage) {
            const selectIdioma = document.getElementById('selecionar-idioma');
            if (selectIdioma) {
                selectIdioma.innerHTML = '';
                ['pt-br', 'en', 'es'].forEach(lang => {
                    const option = document.createElement('option');
                    option.value = lang;
                    option.textContent = traducoes[idioma][`lingua_${lang.split('-')[0]}`];
                    selectIdioma.appendChild(option);
                });
            }
        }
    };

    // ==================== SISTEMA DE TEMAS ====================
    const aplicarTema = (tema) => {
        document.documentElement.className = `tema-${tema}`;
        localStorage.setItem('tema', tema);
    };

    // ==================== INICIALIZAÇÃO ====================
    const idioma = localStorage.getItem('idioma') || 'pt-br';
    const tema = localStorage.getItem('tema') || 'claro';

    // Aplicar traduções
    aplicarTraducoes(idioma);
    aplicarTema(tema);

    // ==================== CONFIG PAGE ====================
    if (isConfigPage) {
        // Sistema de Abas
        const tabs = document.querySelectorAll('.menu-list a');
        const tabContents = document.querySelectorAll('.tab-content');

        tabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                e.preventDefault();
                tabs.forEach(t => t.classList.remove('is-active'));
                tabContents.forEach(tc => tc.classList.add('is-hidden'));
                tab.classList.add('is-active');
                document.getElementById(tab.dataset.tab).classList.remove('is-hidden');
            });
        });

        // Configurar tema selecionado
        const radioTema = document.querySelector(`input[value="${tema}"]`);
        if (radioTema) radioTema.checked = true;

        // Configurar idioma selecionado
        const selectIdioma = document.getElementById('selecionar-idioma');
        if (selectIdioma) selectIdioma.value = idioma;

        // Evento: Aplicar Tema
        document.getElementById('aplicar-tema').addEventListener('click', () => {
            const temaSelecionado = document.querySelector('input[name="tema"]:checked').value;
            aplicarTema(temaSelecionado);
        });

        // Evento: Aplicar Idioma
        document.getElementById('aplicar-idioma').addEventListener('click', () => {
            const novoIdioma = document.getElementById('selecionar-idioma').value;
            localStorage.setItem('idioma', novoIdioma);
            location.reload();
        });
    }
});

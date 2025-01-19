document.addEventListener('DOMContentLoaded', function() {
    // Seleção de elementos
    const navButtons = document.querySelectorAll('.nav-btn');
    const menuSections = document.querySelectorAll('.menu-section');

    // Função para trocar de seção
    function switchSection(sectionId) {
        // Remove a classe active de todas as seções e botões
        menuSections.forEach(section => section.classList.remove('active'));
        navButtons.forEach(btn => btn.classList.remove('active'));

        // Adiciona a classe active na seção e botão selecionados
        document.getElementById(sectionId).classList.add('active');
        document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');
    }

    // Adiciona evento de clique aos botões de navegação
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.getAttribute('data-section');
            switchSection(sectionId);
        });
    }); 

    // Efeito de parallax suave no header
    const cover = document.querySelector('.cover');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        cover.style.backgroundPositionY = `${scrolled * 0.5}px`;
    });

    // Animação suave ao rolar para as seções
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            section.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

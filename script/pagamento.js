// script.js

document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');
    const pages = document.querySelectorAll('.page-content');
    const currentTimeSpan = document.getElementById('current-time');
    const markPointButton = document.getElementById('mark-point');
    const lastMarkElement = document.getElementById('last-mark');
    
    // ---------------------------------------------
    // 1. Alternância de Páginas (Menu)
    // ---------------------------------------------

    function showPage(pageId) {
        // Remove 'active' de todos os menus
        menuItems.forEach(item => item.classList.remove('active'));
        // Remove 'active-page' de todas as páginas
        pages.forEach(page => page.classList.remove('active-page'));
        
        // Ativa o item de menu e a página correspondente
        document.querySelector(`.menu-item[data-page="${pageId}"]`).classList.add('active');
        document.getElementById(pageId).classList.add('active-page');
    }

    // Listener para todos os itens do menu
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const pageId = item.getAttribute('data-page');
            showPage(pageId);
        });
    });

    // ---------------------------------------------
    // 2. Funcionalidade da Tela de Ponto
    // ---------------------------------------------

    // Atualiza o relógio na tela de Ponto
    function updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('pt-BR', {hour: '2-digit', minute:'2-digit', second: '2-digit'});
        if (currentTimeSpan) {
            currentTimeSpan.textContent = timeString;
        }
    }
    
    // Inicia e mantém o relógio
    setInterval(updateClock, 1000);
    updateClock();

    // Funcionalidade de Marcar Ponto (simulação)
    if (markPointButton) {
        markPointButton.addEventListener('click', () => {
            const now = new Date();
            const timeString = now.toLocaleTimeString('pt-BR', {hour: '2-digit', minute:'2-digit'});
            const dateString = now.toLocaleDateString('pt-BR');
            
            // Simula o registro
            const newMark = `Ponto registrado em ${dateString} às ${timeString}h`;
            
            // Atualiza o feedback visual
            if (lastMarkElement) {
                lastMarkElement.textContent = `Última Marcação: ${newMark}`;
            }
            alert(`Ponto registrado com sucesso! ${timeString}h`);
        });
    }

    // ---------------------------------------------
    // 3. Inicialização
    // ---------------------------------------------
    // Define a página de "Colaboradores" como a inicial
    const defaultPageId = 'colaboradores';
    const defaultMenuItem = document.querySelector(`.menu-item[data-page="${defaultPageId}"]`);
    
    if (defaultMenuItem) {
        defaultMenuItem.classList.add('active');
        document.getElementById(defaultPageId).classList.add('active-page');
    }
});
// script.js
function ajustarTela() {
    const tela = document.querySelector('.tela-login');
    const largura = window.innerWidth;

    if (largura < 500) {
        tela.style.width = '85%';
        tela.style.padding = '20px';
    } else if (largura < 900) {
        tela.style.width = '50%';
        tela.style.padding = '30px';
    } else {
        tela.style.width = '300px';
        tela.style.padding = '40px';
    }
}

window.addEventListener('load', ajustarTela);
window.addEventListener('resize', ajustarTela);

// script.js
function ajustarTela() {
    const tela = document.querySelector('.tela-login');
    const largura = window.innerWidth;

    if (largura < 500) {
        tela.style.width = '85%';
        tela.style.padding = '20px';
    } else if (largura < 900) {
        tela.style.width = '50%';
        tela.style.padding = '30px';
    } else {
        tela.style.width = '300px';
        tela.style.padding = '40px';
    }
}

window.addEventListener('load', ajustarTela);
window.addEventListener('resize', ajustarTela);  
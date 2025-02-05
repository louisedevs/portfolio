document.addEventListener("scroll", function () {
    const intro = document.querySelector(".intro");
    const sobreMim = document.querySelector(".sobre-mim");
    const meusProjetos = document.querySelector(".meus-projetos");
    const contato = document.querySelector(".contato");

    // Controla o "Bem-vindo" e a subida do "Sobre mim"
    if (window.scrollY > 100) {
        intro.style.opacity = "0";
        sobreMim.classList.add("moved-up");
    } else {
        intro.style.opacity = "1";
        sobreMim.classList.remove("moved-up");
    }

    // Controla a aparição de "Meus Projetos" e "Contato"
    const meusProjetosPosition = meusProjetos.getBoundingClientRect().top;
    const contatoPosition = contato.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (meusProjetosPosition < screenHeight * 0.8) {
        meusProjetos.classList.add("visible");
    }

    if (contatoPosition < screenHeight * 0.8) {
        contato.classList.add("visible");
    }
});

window.addEventListener("load", function() {
    document.querySelector('.intro').classList.add('appear');
});

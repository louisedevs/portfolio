document.addEventListener("scroll", function () {
    const intro = document.querySelector(".intro");
    const sobreMim = document.querySelector(".sobre-mim");
    const meusProjetos = document.querySelector(".meus-projetos");
    const contato = document.querySelector(".contato");

    // Controla o "Bem-vindo" e a subida do "Sobre mim"
    if (window.scrollY > 100) {
        intro.style.opacity = "0"; // Faz o "Bem-vindo" desaparecer
        intro.style.transition = "opacity 0.5s ease-in-out"; // Transição suave
        sobreMim.classList.add("moved-up"); // Move o "Sobre mim" para cima
    } else {
        intro.style.opacity = "1"; // Faz o "Bem-vindo" reaparecer
        sobreMim.classList.remove("moved-up"); // Retorna o "Sobre mim" à posição original
    }

    // Controla a aparição de "Meus Projetos" e "Contato"
    const meusProjetosPosition = meusProjetos.getBoundingClientRect().top;
    const contatoPosition = contato.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (meusProjetosPosition < screenHeight * 0.8) {
        meusProjetos.classList.add("visible"); // Faz "Meus Projetos" aparecer
    }

    if (contatoPosition < screenHeight * 0.8) {
        contato.classList.add("visible"); // Faz "Contato" aparecer
    }
});

window.addEventListener("load", function () {
    document.querySelector('.intro').classList.add('appear'); // Faz o "Bem-vindo" aparecer ao carregar a página
});
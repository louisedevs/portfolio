document.addEventListener("scroll", function() {
    const intro = document.querySelector(".intro");
    if (window.scrollY > 100) {
        intro.style.opacity = "0";
    } else {
        intro.style.opacity = "1";
    }
});

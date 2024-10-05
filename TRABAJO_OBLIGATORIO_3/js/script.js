// Script para exibir o menu dinâmico
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animação dos Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Animação do Burger
        burger.classList.toggle('toggle');
    });
};

navSlide();

// AJAX para carregar as notícias
document.addEventListener("DOMContentLoaded", function() {
    fetch('data/noticias.json')
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.getElementById('news-container');
            let newsHTML = '';
            data.noticias.forEach(noticia => {
                newsHTML += `<div class="col-md-4">
                                <div class="card mb-4">
                                    <div class="card-body">
                                        <h5 class="card-title">${noticia.titulo}</h5>
                                        <p class="card-text">${noticia.descripcion}</p>
                                    </div>
                                </div>
                             </div>`;
            });
            newsContainer.innerHTML = newsHTML;
            // Animação das notícias
            gsap.from(".card", {opacity: 0, duration: 1, y: 50, stagger: 0.2});
        })
        .catch(error => console.log('Error al cargar las noticias:', error));
});

// script.js
function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('.faq-icon');
    
    if (answer.style.display === "none" || answer.style.display === "") {
        answer.style.display = "block";
        icon.textContent = "X";
    } else {
        answer.style.display = "none";
        icon.textContent = "+";
    }
}

//corrosel

let slideIndex = 0;

let autoSlideInterval;

function moveSlide(direction) {
    const slides = document.querySelector('.carousel-slide');
    const totalSlides = slides.children.length;

    // Atualiza o índice da imagem atual
    slideIndex += direction;

    // Garante que o carrossel seja circular
    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    } else if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }

    // Move o carrossel para a imagem correspondente
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;

    // Reinicia o intervalo automático ao mover manualmente
    resetAutoSlide();
}

function autoSlide() {
    moveSlide(1); // Move para a próxima imagem automaticamente
}

// Reinicia o intervalo para que o carrossel continue automaticamente após uma interação manual
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(autoSlide, 4000); // Avança automaticamente a cada 3 segundos
}

// Inicia o carrossel automático quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    autoSlideInterval = setInterval(autoSlide, 5000); // Avança automaticamente a cada 3 segundos
});


//feedback
// Função para abrir o lightbox
function openLightbox(imgSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = imgSrc; // Define a imagem no lightbox
    lightbox.style.display = 'flex'; // Exibe o lightbox
}

// Função para fechar o lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none'; // Oculta o lightbox
}

// Fechar o lightbox ao clicar fora da imagem
document.getElementById('lightbox').addEventListener('click', function (event) {
    // Se o clique for fora da imagem, fecha o lightbox
    if (event.target === this) {
        closeLightbox();
    }
});

// Fechar o lightbox ao pressionar a tecla "Esc"
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeLightbox();
    }
});




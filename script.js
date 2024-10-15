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
    autoSlideInterval = setInterval(autoSlide, 5000); // Avança automaticamente a cada 3 segundos
}

// Inicia o carrossel automático quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    autoSlideInterval = setInterval(autoSlide, 5000); // Avança automaticamente a cada 3 segundos
});

//contador tempo ilimitado
function startCountdown(hours, minutes, seconds) {
    const countdownElement = document.getElementById('time-remaining');
    let totalSeconds = hours * 3600 + minutes * 60 + seconds;

    function updateCountdown() {
        const remainingHours = Math.floor(totalSeconds / 3600);
        const remainingMinutes = Math.floor((totalSeconds % 3600) / 60);
        const remainingSeconds = totalSeconds % 60;

        countdownElement.textContent = `${remainingHours} horas ${remainingMinutes} minutos ${remainingSeconds} segundos`;

        if (totalSeconds > 0) {
            totalSeconds--;
        } else {
            clearInterval(timer);
            countdownElement.textContent = 'Tempo Esgotado!';
        }
    }

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
}

// Inicia o contador com 2 horas, 49 minutos e 0 segundos
startCountdown(2, 49, 0);

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


document.addEventListener('DOMContentLoaded', function () {
    const videoSection = document.getElementById('video-section');
    const video = document.getElementById('video-player');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Iniciar o vídeo com som e loop ao tornar a seção visível
                video.play().catch(error => {
                    console.log('Autoplay falhou devido a restrições do navegador:', error);
                });
            } else {
                // Pausar o vídeo se a seção não estiver visível
                video.pause();
            }
        });
    }, { threshold: 0.5 }); // Ativa quando 50% da seção estiver visível

    observer.observe(videoSection);
});


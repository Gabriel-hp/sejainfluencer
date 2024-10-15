function toggleAnswer(e){let t=e.nextElementSibling,n=e.querySelector(".faq-icon");"none"===t.style.display||""===t.style.display?(t.style.display="block",n.textContent="X"):(t.style.display="none",n.textContent="+")}let slideIndex=0,autoSlideInterval;function moveSlide(e){let t=document.querySelector(".carousel-slide"),n=t.children.length;(slideIndex+=e)<0?slideIndex=n-1:slideIndex>=n&&(slideIndex=0),t.style.transform=`translateX(-${100*slideIndex}%)`,resetAutoSlide()}function autoSlide(){moveSlide(1)}function resetAutoSlide(){clearInterval(autoSlideInterval),autoSlideInterval=setInterval(autoSlide,5e3)}function startCountdown(e,t,n){let l=document.getElementById("time-remaining"),o=3600*e+60*t+n;function i(){let e=Math.floor(o/3600),t=Math.floor(o%3600/60),n=o%60;l.textContent=`${e} horas ${t} minutos ${n} segundos`,o>0?o--:(clearInterval(d),l.textContent="Tempo Esgotado!")}i();let d=setInterval(i,1e3)}function openLightbox(e){let t=document.getElementById("lightbox"),n=document.getElementById("lightbox-img");n.src=e,t.style.display="flex"}function closeLightbox(){let e=document.getElementById("lightbox");e.style.display="none"}document.addEventListener("DOMContentLoaded",()=>{autoSlideInterval=setInterval(autoSlide,5e3)}),startCountdown(2,49,0),document.getElementById("lightbox").addEventListener("click",function(e){e.target===this&&closeLightbox()}),document.addEventListener("keydown",function(e){"Escape"===e.key&&closeLightbox()}),document.addEventListener("DOMContentLoaded",function(){let e=document.getElementById("youtube-player"),t=document.getElementById("sound-overlay");t.addEventListener("click",function(){e.src=e.src.replace("mute=1","mute=0"),t.style.display="none"})});
document.addEventListener('DOMContentLoaded', function() {
    const videoPlaceholder = document.getElementById('video-placeholder');
    const youtubePlayer = document.getElementById('youtube-player');

    // Quando o usuário clicar no placeholder, troque para o vídeo
    videoPlaceholder.addEventListener('click', function() {
        // Mostre o iframe do vídeo e esconda o placeholder
        youtubePlayer.style.display = 'block';
        videoPlaceholder.style.display = 'none';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const carouselSection = document.getElementById('carousel-section');
    const carouselSlide = document.querySelector('.carousel-slide');
    let autoPlayInterval;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Inicia o carrossel quando a seção estiver visível
                startCarousel();
            } else {
                // Pausa o carrossel quando a seção sair da vista
                stopCarousel();
            }
        });
    }, { threshold: 0.5 }); // Ativa quando 50% da seção estiver visível

    observer.observe(carouselSection);

    function startCarousel() {
        autoPlayInterval = setInterval(() => {
            moveSlide(1);
        }, 3000); // Muda a imagem a cada 3 segundos
    }

    function stopCarousel() {
        clearInterval(autoPlayInterval);
    }

    function moveSlide(direction) {
        const slideWidth = carouselSlide.clientWidth;
        carouselSlide.scrollLeft += direction * slideWidth;
    }
});

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carouselSlide = document.querySelector('.carousel-slide');

let counter = 1;
const size = carouselSlide.clientWidth; // Ancho de cada imagen

carouselSlide.style.transform = `translateX(${-size * counter}px)`;

nextBtn.addEventListener('click', () => {
    if (counter >= carouselSlide.children.length - 1) return;
    carouselSlide.style.transition = 'transform 0.5s ease-in-out';
    counter++;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = 'transform 0.5s ease-in-out';
    counter--;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});

carouselSlide.addEventListener('transitionend', () => {
    if (carouselSlide.children[counter].id === 'last-clone') {
        carouselSlide.style.transition = 'none';
        counter = carouselSlide.children.length - 2;
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }
    if (carouselSlide.children[counter].id === 'first-clone') {
        carouselSlide.style.transition = 'none';
        counter = carouselSlide.children.length - counter;
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }
});
